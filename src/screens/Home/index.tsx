import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components";
import { colors } from "../../ds";
import { useState } from "react";

export function HomeScreen() {
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    if (participants.includes(name)) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome"
      );
    }
    setParticipants((prevValue) => [...prevValue, name]);
    setName("");
  }

  function handleParticipantRemove(deleteName: string) {
    Alert.alert("Remover", `Remover o participante ${deleteName}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevValue) =>
            prevValue.filter((participant) => participant !== deleteName)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024.</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={colors.subtitle200}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.textBasic}>Não há nenhum participante ainda</Text>
        )}
      />
    </View>
  );
}
