import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database";  // Ensure this imports the correct Firebase auth instance
import { firestoredb } from "../database";
import { doc, setDoc } from "firebase/firestore";
const SignUpScreen: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const authentication = auth;


  const handleSignup = async () => {
    if (!firstName || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      // Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // User created successfully, show success alert
      Alert.alert("Account Created", "Please log in!");

      // Redirect to Login screen
      router.push("/login");

      const docref = doc(firestoredb, "users",userCredential.user.uid);
      await setDoc(docref, {
        firstName: firstName,
        email: email,
        password: password,
      }); 

      // Clear input fields after successful sign-up
      setFirstName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already in use");
      } else if (error.code === "auth/weak-password") {
        setErrorMessage("Password is too weak");
      } else {
        setErrorMessage("An unexpected error occurred");
      }

     
    }
   
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#87cefa"
        value={firstName}
        onChangeText={setFirstName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#87cefa"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => router.push("/GradeSelection")}
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

export default SignUpScreen;
