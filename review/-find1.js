let courses = [
    {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
    },
    {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
    },
    {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "49.00",
    },
    {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
    },
  ];

  // for (const course of courses) {
  //   if (course.CourseId == "PROG400") {
  //     console.log(course);
  //   }
  // }

//   function printCourse(course){
//     console.log(course);
//   }
//   courses.find(printCourse);

//   //for all 
//   courses.forEach(printCourse);
//   //for one
//   courses.find(printCourse);
//   //find many 
//   courses.filter(printCourse)


// let foundCourse= courses.find((course) =>{return course.CourseId =="PROG400";
// });
// console.log(foundCourse);

// let coursesInClassRoom1 = courses.filter((c) => c.Location == "Classroom 1");
// console.log(coursesInClassRoom1)

// const course = courses.find((c) => c.Fee == "100.00");
// console.log(course);

// const course1= courses.find((c) => c.CourseId == "PROJ500");
// console.log(course1);

const coursesInClassroom1 = courses.filter((c) => c.Location == "Classroom 1")
console.log(coursesInClassroom1);