import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const KindergartenQuiz1: React.FC = () => {
  const router = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});

  const questions = [
    {
      question: "How many apples are there? 🍎🍎🍎",
      options: [2, 3, 4],
      answer: 1,
    },
    {
      question: "How many cats are there? 🐱🐱🐱🐱",
      options: [3, 4, 5],
      answer: 1,
    },
    {
      question: "How many stars are there? ⭐⭐⭐",
      options: [3, 2, 5],
      answer: 0,
    },
    {
      question: "How many cars are there? 🚗🚗🚗🚗🚗",
      options: [5, 4, 6],
      answer: 0,
    },
    {
      question: "How many trees are there? 🌳🌳",
      options: [1, 2, 3],
      answer: 1,
    },
    {
      question: "How many fish are there? 🐟🐟🐟🐟🐟🐟",
      options: [5, 6, 7],
      answer: 1,
    },
    {
      question: "How many suns are there? 🌞🌞",
      options: [2, 3, 4],
      answer: 0,
    },
    {
      question: "How many flowers are there? 🌸🌸🌸",
      options: [2, 3, 4],
      answer: 1,
    },
    {
      question: "How many pencils are there? ✏️✏️",
      options: [1, 3, 2],
      answer: 2,
    },
    {
      question: "How many balloons are there? 🎈🎈🎈🎈",
      options: [4, 3, 5],
      answer: 0,
    },
  ];

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    const score = questions.reduce((total, question, index) => {
      const selectedAnswer = selectedAnswers[index];
      return total + (selectedAnswer === question.answer ? 1 : 0);
    }, 0);
    router.push({
      pathname: "/Kindergarten/KindergartenResults1",
      params: { score },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Basic Counting Quiz</Text>
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

export default KindergartenQuiz1;
