import { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "../styles";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const TodoInput = ({ category }) => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.nativeEvent.text);
  };

  const handleOnSubmitEditing = () => {
    const newTodo = {
      content: text,
      isDone: false,
      isEditing: false,
      category,
    };
    addDoc(collection(db, "todoList"), newTodo);
    setText("");
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.hr} />
      <TextInput
        onSubmitEditing={() => {
          handleOnSubmitEditing();
        }}
        value={text}
        onChange={(e) => {
          handleOnChange(e);
        }}
        style={styles.inputBox}
        placeholder="Enter your task"
      />
      <View style={styles.hr} />
    </View>
  );
};

export default TodoInput;
