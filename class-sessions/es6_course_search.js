"use strict";
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
    Fee: "50.00",
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

function prog200StartDate(course) {
  if (course.CourseId == "PROG200") {
    return true;
  } else {
    return false;
  }
}

let startDate = courses.find(prog200StartDate);
if (startDate != undefined) {
  console.log(startDate.StartDate);
}






function findTitle(course) {
  if (course.Title == "Introduction to Angular") {
    return true;
  } else {
    return false;
  }
}

let courseTitle = courses.find(findTitle);
if (courseTitle != undefined) {
    console.log(courseTitle.Title);
}



function coursesUnder50(course){
 return Number(course.Fee) <= 50;
}

let cheapCourses = courses.filter(coursesUnder50); 
    console.log(cheapCourses);



    // function isFee50OrLess(course) {
    //     return Number(course.Fee) <= 50;
    //   }
      
    //   let inexpensiveCourses = courses.filter(isFee50OrLess);
    //   console.log(inexpensiveCourses);
