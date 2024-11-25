import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { auth, firestoredb } from "@/database";
import { doc, getDoc } from "firebase/firestore";

interface UserProfile {
  name: string;
  email: string;
}

const ProfilePage: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch authenticated user
        const currentUser = auth.currentUser;

        if (currentUser) {
          // Retrieve Firestore user document
          const userDocRef = doc(firestoredb, "users", currentUser.uid);
          const userSnapshot = await getDoc(userDocRef);

          if (userSnapshot.exists()) {
            const userDataFromFirestore = userSnapshot.data();
            setUserData({
              name: userDataFromFirestore.firstName || "Unknown",
              email: currentUser.email || "Unknown",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);



















  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/images/user.png")}
          style={styles.avatar}
        />
        <Text style={styles.greetingText}>Hi {userData?.name || "Email not available"} </Text>
        
        
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Profile/userInfo")}
        >
          <Text style={styles.buttonText}>View Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Profile/userscores")}
        >
          <Text style={styles.buttonText}>View Quiz Scores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Profile/userprogress")}
        >
          <Text style={styles.buttonText}>View Progress</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerContainer: {
    width: "90%",
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#483d8b",
    textAlign: "center",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffffff",
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  buttonsContainer: {
    width: "90%",
  },
  button: {
    backgroundColor: "#483d8b",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfilePage;