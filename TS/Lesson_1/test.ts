type user = {
  name: string;
  age: number;
  address: string;
  job: string;
  isMarried: boolean;
  gender: string;
};

const myInfor: user = {
  name: "Nguyen Minh Hoang",
  age: 32,
  address: "Bắc Giang",
  job: "Software Engineer",
  isMarried: true,
  gender: "male",
};

const myStudentInfor: user = {
  name: "Nguyen Thi Dung",
  age: 19,
  address: "Hà Nội",
  job: "Student",
  isMarried: false,
  gender: "felame",
};

console.log(`Xin chao ca lop, thay ten la ${myInfor.name}`);
