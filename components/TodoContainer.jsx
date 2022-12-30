import { ScrollView, View } from "react-native";
import styles from "../styles";
import TodoItem from "./TodoItem";

const TodoContainer = ({ todoList, category, setTodoList }) => {
  const selectedTodoList = todoList.filter(
    (item) => item.category === category
  );
  return (
    <ScrollView style={styles.todoScrollView}>
      <View>
        {selectedTodoList.map((item) => (
          <TodoItem
            todoList={todoList}
            item={item}
            key={item.id}
            setTodoList={setTodoList}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default TodoContainer;
