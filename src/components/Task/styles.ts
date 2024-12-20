import { StyleSheet } from "react-native";
import { colors } from "../../ds";

export const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    backgroundColor: colors.backgroundField300,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  taskName: {
    color: colors.text100,
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: colors.text100,
    fontSize: 22,
    alignSelf: "center",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.deletion400,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCheck: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.action400,
    alignItems: "center",
    justifyContent: "center",
  },
});
