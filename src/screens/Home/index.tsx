import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function HomeScreen() {
  function handleParticipantAdd() {}

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024.</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
