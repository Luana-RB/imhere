import { StatusBar } from "react-native";
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <HomeScreen />
    </>
  );
}
