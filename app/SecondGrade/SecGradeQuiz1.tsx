import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const SecGradeQuiz1: React.FC = () => {
  const router = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});

  const questions = [
    {
      question: "Do the addition: 32 + 27", options: [23, 73, 59],
      answer: 59,
    },
    {
      question: "Do the addition: 89 + 10", options: [33, 22, 99],
      answer: 99,
    },
    {
      question: "Do the addition: 21 + 12", options: [33, 12, 0],
     
      answer: 33,
    },
    {
      question: "Do the addition: 34 + 54", options: [58, 88, 82],
      
      answer: 88,
    },
    {
      question: "Do the addition: 10 + 20", options: [30, 20, 10],
  
      answer: 30,
    },
    {
      question: "Do the addition: 13 + 37", options: [84, 50, 89]  ,
      
      answer: 50,
    },
    {
      question: "Do the addition: 17 + 11", options: [12, 28, 17],
      
      answer: 28,
    },
    {
      question: "Do the addition: 19 + 65", options: [84, 63, 87],
     
      answer: 84,
    },
    {
      question: "Do the addition: 44 + 45", options: [12, 43, 89] ,
     
      answer: 89,
    },
    {
      question: "Do the addition: 24 + 53", options: [77, 30, 21],
      
      answer: 77,
    },
  ];

  const handleAnswerSelect = (questionIndex: number, selectedValue: number) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedValue, 
    }));
  };
  
  const handleSubmitQuiz = () => {
    const score = questions.reduce((total, question, index) => {
      const selectedAnswer = selectedAnswers[index]; 
      return total + (selectedAnswer === question.answer ? 1 : 0); 
    }, 0);
  
    router.push({
      pathname: "/SecondGrade/SecResult1",
      params: { score },
    });
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}> Addition Quiz</Text>
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
      selectedAnswers[index] === option && styles.selectedOption,
    ]}
    onPress={() => handleAnswerSelect(index, option)}
  >
    <Text
      style={[
        styles.optionText,
        selectedAnswers[index] === option && styles.selectedOptionText,
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

export default SecGradeQuiz1;