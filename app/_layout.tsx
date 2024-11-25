import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen
        name="GradeSelection"
        options={{ title: "Select Your Grade" }}
      />
        <Stack.Screen
        name="Profile/userInfo"
        options={{ title: "View Personal Info" }}
      />

     <Stack.Screen
        name="Profile/userprogress"
        options={{ title: "My Progress" }}
      />

<Stack.Screen
        name="Profile/userscores"
        options={{ title: "My Scores" }}
      />

       <Stack.Screen
        name="Profile/profilemain"
        options={{ title: "My Profile" }}
      />
      <Stack.Screen
        name="1st Grade/FirstWelcome"
        options={{ title: "Welcome to First Grade! " }}
      />

      <Stack.Screen
        name="1st Grade/FirstLesson"
        options={{ title: " " }}
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
    </Stack>
  );
}
