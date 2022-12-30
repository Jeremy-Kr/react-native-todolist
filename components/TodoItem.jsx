import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import styles from "../styles";
import { useState } from "react";

const TodoItem = ({ todoList, item, setTodoList }) => {
  const [newTodoContent, setNewTodoContent] = useState();

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

  const handleOnEditPress = () => {
    const newTodoList = [...todoList];
    const idx = newTodoList.findIndex((todo) => todo.id === item.id);
    newTodoList[idx].isEditing = !newTodoList[idx].isEditing;
    setTodoList(newTodoList);
  };

  const handleOnChange = (e) => {
    setNewTodoContent(e);
  };

  const handleOnSubmitEditing = () => {
    const newTodoList = [...todoList];
    const idx = newTodoList.findIndex((todo) => todo.id === item.id);
    newTodoList[idx].content = newTodoContent;
    setTodoList(newTodoList);
    handleOnEditPress();
  };

  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoItem}>
        {item.isEditing ? (
          <TextInput
            style={styles.textInputInEditing}
            value={newTodoContent}
            onChangeText={(e) => {
              handleOnChange(e);
            }}
            onSubmitEditing={() => {
              handleOnSubmitEditing();
            }}
          />
        ) : (
          <Text style={item.isDone && styles.isDone}>{item.content}</Text>
        )}

        <View style={styles.todoButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              handleOnTogglePress();
            }}
          >
            <AntDesign name="checksquareo" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              onPress={() => {
                handleOnEditPress();
              }}
              name="edit"
              size={24}
              color="black"
            />
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
