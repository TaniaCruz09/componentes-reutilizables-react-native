import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Alert from "./Alert";
import { Avatar } from "./Avatar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Avatar />
      </View>
      <Alert />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F08080",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    width: 500,
    height: 220,
    backgroundColor: "#fff",
    borderColor: "#CD5C5C",
    borderRadius: 30,
    borderWidth: 10,
  },
});
