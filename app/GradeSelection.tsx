import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type GradeSelectionScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "GradeSelection">;
};

const GradeSelectionScreen: React.FC<GradeSelectionScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => {
          /* Navigate to profile screen or handle profile actions */
        }}
      >
        <Image
          source={require("../assets/images/profileicon.png")} // Add the path to your profile icon here
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <Text style={styles.headerText}>Select Your Grade</Text>

      <View style={styles.buttonContainer}>
        {[
          "Kindergarten",
          "1st Grade",
          "2nd Grade",
          "3rd Grade",
          "4th Grade",
          "5th Grade",
        ].map((grade, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gradeButton}
            onPress={() => {
              /* Handle grade selection */
            }}
          >
            <Text style={styles.gradeText}>{grade}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  profileIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f0f8ff",
    textShadowColor: "#483d8b",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradeButton: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#9370db",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#483d8b",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  gradeText: {
    color: "#f0f8ff",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default GradeSelectionScreen;
