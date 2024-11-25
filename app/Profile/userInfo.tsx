import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { auth, firestoredb } from "@/database";
import { doc, getDoc } from "firebase/firestore";

interface UserProfile {
  name: string;
  email: string;
  password: string;
}

const UserInfo: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; password: string } | null>(null);
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
              password: userDataFromFirestore.password,

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
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Personal Information</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/images/user.png")} // Replace with your image path
          style={styles.avatar}
        />
      </View>

      {/* User Information */}
      <View style={styles.infoContainer}>
      <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>
          {userData?.name || "Name not available"}
        </Text>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.info}>
          {userData?.email || "Email not available"}
        </Text>


        {/* Password Section */}
        <Text style={styles.label}>Password:</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
          value={userData?.password || "********"} // Display fetched password
          editable={false}
        />
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.checkboxText}>
            {showPassword ? "Hide Password" : "View Password"}
          </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Button to navigate to UserScores */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Profile/profilemain")}
      >
        <Text style={styles.buttonText}>View Quiz Scores</Text>
      </TouchableOpacity>
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
  infoContainer: {
    width: "90%",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    backgroundColor: "#e6e6fa",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: "#555",
  },
  checkboxContainer: {
    marginLeft: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#483d8b",
    fontWeight: "bold",
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
    width: "90%",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
});

export default UserInfo;
