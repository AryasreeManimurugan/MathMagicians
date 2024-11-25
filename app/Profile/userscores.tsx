import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

type GradesData = {
    Kindergarten: number[];
    "Grade 1": number[];
    "Grade 2": number[];
    "Grade 3": number[];
    "Grade 4": number[];
    "Grade 5": number[];
  };
  
const UserScores: React.FC = () => {
  const gradesData = {
    Kindergarten: [85, 90],
    "Grade 1": [90, 88],
    "Grade 2": [92, 95],
    "Grade 3": [80, 85],
    "Grade 4": [75, 83],
    "Grade 5": [89, 91],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Quiz Scores</Text>
      {Object.entries(gradesData).map(([grade, scores]) => (
        <View key={grade} style={styles.gradeSection}>
          <Text style={styles.gradeHeader}>{grade}</Text>
          <View style={styles.scoresContainer}>
            {scores.length > 0 ? (
              scores.map((score, idx) => (
                <Text key={idx} style={styles.scoreText}>
                  Quiz {idx + 1}: {score}%
                </Text>
              ))
            ) : (
              <Text style={styles.noScoresText}>No quizzes taken yet.</Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#483d8b",
    textAlign: "center",
    marginBottom: 20,
  },
  gradeSection: {
    backgroundColor: "#e6e6fa",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  gradeHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 10,
  },
  scoresContainer: {
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  noScoresText: {
    fontSize: 16,
    color: "#999",
    fontStyle: "italic",
  },
});

export default UserScores;