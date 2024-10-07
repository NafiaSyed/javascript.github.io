const coachingCenter = {
    "coachingCenter": {
      "name": "Besant Technologies",
      "branch": "Anna Nagar",
      "location": " No 54, 1633, 13th Main Rd, Bharathi Colony, Anna Nagar, Chennai.",
      "courses": [
        {
          "title": " Java Full stack Development",
          "fees": 35000,
          "instructor": "Rajendran"
        },
        {
          "title": "Data Analytics",
          "fees": 35000,
          "instructor": "Deva"
        }
      ],
      "students": [
        {
          "name": "Ravi",
          "age": 22,
          "enrolledCourses": " Java Full Stack Development"
        }
      ]
    }
  };
  
  // Example: Accessing data from the coaching center object
  console.log("Center Name:", coachingCenter.coachingCenter.name);
  console.log("Location:", coachingCenter.coachingCenter.location);
  console.log("Branch:", coachingCenter.coachingCenter.branch);
  console.log("Data Scientist Course:", coachingCenter.coachingCenter.courses[1]);
  console.log("Full Stack Development Instructor Name:", coachingCenter.coachingCenter.courses[0].instructor);
  console.log("Data Scientist Instructor Name:", coachingCenter.coachingCenter.courses[1].instructor);
  console.log("Student Name:", coachingCenter.coachingCenter.students[0].name);
  console.log("Student Details:", coachingCenter.coachingCenter.students[0]);
  