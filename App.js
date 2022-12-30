import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styles from "./styles";

import TodoInput from "./components/TodoInput";
import Category from "./components/Category";
import TodoContainer from "./components/TodoContainer";
import { useState } from "react";

const App = () => {
  const [categoryList, setCategoryList] = useState([
    "javascript",
    "react",
    "codingTest",
  ]);
  const [category, setCategory] = useState("javascript");
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      content: "재미없는 리액트 네이티브",
      isDone: false,
      isEditing: false,
      category,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Category
        categoryList={categoryList}
        category={category}
        setCategory={setCategory}
      />
      <TodoInput category={category} setTodoList={setTodoList} />
      <TodoContainer
        category={category}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </SafeAreaView>
  );
};

export default App;
