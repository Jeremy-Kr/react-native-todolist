import { Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const CategoryButton = ({ text, onSelected, setCategory }) => {
  return (
    <TouchableOpacity
      style={
        onSelected ? [styles.button, styles.buttonOnActive] : styles.button
      }
      onPress={() => {
        setCategory(text);
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
