import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import styles from "../styles";

const TodoItem = ({ todoList, item, setTodoList }) => {
  const handleOnTogglePress = () => {
    const newTodoList = [...todoList];
    const idx = newTodoList.findIndex((todo) => todo.id === item.id);
    newTodoList[idx].isDone = !newTodoList[idx].isDone;
    setTodoList(newTodoList);
  };

  const handleOnDeletePress = () => {
    const newTodoList = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(newTodoList);
  };

  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoItem}>
        <Text style={item.isDone && styles.isDone}>{item.content}</Text>
        <View style={styles.todoButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              handleOnTogglePress();
            }}
          >
            <AntDesign name="checksquareo" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              onPress={() => {
                handleOnDeletePress();
              }}
              name="trash-o"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;
