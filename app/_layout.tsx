import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />{" "}
      {/* Welcome Screen */}
      <Stack.Screen name="login" options={{ title: "Login" }} />{" "}
      {/* Login Screen */}
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />{" "}
      {/* Sign Up Screen */}
      <Stack.Screen
        name="GradeSelection"
        options={{ title: "Select Your Grade" }}
      />{" "}
      {/* Grade Selection Screen */}
    </Stack>
  );
}
