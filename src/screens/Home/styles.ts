import { StyleSheet } from "react-native";
import { colors } from "../../ds";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.backgroundScreen400,
  },
  eventTitle: {
    color: colors.title100,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: colors.subtitle200,
    fontSize: 16,
  },
  input: {
    flex: 1,
    marginRight: 12,
    backgroundColor: colors.backgroundField300,
    height: 56,
    borderRadius: 5,
    color: colors.subtitle200,
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: colors.text100,
    fontSize: 22,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.action400,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
  },
});
