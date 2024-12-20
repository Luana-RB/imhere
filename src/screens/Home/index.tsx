import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../components";
import { colors } from "../../ds";
import { useState } from "react";

export function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleTaskAdd() {
    setTasks((prevValue) => [...prevValue, task]);
    setTask("");
  }

  function handleTaskRemove(deleteTask: string) {
    Alert.alert("Remover", `Remover tarefa ${deleteTask}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevValue) =>
            prevValue.filter((task) => task !== deleteTask)
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
      <Text style={styles.eventTitle}>Tarefas</Text>
      <Text style={styles.eventDate}>Adicione suas tarefas</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa"
          placeholderTextColor={colors.subtitle200}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleTaskAdd()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Task name={item} onRemove={() => handleTaskRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.textBasic}>Não há nenhuma tarefa ainda</Text>
        )}
      />
    </View>
  );
}
