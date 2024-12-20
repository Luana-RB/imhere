import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { colors } from "../../ds";

type TaskProps = {
  name: string;
  onRemove: () => void;
};

export function Task({ name, onRemove }: TaskProps) {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={[
          styles.buttonCheck,
          { backgroundColor: check ? colors.action400 : colors.neutral400 },
        ]}
        onPress={() => setCheck(!check)}
      >
        <Text style={styles.buttonText}>{check ? "☑" : "☐"}</Text>
      </TouchableOpacity>
      <Text style={styles.taskName}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
