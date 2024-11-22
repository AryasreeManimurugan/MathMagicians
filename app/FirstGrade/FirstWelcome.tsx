import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const FirstWelcome: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Welcome to First Grade </Text>

      <TouchableOpacity
        style={styles.lessonButton}
        onPress={() => router.push("/FirstGrade/FirstLesson")}
      >
        <Text style={styles.buttonText}>Lesson 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.lessonButton}
        onPress={() => router.push("/FirstGrade/SecLesson")} 
      >
        <Text style={styles.buttonText}>Lesson 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF",
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
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#1E90FF",
    fontWeight: "600",
  },
});

export default FirstWelcome;
