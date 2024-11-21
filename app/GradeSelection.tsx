import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const GradeSelection: React.FC = () => {
  const router = useRouter();
  
return (
  <View style={styles.container}>
    {/* Profile Button */}
    <TouchableOpacity
      style={styles.profileButton}
      onPress={() => {
        console.log("Navigating to /Profile/profilemain");
        router.push("/Profile/profilemain");
      }}
    >
      <Image
        source={require("../assets/images/user.png")}
        style={styles.profileImage}
      />
    </TouchableOpacity>

    <Image source={require("../assets/images/logo.jpeg")} style={styles.logo} />
    <Text style={styles.text}>Select Grade Level</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Kindergarten/KindergartenWelcome")} // Navigate to KindergartenWelcome screen
      >
        <Text style={styles.buttonText}>Kindergarten</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>1st Grade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>2nd Grade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>3rd Grade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>4th Grade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>5th Grade</Text>
      </TouchableOpacity>
    </View>
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
  profileButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#ffffff",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "#000080",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#1E90FF",
    fontWeight: "600",
  },
});

export default GradeSelection;
