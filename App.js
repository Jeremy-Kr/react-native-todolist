import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import styles from "./styles";

import TodoInput from "./components/TodoInput";
import Category from "./components/Category";
import TodoContainer from "./components/TodoContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Category />
      <TodoInput />
      <TodoContainer />
    </SafeAreaView>
  );
}
