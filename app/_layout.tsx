import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} /> // Maps to
      index.tsx
      <Stack.Screen name="login" options={{ title: "Login" }} /> // Maps to
      login.tsx
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} /> // Maps to
      signup.tsx
      <Stack.Screen
        name="GradeSelection" // Maps to GradeSelection.tsx
        options={{ title: "Select Your Grade" }}
      />
      <Stack.Screen
        name="KindergartenWelcome" // Maps to KindergartenWelcome.tsx
        options={{ title: "Welcome to Kindergarten" }}
      />
    </Stack>
  );
}
