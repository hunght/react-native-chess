//@flow

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ButtonMenu from "../components/ButtonMenu";
import * as theme from "../common/theme";
import Text from "../common/Text";
import BackgroundView from "../common/BackgroundView";

const WrappedHeader = ComponentChildren => props => {
  // console.log("title ===", title);
  return (
    <BackgroundView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          flexDirection: "row"
        }}
      >
        <ButtonMenu
          style={{
            marginLeft: 28,
            marginBottom: 0,
            justifyContent: "flex-end"
          }}
        />

        <View
          style={{
            marginLeft: 20,
            marginBottom: 4,
            justifyContent: "flex-end"
          }}
        >
          <Text style={{ width: 80 }}>First Digital Bank</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            alignItems: "flex-end",
            justifyContent: "flex-end"
          }}
        >
          <Image
            style={{
              marginBottom: 8,
              marginRight: 16
            }}
            source={require("../main/images/visaImage.png")}
          />
        </View>
      </View>
      <View style={{ flex: 6 }}>
        <ComponentChildren {...props} />
      </View>
    </BackgroundView>
  );
};

export default WrappedHeader;

const styles = StyleSheet.create({
  container: {
    flex: 8
  }
});
