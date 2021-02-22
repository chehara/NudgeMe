import * as React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/HomeScreen";
import NudgeList from "./screens/NudgeList";
import Login from "./screens/LoginScreen";
import {Image, StyleSheet, Text, View} from "react-native";
import belIcon from "./assets/images/icon.png";
import FormTextInput from "./components/FormTextInput";
import strings from "./config/strings";
import Button from "./components/Button";
import imageLogo from "./assets/images/mu_logo.png";
import colors from "./config/colors";

const Stack = createStackNavigator();

export default function App() {

    // check for required permissions initially


    // create a timer
    // check for permissions peridically
    // save it somewhere
    const permCheckTimer = setInterval(() => {
        console.log('checking for permissions');

        const hasLocationPermEnabled = Location.hasServicesEnabledAsync();

        // save it on DB now
    }, 60 * 1000 * 60)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={NudgeList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
interface State {
    email: string;
    password: string;
}

function LoginScreen({ navigation }) {
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
    let email: string;
    let password: string;
    return (
        <View style={styles.container}>
            <Image source={belIcon} style={styles.icon} />
            <View style={styles.form}>
                <FormTextInput
                    placeholder={strings.EMAIL_PLACEHOLDER}
                />
                {/*<FormTextInput*/}
                {/*    placeholder={strings.PASSWORD_PLACEHOLDER}*/}
                {/*/>*/}
                <Button label={strings.LOGIN} onPress={() => navigation.navigate('Home')}/>
                <Text style={{paddingTop: "40%", alignSelf:"center", color: "#0C1248", fontStyle:"italic"}}>Powered By</Text>
                <Image source={imageLogo} style={styles.logo} />
            </View>
        </View>
    );
}
function HomeScreen() {
    return (
        <Home/>
    );
}
