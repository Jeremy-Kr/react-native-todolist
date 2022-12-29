import { Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const CategoryButton = ({ text, onSelected }) => {
  return (
    <TouchableOpacity
      style={
        onSelected ? [styles.button, styles.buttonOnActive] : styles.button
      }
      onPress={() => {
        alert("뻣은");
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
