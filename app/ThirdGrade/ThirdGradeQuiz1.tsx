import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const ThirdGradeQuiz1: React.FC = () => {
  const router = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});

  const questions = [
    { question: "Do the Multiplication: 24 * 18", options: [82, 432, 62] },
    { question: "Do the Multiplication: 36 * 25", options: [900, 203, 100] },
    { question: "Do the Multiplication: 42 * 19", options: [105, 276, 798] },
    { question: "Do the Multiplication: 31 * 22", options: [500, 682, 112] },
    { question: "Do the Multiplication: 45 * 32", options: [1440, 298, 1000] },
    { question: "Do the Multiplication: 38 * 27", options: [456, 1006, 1026] },
    { question: "Do the Multiplication: 29 * 34", options: [291, 986, 707] },
    { question: "Do the Multiplication: 46 * 28", options: [2001, 1288, 7789] },
    { question: "Do the Multiplication: 53 * 37", options: [1961, 345, 1002] },
    { question: "Do the Multiplication: 62 * 45", options: [4000, 308, 2790] },
  ];

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    const score = Object.values(selectedAnswers).reduce(
      (total, answer) => total + (answer !== null ? 1 : 0),
      0
    );
    router.push({ pathname: "/ThirdGrade/ThirdResult1", params: { score } });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Arithmetic Quiz 1</Text>
        <Text style={styles.description}>
          Answer the following questions by selecting the correct option.
        </Text>
      </View>

      {questions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{q.question}</Text>
          <View style={styles.optionsContainer}>
            {q.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.optionButton,
                  selectedAnswers[index] === optionIndex &&
                    styles.selectedOption,
                ]}
                onPress={() => handleAnswerSelect(index, optionIndex)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedAnswers[index] === optionIndex &&
                      styles.selectedOptionText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <View style={styles.submitSection}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitQuiz}
        >
          <Text style={styles.buttonText}>Submit Quiz</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
  },
  sectionContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  questionContainer: {
    width: "90%",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  questionText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  selectedOption: {
    backgroundColor: "#483d8b",
  },
  selectedOptionText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  submitSection: {
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
  },
  submitButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#483d8b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ThirdGradeQuiz1;