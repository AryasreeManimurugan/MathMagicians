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
