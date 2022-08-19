import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Alert } from "react-native";

export default function App() {
  const alertColor = () => {
    return alert("Hola este mensaje es verde");
  };
  return (
    <View>
      <Button title="Aceptar" onPress={() => alertColor()}></Button>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F08080",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   subcontainer: {
//     // flex: 1,
//     width: 500,
//     height: 200,
//     backgroundColor: "#fff",
//     borderColor: "#CD5C5C",
//     borderRadius: 30,
//     borderWidth: 10,
//     justifyContent: "center",
//   },
//   img: {
//     width: 150,
//     height: 150,
//     borderRadius: 100,
//   },
// });
