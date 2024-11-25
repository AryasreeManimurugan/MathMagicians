import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const KindergartenResults2: React.FC = () => {
  const router = useRouter();
  const { score } = useLocalSearchParams(); // Retrieve score from parameters
  
  // Convert score to a number
  const scoreNumber = Number(score); // or parseInt(score, 10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>
      <Text style={styles.scoreText}>Your Score: {scoreNumber} / 10</Text>
      <Text style={styles.messageText}>
        {scoreNumber >= 7
          ? "Great job! You passed the quiz."
          : "Keep practicing! Try again to improve your score."}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            scoreNumber >= 7
              ? "../GradeSelection"
              : "/Kindergarten/KindergartenQuiz2"
          )
        }
      >
        <Text style={styles.buttonText}>
          {scoreNumber >= 7
            ? "Proceed to Grade Selection"
            : "Return to Lesson 2: Shapes and Colors"}
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

export default KindergartenResults2;
