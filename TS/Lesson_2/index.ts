// ! Khai báo kiểu dữ liệu trong typescript với keyword "type"
// ! Biết khai báo với string, boolean, number, array, object..
// ! Biết tham chiếu các type, mixin type, generic type
const message: string = "Hom nay troi dep qua, di choi ko em?";

const myAge: number = 28;
const isMarried: boolean = false;
const mySkills: string[] = [
  "HTML-CSS",
  "Javascript",
  "PHP",
  "MySQL",
  "MongoDB",
]; // array type
const mySkills2: Array<string> = ["HTML-CSS", "JS", "PHP"]; // generic type

mySkills.push("ReactJS");

type educationType = {
  university: string;
  major: string;
  GPA: number;
};

type projectType = {
  id: number;
  name: string;
  description: string;
};
type porfolioType = {
  fullName: string;
  address: string;
  age: number;
  job: string;
  birthDay: string;
  bio: string;
  skills: string[];
  education: educationType;
  projects?: Array<projectType>; // ! Tham chiếu 1 type vào 1 type khác
};

const myPortfolio: porfolioType = {
  fullName: "Hoang",
  address: "Hanoi, Vietnam",
  age: 32,
  job: "Software Engineer",
  birthDay: "1992-11-27",
  bio: "Yêu màu hồng, sống mộng mơ, thích làm thơ...",
  skills: ["HTML-CSS", "Javascript", "PHP", "MySQL", "MongoDB"],
  education: {
    university: "FPT Polytectnic Hanoi",
    major: "Information Technology",
    GPA: 3.0,
  },
  projects: [
    {
      id: 1,
      name: "E-commerce website",
      description: "Build an e-commerce website with ReactJS and NodeJS",
    },
    {
      id: 2,
      name: "Music player",
      description: "Build a music player with Angular and Firebase",
    },
  ],
};

console.log(myPortfolio);
