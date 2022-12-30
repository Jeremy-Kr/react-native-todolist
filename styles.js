import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    flex: 0.28,
    height: 50,
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonOnActive: {
    backgroundColor: "#55b9f3",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    backgroundColor: "#000",
    height: 0.8,
    width: "95%",
  },
  inputBox: {
    height: 35,
    borderWidth: 0.5,
    width: "95%",
    margin: 10,
    paddingLeft: 10,
  },
  todoScrollView: {
    height: "75%",
  },
  todoContainer: {
    alignItems: "center",
  },
  todoItem: {
    height: 50,
    width: "95%",
    backgroundColor: "#d9d9d9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  todoButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "25%",
  },
  isDone: {
    textDecorationLine: "line-through",
  },
});

export default styles;
