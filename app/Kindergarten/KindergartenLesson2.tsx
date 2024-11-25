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

// Define types for question keys and selected answers
type QuestionKey = "q1" | "q2" | "q3" | "q4" | "q5";

interface SelectedAnswers {
  [key in QuestionKey]: string | null;
}

const KindergartenLesson2: React.FC = () => {
  const router = useRouter();

  // State for selected answers and feedback
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
  });
  const [submitted, setSubmitted] = useState(false);

  // Correct answers for the quiz
  const correctAnswers = {
    q1: "Circle",
    q2: "Red",
    q3: "Triangle",
    q4: "Green",
    q5: "Square",
  };

  // Questions and options
  const questions = [
    {
      key: "q1",
      text: "What shape is this? 🔵",
      options: ["Square", "Circle", "Triangle", "Rectangle"],
    },
    {
      key: "q2",
      text: "What color is this? 🟥",
      options: ["Green", "Blue", "Red", "Yellow"],
    },
    {
      key: "q3",
      text: "Identify the shape: 🔺",
      options: ["Circle", "Square", "Triangle", "Hexagon"],
    },
    {
      key: "q4",
      text: "What color is this? 🟩",
      options: ["Purple", "Orange", "Green", "Brown"],
    },
    {
      key: "q5",
      text: "What shape is this? 🟧",
      options: ["Square", "Triangle", "Circle", "Pentagon"],
    },
  ];

  // Function to handle option selection
  const handleOptionSelect = (questionKey: QuestionKey, option: string) => {
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
        <Text style={styles.title}>Lesson 2: Shapes and Colors</Text>
        <Text style={styles.description}>
          In this lesson, you will learn about different shapes and colors.
          We’ll explore basic shapes like circles, squares, and triangles and
          identify colors associated with each shape.
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Watch the Video</Text>
        <View style={styles.video}>
          <YouTubeIframe height={200} videoId="eDKNVuu_TAs" />
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
                  selectedAnswers[question.key] === option && styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect(question.key as QuestionKey, option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            {submitted && (
              <Text
                style={[
                  styles.feedbackText,
                  selectedAnswers[question.key as QuestionKey] === correctAnswers[question.key as keyof typeof correctAnswers]
                    ? styles.correct
                    : styles.wrong,
                ]}
              >
                {selectedAnswers[question.key as QuestionKey] === correctAnswers[question.key as keyof typeof correctAnswers]
                  ? "Correct!"
                  : `Wrong! The correct answer is ${correctAnswers[question.key as keyof typeof correctAnswers]}.`}
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
          onPress={() => router.push("/Kindergarten/KindergartenQuiz2")}
        >
          <Text style={styles.buttonText}>Take Graded Quiz</Text>
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

export default KindergartenLesson2;
