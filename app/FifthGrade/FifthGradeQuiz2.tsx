import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const FifthGradeQuiz2: React.FC = () => {
  const router = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});

  const questions = [
    {
      question: " (3.6 + 2.4) * 2 = 12", options: ["True", "False"],
      answer: "True",
    },
    {
      question: " 6 / (2 + 1) * 3 = 9", options: ["True", "False"],
      answer: "True",
    },
    {
      question: " 4.5 * (3 - 1.5) = 9", options: ["True", "False"],
     
      answer: "False",
    },
    {
      question: "7.2 / (3 * 0.5) = 4.8", options: ["True", "False"],
      
      answer: "True",
    },
    {
      question: "(8.4 / 2) + 3 = 7.2", options: ["True", "False"],
  
      answer: "False",
    },
    {
      question: "2 * (4.1 - 1.1) + 0.8 = 7.8", options: ["True", "False"]  ,
      
      answer: "True",
    },
    {
      question: "5.5 + (6 / 2) * 1.5 = 10", options: ["True", "False"],
      
      answer: "True",
    },
    {
      question: "(10.2 / 3) + 2 = 5.4", options: ["True", "False"],
     
      answer: "False",
    },
    {
      question: "3 * (2.5 + 1.5) = 12", options: ["True", "False"] ,
     
      answer: "True",
    },
    {
      question: "(4 + 3.5) * 2 - 5 = 10.5", options: ["True", "False"],
      
      answer: "True",
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
      pathname: "/FifthGrade/FifthGradeResult2",
      params: { score },
    });
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}> Order of Operation Quiz</Text>
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

export default FifthGradeQuiz2;