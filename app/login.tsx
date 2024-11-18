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
} from "react-native";
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("../assets/images/logo.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#87cefa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#87cefa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.customButton}
            onPress={() => router.push("/GradeSelection")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.signUpText}>
              Don't have an account? Sign Up
            </Text>
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
});

export default LoginScreen;
