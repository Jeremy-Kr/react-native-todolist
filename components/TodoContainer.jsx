import { ScrollView, View } from "react-native";
import styles from "../styles";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  return (
    <ScrollView style={styles.todoScrollView}>
      <View>
        <TodoItem />
      </View>
    </ScrollView>
  );
};

export default TodoContainer;
