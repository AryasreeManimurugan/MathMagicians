import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Main Screens */}
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen
        name="GradeSelection"
        options={{ title: "Select Your Grade" }}
      />

      {/* Profile Screen */}
      <Stack.Screen
        name="Profile/profilemain"
        options={{ title: "My Profile" }}
      />

      {/* Kindergarten Screens */}
      <Stack.Screen
        name="Kindergarten/KindergartenWelcome"
        options={{ title: "Welcome to Kindergarten" }}
      />
      <Stack.Screen
        name="Kindergarten/KindergartenLesson1"
        options={{ title: "Lesson 1: Basic Counting" }}
      />
      <Stack.Screen
        name="Kindergarten/KindergartenQuiz1"
        options={{ title: "Basic Counting Quiz" }}
      />
      <Stack.Screen
        name="Kindergarten/KindergartenResults1"
        options={{ title: "Basic Counting Quiz Results" }}
      />
      <Stack.Screen
        name="Kindergarten/KindergartenLesson2"
        options={{ title: "Lesson 2: Shapes and Colors" }}
      />
      <Stack.Screen
        name="Kindergarten/KindergartenQuiz2"
        options={{ title: "Shapes and Colors Quiz" }}
      />
      <Stack.Screen
        name="Kindergarten/KindergartenResults2"
        options={{ title: "Shapes and Colors Quiz Results" }}
      />


      {/* First Grade Screens */}


      <Stack.Screen
        name="FirstGrade/FirstWelcome"
        options={{ title: "Welcome to First Grade" }}
      />

       <Stack.Screen
        name="FirstGrade/FirstLesson"
        options={{ title: "Lesson 1" }}
      />



      <Stack.Screen
        name="FirstGrade/SecLesson"
        options={{ title: "Lesson 2" }}
      />


     <Stack.Screen
        name="FirstGrade/Quiz1"
        options={{ title: "Quiz 1" }}
      />



     <Stack.Screen
        name="FirstGrade/result1"
        options={{ title: "Result 1" }}
      />



      <Stack.Screen
        name="FirstGrade/Quiz2"
        options={{ title: "Quiz 2" }}
      />


        <Stack.Screen
        name="FirstGrade/result2"
        options={{ title: "Result 2" }}
      />


       {/* 2nd grade Screens */}

      <Stack.Screen
        name="SecondGrade/SecGradeWelcome"
        options={{ title: "Welcome to Second Grade" }}
      />



      <Stack.Screen
        name="SecondGrade/SecGradeLesson1"
        options={{ title: "Second Grade Lesson 1" }}
      />


     <Stack.Screen
        name="SecondGrade/SecGradeLesson2"
        options={{ title: "Second Grade Lesson 2" }}
      />



      <Stack.Screen
        name="SecondGrade/SecGradeQuiz1"
        options={{ title: "Second Grade Quiz 1" }}
      />



     <Stack.Screen
        name="SecondGrade/SecGradeQuiz2"
        options={{ title: "Second Grade Quiz 2" }}
      />



     <Stack.Screen
        name="SecondGrade/SecResult1"
        options={{ title: "Second Grade Result 1" }}
      />



      <Stack.Screen
        name="SecondGrade/SecResult2"
        options={{ title: "Second Grade Result 2" }}
      />




         {/* 3rd grade Screens */}



         <Stack.Screen
        name="ThirdGrade/ThirdGradeWelcome"
        options={{ title: "Welcome to Third Grade" }}
      />



      <Stack.Screen
        name="ThirdGrade/ThirdGradeLesson1"
        options={{ title: "Third Grade Lesson 1" }}
      />


     <Stack.Screen
        name="ThirdGrade/ThirdGradeLesson2"
        options={{ title: "Third Grade Lesson 2" }}
      />



      <Stack.Screen
        name="ThirdGrade/ThirdGradeQuiz1"
        options={{ title: "Third Grade Quiz 1" }}
      />



     <Stack.Screen
        name="ThirdGrade/ThirdGradeQuiz2"
        options={{ title: "Third Grade Quiz 2" }}
      />



     <Stack.Screen
        name="ThirdGrade/ThirdResult1"
        options={{ title: "Third Grade Result 1" }}
      />



      <Stack.Screen
        name="ThirdGrade/ThirdResult2"
        options={{ title: "Third Grade Result 2" }}
      />








    </Stack>
  );
}
