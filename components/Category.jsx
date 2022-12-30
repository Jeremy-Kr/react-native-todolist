import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import CategoryButton from "./CategoryButton";

const Category = ({ categoryList, category, setCategory }) => {
  return (
    <View style={styles.buttonContainer}>
      {categoryList.map((item) => (
        <CategoryButton
          text={item}
          onSelected={category === item}
          setCategory={setCategory}
        />
      ))}
    </View>
  );
};

export default Category;
