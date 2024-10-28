import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const KindergartenWelcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpeg")} // Make sure this path is correct
        style={styles.logo}
      />
      <Text style={styles.headerText}>Welcome to Kindergarten</Text>

      <TouchableOpacity style={styles.lessonButton}>
        <Text style={styles.buttonText}>Lesson 1: Basic Counting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lessonButton}>
        <Text style={styles.buttonText}>Lesson 2: Shapes and Colors</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF", // Blue background
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 30,
  },
  lessonButton: {
    width: "80%",
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: "#FFFFFF", // White button background
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#1E90FF", // Blue text to match theme
    fontWeight: "600",
  },
});

export default KindergartenWelcome;
