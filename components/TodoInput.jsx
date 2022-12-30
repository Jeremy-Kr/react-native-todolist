import { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "../styles";

const TodoInput = ({ setTodoList, category }) => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.nativeEvent.text);
  };

  const handleOnSubmitEditing = (e) => {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          content: text,
          isDone: false,
          isEditing: false,
          category,
        },
      ];
    });
    setText("");
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.hr} />
      <TextInput
        onSubmitEditing={(e) => {
          handleOnSubmitEditing(e);
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
