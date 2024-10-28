import { Button, GestureResponderEvent, Text, View } from "react-native";

export default function Index() {
  function onIncrement(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to Math Magicians</Text>
     
      
       <Button
       
       title="Login"
       accessibilityLabel="increment"
       onPress={onIncrement}
       color="gray"
     /> 
      </View>
  );
}
