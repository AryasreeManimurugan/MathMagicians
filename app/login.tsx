import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { auth } from "@/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";


const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const authentication = auth;
  
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setErrorMessage("All fields are required");
        return;
      }

      // Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(authentication, email, password);

      // If login is successful, show success message
      Alert.alert("Login Successful", "Welcome back!");

      // Redirect to the next screen after successful login
      router.push("/GradeSelection");

      // Clear input fields after successful login
      setEmail("");
      setPassword("");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("No user found with this email");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={require("../assets/images/logo.jpeg")} style={styles.logo} />
          <Text style={styles.headerText}>Login</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#87cefa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#87cefa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Error Message */}
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          {/* Login Button */}
          <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF", // Blue background
    paddingHorizontal: 20,
  },
  container: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#ffffff", // White border to match WelcomeScreen
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "#000080",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff", // White background for inputs
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#87cefa",
    marginVertical: 10,
    color: "#000080", // Dark blue text color for input fields
  },
  customButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#ffffff", // White button background
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#87cefa", // Light blue border
    marginVertical: 20,
    alignItems: "center",
    shadowColor: "#000080",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  buttonText: {
    color: "#1E90FF", // Blue button text
    fontSize: 18,
    fontWeight: "600",
  },
  signUpText: {
    color: "#ffffff",
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
  successText: {
    color: "green",
    fontSize: 14,
    marginTop: 10,
  },
});

export default LoginScreen;
