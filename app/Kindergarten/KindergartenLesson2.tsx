import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import YouTubeIframe from "react-native-youtube-iframe";

const KindergartenLesson2: React.FC = () => {
  const router = useRouter();

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
        <View style={styles.problemContainer}>
          <Text style={styles.problemText}>1. What shape is this? 🔵</Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer (e.g., Circle)"
          />
        </View>
        <View style={styles.problemContainer}>
          <Text style={styles.problemText}>2. What color is this? 🟥</Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer (e.g., Red)"
          />
        </View>
        <View style={styles.problemContainer}>
          <Text style={styles.problemText}>3. Identify the shape: 🔺</Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer (e.g., Triangle)"
          />
        </View>
        <View style={styles.problemContainer}>
          <Text style={styles.problemText}>4. What color is this? 🟩</Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer (e.g., Green)"
          />
        </View>
        <View style={styles.problemContainer}>
          <Text style={styles.problemText}>5. What shape is this? 🟧</Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer (e.g., Square)"
          />
        </View>
      </View>

      {/* Quiz Button Section */}
      <View style={styles.quizSection}>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => router.push("/Kindergarten/KindergartenQuiz2")}
        >
          <Text style={styles.buttonText}>Take the Graded Quiz</Text>
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
    marginBottom: 5,
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#483d8b",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
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
