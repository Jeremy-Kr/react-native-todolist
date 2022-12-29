import { View, TextInput } from "react-native";
import styles from "../styles";

const TodoInput = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.hr} />
      <TextInput style={styles.inputBox} placeholder="Enter your task" />
      <View style={styles.hr} />
    </View>
  );
};

export default TodoInput;
