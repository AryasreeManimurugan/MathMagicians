import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const result1: React.FC = () => {
  const router = useRouter();
  const { score } = useLocalSearchParams(); // Retrieve score from parameters

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>
      <Text style={styles.scoreText}>Your Score: {score} / 10</Text>
      <Text style={styles.messageText}>
        {score >= 7
          ? "Great job! You passed the quiz."
          : "Keep practicing! Try again to improve your score."}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            score >= 7
              ? "/FirstGrade/SecLesson"
              : "/FirstGrade/FirstLesson"
          )
        }
      >
        <Text style={styles.buttonText}>
          {score >= 7
            ? "Proceed to Lesson 2"
            : "Return to Lesson 1"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#483d8b",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#483d8b",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default result1;