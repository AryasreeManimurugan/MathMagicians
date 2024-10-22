import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router"; // useRouter from expo-router

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#d8bfd8"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#d8bfd8"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#d8bfd8"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push("/GradeSelection")} // Navigate to GradeSelection
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.signUpText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6a5acd",
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#8a2be2",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f0f8ff",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#7b68ee",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#9370db",
    marginVertical: 10,
    color: "#f0f8ff",
  },
  customButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#7b68ee",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#9370db",
    marginVertical: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#f0f8ff",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpText: {
    color: "#d8bfd8",
    marginTop: 20,
    fontSize: 16,
  },
});

export default SignUpScreen;
