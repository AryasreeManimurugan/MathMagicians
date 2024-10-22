import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

type LoginScreenProps = {
  navigation: any; // No need to type this strictly for now
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#d8bfd8"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#d8bfd8"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate("GradeSelectionScreen")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6a5acd",
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#8a2be2",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f0f8ff",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#7b68ee",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#9370db",
    marginVertical: 10,
    color: "#f0f8ff",
  },
  customButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#7b68ee",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#9370db",
    marginVertical: 20,
    alignItems: "center",
  },
  buttonText: { color: "#f0f8ff", fontSize: 18, fontWeight: "600" },
  signUpText: { color: "#d8bfd8", marginTop: 20, fontSize: 16 },
});

export default LoginScreen;
