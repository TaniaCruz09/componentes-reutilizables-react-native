import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet, TextInput, Button, Text } from "react-native";
import { Alert } from "./Alert";

export const Avatar = () => {
  const [url, setUrl] = useState("");
  const [update, setUpdate] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");

  const myavatar = () => {
    if (update === "") {
      setText("Default Alert");
    } else {
      setText("Success Alert");
      setUrl(update);
    }
  };
  const imageInit = () => {
    if (name !== lastName) {
      name.substring(0, 1);
      lastName.substring(0, 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.img}
          source={{ uri: url }}
          defaultSource={{
            uri: "https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png",
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={setUpdate}
          placeholder={"Ingresa la URL de la imagen"}
        />
        <TextInput
          style={styles.input}
          onChangeText={setName}
          placeholder={"Ingrese su nombre"}
        />
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          placeholder={"Ingrese su apellido"}
        />
        <Button title="Guardar" onPress={() => myavatar()} />
      </View>
      <View>
        {/* <TextInput style={styles.input} value={text} /> */}
        <Alert url={url} text={text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F08080",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    display: "flex",
    width: 400,
    height: 400,
    backgroundColor: "#fff",
    borderColor: "#CD5C5C",
    borderRadius: 30,
    borderWidth: 10,
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginLeft: 140,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
