import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList, Image, TouchableOpacity, Linking
} from "react-native";
import Constants from "expo-constants";
import {Button} from "react-native-elements";

const NudgeDetails = ({ nudge, key }) => {
    const DATA =  nudge.deviceNudge;
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: Constants.statusBarHeight,
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#f9c2ff",
            padding: 20,
            marginVertical: 8
        },
        header: {
            fontSize: 24,
            backgroundColor: "#fff"
        },
        title: {
            fontSize: 14
        },
        btn_panel: {
           flexDirection: "row",
        },
        action_btn: {
            flexGrow: 1
        }
    });

    return (
        <View style={styles.container} >

                <Text style={styles.title}>{nudge.device}</Text>
                <SafeAreaView style={styles.container}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({item}) =>
                            (
                            <View>
                                <Item title={item}/>
                                <View style={styles.btn_panel}>
                                    <Button title="Ignore" onPress={() => {}} buttonStyle={{backgroundColor: 'red'}} containerStyle={styles.action_btn}  />
                                    <Button title="Accept" onPress={() => {Linking.openURL('App-prefs:Privacy');}} containerStyle={styles.action_btn} />
                                </View>
                            </View>
                            )
                        }
                        renderSectionHeader={({section: {action}}) => (
                            <Text style={styles.header}>{action}</Text>
                        )}
                    />
                </SafeAreaView>

        </View>

        );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default NudgeDetails;
