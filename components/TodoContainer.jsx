import { collection, orderBy, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { db } from "../firebase";
import styles from "../styles";
import TodoItem from "./TodoItem";

const TodoContainer = ({ todoList, category, setTodoList }) => {
  const [selectedTodoList, setSelectedTodoList] = useState();

  useEffect(() => {
    getTodo();
  }, [category, selectedTodoList]);

  const getTodo = async () => {
    const q = query(
      collection(db, "todoList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    const newTodoList = [];

    querySnapshot.forEach((todo) => {
      const newTodo = {
        id: todo.id,
        ...todo.data(),
      };
      newTodoList.push(newTodo);
    });

    setSelectedTodoList(newTodoList);
  };

  return (
    <ScrollView style={styles.todoScrollView}>
      <View>
        {selectedTodoList?.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TodoContainer;
