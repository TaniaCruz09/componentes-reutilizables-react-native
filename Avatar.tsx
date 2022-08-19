import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet, TextInput, Button } from "react-native";

export const Avatar = () => {
  const [url, setUrl] = useState("");

  const myavatar = () => {
    const urlImage1: string =
      "https://www.nacionrex.com/__export/1536266211475/sites/debate/img/2018/09/06/celebridades-miley-cyrus-20131227-07-original7.jpeg_1364161016.jpeg";
    const urlImage2: string =
      "https://soundigest.com/wp-content/uploads/2021/11/fe01a-screen-shot-2019-10-21-at-2.56.34-pm.jpg";
    const urlImage3: string =
      "https://www.petdarling.com/wp-content/uploads/2019/09/gata-se-comi%C3%B3-a-sus-gatitos.jpg";
    const photo: string = url;

    if (photo === urlImage1 || photo === urlImage2 || photo === urlImage3) {
      alert("Hola este mensaje es verde");
      return setUrl(photo);
    } else {
      alert("icono estandar");
      return;
    }
  };
  return (
    <View>
      <Image
        style={styles.img}
        source={{ uri: url }}
        defaultSource={{
          uri: "https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png",
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={setUrl}
        placeholder={"Ingresa la URL de la imagen"}
      />
      <Button title="Guardar" onPress={() => myavatar()} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginLeft: 185,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
