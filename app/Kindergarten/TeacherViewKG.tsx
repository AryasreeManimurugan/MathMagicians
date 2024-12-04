import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from "react-native";

const TeacherViewKG: React.FC = () => {
    const [videoLink, setVideoLink] = useState("");
    const [description, setDescription] = useState("");



    const submitContent = async () => {

    if (!videoLink.trim()) {
        Alert.alert("Error", "Please add a video link");
        return;
    }


     const content = {
        videoLink,
        description,
     };

     console.log("Submitting content:", content);

     try{
        const response = await fetch ('https://your-backend-url.com/submit-video',{

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(content),

        } );

        const result = await response.json();

        if(response.ok){
            console.log("Content submitted successfully", result);
            setVideoLink("");
            setDescription("");
            Alert.alert("Success", "Content has been submitted!");

        } else{
            console.error("Error submitting content", result);
            Alert.alert("Error", "There was an issue submitting the content");
        } 


     } catch (error){
        console.error("Error submitting content:", error);
        Alert.alert("Error", "There was an issue submitting the content.");
     }
     

    };
    

  return (
<View style = {styles.container}> 
    <Text style= {styles.headerText}> Teacher's Dashboard</Text>

   <TextInput style ={styles.input} placeholder= "video Link"
   value= {videoLink}
   onChangeText= {setVideoLink} ></TextInput>



  <TextInput style ={styles.input}
   placeholder ="Description"
   value= {description}
   onChangeText = {setDescription}
  >
  </TextInput>




<TouchableOpacity
        style={styles.lessonButton}
        
      >
        
      <Button title = "Submit Content" onPress = {submitContent} />
      </TouchableOpacity>


</View>
  );
};


 const styles= StyleSheet.create({
 container:{
 flex: 1,
 padding: 20,
 backgroundColor: "#1E90FF",  
 },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    
  },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#FFFFF",
    },


    lessonButton: {
        width: "80%",
        paddingVertical: 15,
        marginVertical: 20,
        marginHorizontal:30,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },

 });


export default TeacherViewKG;