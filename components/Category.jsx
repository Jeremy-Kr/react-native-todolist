import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import CategoryButton from "./CategoryButton";

const Category = () => {
  return (
    <View style={styles.buttonContainer}>
      <CategoryButton text="JavaScript" onSelected={true} />
      <CategoryButton text="React" onSelected={false} />
      <CategoryButton text="Coding Test" onSelected={false} />
    </View>
  );
};

export default Category;
