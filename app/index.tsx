import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to Math Magicians</Text>
     
      
       
      </View>
  );
}

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
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#f0f8ff",
    textShadowColor: "#483d8b",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    marginBottom: 50,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  customButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#9370db",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#483d8b",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  link: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#f0f8ff",
    fontSize: 20,
    fontWeight: "600",
  },
});
