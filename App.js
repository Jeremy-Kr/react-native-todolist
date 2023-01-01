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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Category
        categoryList={categoryList}
        category={category}
        setCategory={setCategory}
      />
      <TodoInput category={category} />
      <TodoContainer category={category} />
    </SafeAreaView>
  );
};

export default App;
