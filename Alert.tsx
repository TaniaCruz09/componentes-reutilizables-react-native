import React from "react";
import { View, Button } from "react-native";

export const Alert = () => {
  const alertColor = () => {
    return alert("Hola este mensaje es verde");
  };
  return (
    <View>
      <Button title="Aceptar" onPress={() => alertColor()}></Button>
    </View>
  );
};
