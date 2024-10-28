import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to Math Magicians</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.customButton}>
          <Link href="/login" style={styles.link}>
            <Text style={styles.buttonText}>Login</Text>
          </Link>
        </Pressable>
        <Pressable style={styles.customButton}>
          <Link href="/signup" style={styles.link}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF", // Vibrant blue background
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#ffffff", // White border to stand out
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "#000080",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    marginBottom: 50,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  customButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#ffffff", // White button background
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000080",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  link: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#1E90FF", // Blue text to match background theme
    fontSize: 20,
    fontWeight: "600",
  },
});
