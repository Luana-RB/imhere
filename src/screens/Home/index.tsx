import { Text, View } from "react-native";
import { styles } from "./styles";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024.</Text>
    </View>
  );
}
