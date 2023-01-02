import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import styles from "../styles";
import { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const TodoItem = ({ item }) => {
  const [newTodoContent, setNewTodoContent] = useState(item.content);

  const handleOnTogglePress = async () => {
    const itemRef = doc(db, "todoList", `${item.id}`);
    await updateDoc(itemRef, { isDone: !item.isDone });
  };

  const handleOnDeletePress = async () => {
    await deleteDoc(doc(db, "todoList", `${item.id}`));
  };

  const handleOnEditPress = async () => {
    const itemRef = doc(db, "todoList", `${item.id}`);
    await updateDoc(itemRef, { isEditing: !item.isEditing });
  };

  const handleOnChange = (e) => {
    setNewTodoContent(e);
  };

  const handleOnSubmitEditing = async () => {
    const itemRef = doc(db, "todoList", `${item.id}`);
    await updateDoc(itemRef, { content: newTodoContent });
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
