import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components";
import { colors } from "../../ds";

const participants = ["Luana", "Victor", "João"];

export function HomeScreen() {
  function handleParticipantAdd() {}
  function handleParticipantRemove(name: string) {}

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024.</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={colors.subtitle200}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {participants.map((participant, index) => (
        <Participant
          key={index}
          name={participant}
          onRemove={() => handleParticipantRemove(participant)}
        />
      ))}
    </View>
  );
}
