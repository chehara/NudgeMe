import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import {Text} from "react-native";
// @ts-ignore
import imageLogo from "../assets/images/mu_logo.png";
import colors from "../config/colors";

interface State {
  email: string;
  password: string;
}

class HomeScreen extends React.Component<{}, State> {
  readonly state: State = {
    email: "",
    password: ""
  };


  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "50%",
    paddingTop: '0%',
    resizeMode: "contain",
    alignSelf: "center"
  },
  icon: {
    flex: 1,
    width: "65%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default HomeScreen;
