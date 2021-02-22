import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import {Text} from "react-native";
// @ts-ignore
import imageLogo from "../assets/images/mu_logo.png";
// @ts-ignore
import belIcon from "../assets/images/icon.png";
import colors from "../config/colors";
import strings from "../config/strings";
import Home from "./HomeScreen";

interface State {
  email: string;
  password: string;
}

class LoginScreen extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
  }

  readonly state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    return <Home/>
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={belIcon} style={styles.icon} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress}/>
          <Text style={{paddingTop: "40%", alignSelf:"center", color: "#0C1248", fontStyle:"italic"}}>Powered By</Text>
          <Image source={imageLogo} style={styles.logo} />
        </View>
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

export default LoginScreen;
