import React from "react";
import { View, Button, Text } from "react-native";
import { Avatar } from "./Avatar";

const Alert = () => {
  const alertColor = () => {
    alert("Hola este mensaje es verde");
  };
  return (
    <View>
      {/* <Button title="Aceptar" onPress={() => alertColor()}></Button> */}
      <View>
        <Text>URL admitidas:</Text>
        <Text>
          https://soundigest.com/wp-content/uploads/2021/11/fe01a-screen-shot-2019-10-21-at-2.56.34-pm.jpg
        </Text>
        <Text>
          https://www.petdarling.com/wp-content/uploads/2019/09/gata-se-comi%C3%B3-a-sus-gatitos.jpg
        </Text>
        <Text>
          https://www.nacionrex.com/__export/1536266211475/sites/debate/img/2018/09/06/celebridades-miley-cyrus-20131227-07-original7.jpeg_1364161016.jpeg
        </Text>
      </View>
    </View>
  );
};

export default Alert;
