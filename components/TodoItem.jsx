import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import styles from "../styles";

const TodoItem = () => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoItem}>
        <Text>개재미없는 리액트네이티브</Text>
        <View style={styles.todoButtonContainer}>
          <TouchableOpacity>
            <AntDesign name="checksquareo" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;
