export type Answer = {
  src: string;
  label: string;
};

export const questions: Record<
  number,
  {
    title: string;
    question: string;
    a: Answer;
    b: Answer;
    c: Answer;
    d: Answer;
  }
> = {
  1: {
    title: "1.title",
    question: "1.question",
    a: { src: "1.a.src", label: "1.a.label" },
    b: { src: "1.b.src", label: "1.b.label" },
    c: { src: "1.c.src", label: "1.c.label" },
    d: { src: "1.d.src", label: "1.d.label" },
  },
  2: {
    title: "2.title",
    question: "2.question",
    a: { src: "2.a.src", label: "2.a.label" },
    b: { src: "2.b.src", label: "2.b.label" },
    c: { src: "2.c.src", label: "2.c.label" },
    d: { src: "2.d.src", label: "2.d.label" },
  },
  3: {
    title: "3.title",
    question: "3.question",

    a: { src: "3.a.src", label: "3.a.label" },
    b: { src: "3.b.src", label: "3.b.label" },
    c: { src: "3.c.src", label: "3.c.label" },
    d: { src: "3.d.src", label: "3.d.label" },
  },
  // 4: {
  //   title: "4.title",
  //   question: "4.question",
  //   a: "4.a",
  //   b: "4.b",
  //   c: "4.c",
  //   d: "4.d",
  // },
  // 5: {
  //   title: "5.title",
  //   question: "5.question",
  //   a: "5.a",
  //   b: "5.b",
  //   c: "5.c",
  //   d: "5.d",
  // },
};

export type Event = {
  title: string;
  // buttonImg: string;
  sub: string;
  date: string;
  contentImg: string;
  type: "event" | "activity";
};

export const events: Event[] = [
  {
    title: "Selangor Aviation Showcase 2023",
    date: "September 2023",
    sub: "Skypark Regional Aviation Centre",
    contentImg: "events_1",
    type: "event",
  },
  {
    title: "Study Trip to Acuity International Sdn Bhd",
    date: "July 2022",
    sub: "Up & Rising Freight Forwarding Company",
    contentImg: "events_2",
    type: "event",
  },
  {
    title: "Work Integrated Learning",
    date: "May 2022",
    sub: "Pos Malaysia",
    contentImg: "events_3",
    type: "event",
  },
  {
    title: "Applied Learning to Westport Klang",
    date: "June 2022",
    sub: "",
    contentImg: "events_4",
    type: "event",
  },
  {
    title: "Applied Learning to Johor Port",
    date: "June 2023",
    sub: "",
    contentImg: "events_5",
    type: "event",
  },
  {
    title: "Work Integrated Learning",
    date: "June 2023",
    sub: "Safeguard Oceanic",
    contentImg: "events_6",
    type: "event",
  },
  {
    title: "Applied Learning to KLATCC",
    date: "April 2022",
    sub: "",
    contentImg: "events_7",
    type: "event",
  },
  {
    title: "Applied Learning to Pos Aviation",
    date: "August 2023",
    sub: "KLIA",
    contentImg: "events_8",
    type: "event",
  },
  {
    title: "Applied Learning to Tiong Nam Logistics",
    date: "September 2022",
    sub: "KLIA",
    contentImg: "events_9",
    type: "event",
  },
  {
    title: "19th Asian Oil, Gas & Petrochemicals Engineering Exhibition",
    date: "September 2023",
    sub: "Kuala Lumpur Convention Centre",
    contentImg: "activity_1",
    type: "activity",
  },
  {
    title: "Saito UC Open Day",
    date: "July 2023",
    sub: "",
    contentImg: "activity_2",
    type: "activity",
  },
  {
    title: "Port Klang Authority Open Day",
    date: "May 2023",
    sub: "",
    contentImg: "activity_3",
    type: "activity",
  },
  {
    title: "Leadership Camp",
    date: "August 2023",
    sub: "Taman Eko Rimba Komanwel, Rawang",
    contentImg: "activity_4",
    type: "activity",
  },
  {
    title: "Sports Day",
    date: "May 2023",
    sub: "",
    contentImg: "activity_5",
    type: "activity",
  },
  {
    title: "Hari Raya Celebration",
    date: "May 2023",
    sub: "",
    contentImg: "activity_6",
    type: "activity",
  },
  {
    title: "Sambutan Merdeka",
    date: "August 2023",
    sub: "",
    contentImg: "activity_7",
    type: "activity",
  },
  {
    title: "Saito UC Open Day",
    date: "July 2023",
    sub: "",
    contentImg: "activity_8",
    type: "activity",
  },
  {
    title: "Askar Wataniah",
    date: "August 2023",
    sub: "",
    contentImg: "activity_9",
    type: "activity",
  },
];
