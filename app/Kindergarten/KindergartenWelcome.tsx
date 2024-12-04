import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const KindergartenWelcome: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>


       
      <TouchableOpacity
        style={styles.teacherButton}
        onPress={() => router.push("/Kindergarten/TeacherViewKG")}
      >
        <Text style={styles.buttonText}>TB</Text>
      </TouchableOpacity>



      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Welcome to Kindergarten</Text>

      <TouchableOpacity
        style={styles.lessonButton}
        onPress={() => router.push("/Kindergarten/KindergartenLesson1")}
      >
        <Text style={styles.buttonText}>Lesson 1: Basic Counting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.lessonButton}
        onPress={() => router.push("/Kindergarten/KindergartenLesson2")} // Navigate to KindergartenLesson2
      >
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
    backgroundColor: "#1E90FF",
    paddingHorizontal: 20,
  },

  teacherButton: {
  position: "absolute",
  top: 40,
  right: 20,
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: "#FFFFFF",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2},
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5,
  },

  teacherButtonText: {
   color: "#1E90FF",
   fontSize: 12,
   fontWeight: "bold",
   textAlign: "center", 
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

export default KindergartenWelcome;
