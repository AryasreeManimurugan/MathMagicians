import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import YouTubeIframe from "react-native-youtube-iframe";

const ThirdGradeLesson2: React.FC = () => {
  const router = useRouter();

  // State for selected answers and feedback
  const [selectedAnswers, setSelectedAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
  });
  const [submitted, setSubmitted] = useState(false);

  // Correct answers for the quiz
  const correctAnswers = {
    q1: "12",
    q2: "12",
    q3: "9",
    q4: "12",
    q5: "9",
    q6: "12",
    q7: "9",
  };

  // Questions and options
  const questions = [
    {
      key: "q1",
      text: "Do the Division: 144 / 12 ",
      options: ["12", "144", "101", "25"],
    },
    {
      key: "q2",
      text: "Do the Division: 96 / 8",
      options: ["73", "50", "12", "33"],
    },
    {
      key: "q3",
      text: " Do the Division: 162 / 18",
      options: ["41", "9", "0", "8"],
    },
    {
      key: "q4",
      text: "Do the Division:  120 / 10",
      options: ["50", "21", "16", "12"],
    },
    {
      key: "q5",
      text: "Do the Division: 108 / 12",
      options: ["10", "9", "40", "19"],
    },



    {
      key: "q6",
      text: "Do the Division:  180 / 15",
      options: ["9", "5", "00", "12"],
    },



    {
      key: "q7",
      text: "Do the Division: 225/ 25",
      options: ["9", "7", "51", "30"],
    },








  ];

  // Function to handle option selection
  const handleOptionSelect = (questionKey: string, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionKey]: option }));
  };

  // Function to handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={styles.logo}
      />

      {/* Title Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Lesson 1</Text>
        <Text style={styles.description}>
        In this lesson, we will discuss division of two digit numbers. After you have finished the video below, enjoy practicing with the new skills you have achieved today. Go Magicians!
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Watch the Video</Text>
        <View style={styles.video}>
          <YouTubeIframe height={200} videoId="vUORnddaVYY" />
        </View>
      </View>

      {/* Practice Problems Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Practice Problems</Text>
        {questions.map((question) => (
          <View key={question.key} style={styles.problemContainer}>
            <Text style={styles.problemText}>{question.text}</Text>
            {question.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedAnswers[question.key] === option &&
                    styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect(question.key, option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            {submitted && (
              <Text
                style={[
                  styles.feedbackText,
                  selectedAnswers[question.key] === correctAnswers[question.key]
                    ? styles.correct
                    : styles.wrong,
                ]}
              >
                {selectedAnswers[question.key] === correctAnswers[question.key]
                  ? "Correct!"
                  : `Wrong! The correct answer is ${
                      correctAnswers[question.key]
                    }.`}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Submit Button */}
      <View style={styles.quizSection}>
        <TouchableOpacity style={styles.quizButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Answers</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation to Graded Quiz */}
      <View style={styles.quizSection}>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => router.push("/ThirdGrade/ThirdGradeQuiz2")}
        >
          <Text style={styles.buttonText}>Go to Graded Quiz</Text>
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
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#ffffff",
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#483d8b",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  problemContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    alignItems: "center",
  },
  problemText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  optionButton: {
    width: "90%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#483d8b",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#dcdcdc",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  feedbackText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  correct: {
    color: "green",
  },
  wrong: {
    color: "red",
  },
  quizSection: {
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
  },
  quizButton: {
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

export default ThirdGradeLesson2;