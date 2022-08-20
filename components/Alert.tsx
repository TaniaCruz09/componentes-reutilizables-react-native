import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const Alert = ({ url, text }) => {
  return (
    <View style={url === "" ? styles.colorFondo1 : styles.colorFondo2}>
      <Text style={styles.textAlert}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorFondo1: {
    backgroundColor: "red",
    margin: 20,
    width: 400,
    borderRadius: 5,
  },
  colorFondo2: {
    backgroundColor: "green",
    color: "white",
    margin: 20,
    width: 400,
    borderRadius: 5,
  },
  textAlert: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
