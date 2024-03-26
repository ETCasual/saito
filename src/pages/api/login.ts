import type { NextApiHandler } from "next";
import { google } from "googleapis";
import { type FormikLoginForm } from "..";

const handler: NextApiHandler = async (req, res) => {
  if ((req.method = "POST")) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const { password, username } = JSON.parse(req.body) as FormikLoginForm;
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

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Credentials!A2:C1000",
      });

      const find = response.data.values?.find(
        (a) => a[0] === username && a[1] === password,
      );

      if (find) {
        console.log(find);
        return res.status(200).json({ loggedIn: true, name: String(find[2]) });
      } else res.status(403).json({ loggedIn: false });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};

export default handler;
