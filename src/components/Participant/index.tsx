import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.participantContainer}>
      <Text style={styles.participantName}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
