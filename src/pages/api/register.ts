import type { NextApiHandler } from "next";
import { google } from "googleapis";
import { type FormikRegisterForm } from "../registration";
import { type Result } from "@/stores/useResult";

const handler: NextApiHandler = async (req, res) => {
  if ((req.method = "POST")) {
    const {
      name,
      phone,
      consultedBy,
      logistics,
      design,
      enforcement,
      culinary,
      graduate,
    } = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      req.body,
    ) as FormikRegisterForm & {
      consultedBy: string;
      logistics: Result;
      design: Result;
      culinary: Result;
      enforcement: Result;
      graduate: Result;
    };
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          client_id: process.env.CLIENT_ID,
          private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });
      const sheets = google.sheets({
        auth,
        version: "v4",
      });

      const now = Date.now();

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Responses!A:H",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              `=EPOCHTODATE(${now},2)`,
              name,
              phone,
              logistics ?? 0,
              design ?? 0,
              enforcement ?? 0,
              culinary ?? 0,
              graduate ?? 0,
              consultedBy,
            ],
          ],
        },
      });

      if (response.status === 200)
        return res.status(200).json({ result: "POSTED" });
      if (response.status !== 200)
        return res
          .status(response.status)
          .json({ result: response.statusText });

      // return res.status(200).json(null);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};

export default handler;
