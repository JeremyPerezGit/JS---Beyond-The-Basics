// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

// Exercise
const instructors = [
  {
    name: "John",
    availability: "all",
    specialities: ["Javascript", "Python", "C++"],
  },
  {
    name: "Mary",
    availability: "weekend",
    specialities: ["Javascript", "Ruby", "C++"],
  },
  {
    name: "Chris",
    availability: "evenings",
    specialities: ["Javascript"],
  },
  {
    name: "Anthony",
    availability: "all",
    specialities: ["Python", "Ruby"],
  },
  {
    name: "Pauline",
    availability: "only Mondays",
    specialities: ["Javascript", "Html", "CSS"],
  },
  {
    name: "Mark",
    availability: "all",
    specialities: ["C#", "C++", "Javascript"],
  },
  {
    name: "Helen",
    availability: "evenings",
    specialities: ["Python", "C++"],
  },
  {
    name: "Charles",
    availability: "none",
    specialities: ["Python"],
  },
];

// PART 1
// Given an array with different objects inside that contain an instructor profile with his/her name, the availability and the specialities, you need to create a new array that contains only instructors that know about Javascript and available on the weekend. Keep in mind that if their availability is all, it means that they are also available on the weekend, so they need to be included too.

const filterInstructors = instructors.filter(
  (instructor) =>
    instructor.specialities.includes("Javascript") &&
    (instructor.availability === "all" || instructor.availability === "weekend")
);
console.log(filterInstructors);

// PART 2
// Iterate over that new array of instructors available and show a message per instructor saying:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class

// PART 3
// Modify the previous message checking that if an instructor also knows about Python, the message needs to be:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop

filterInstructors.forEach((instructor) => {
  if (instructor.specialities.includes("Python")) {
    console.log(
      `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`
    );
  } else {
    console.log(
      `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`
    );
  }
});
