import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import NudgeDetails from './NudgeDetails';
import strings from "../config/strings";
import Button from "../components/Button";
import Home from "./HomeScreen";
class NudgeList extends Component {
    state = { nudges: [] };


    componentWillMount() {
        axios.post('http://localhost:3000/api/icm/v1/generateNudge',{"userId": 2, "firstName": "Merry"})
            .then((response) =>{
                this.setState({ nudges: response.data });
            } );
    }

    removeElement(id: number) {
        this.setState({nudges: this.state.nudges});
    }

    renderAlbums() {
        return this.state.nudges.map((nudge: any, key) =>
            <NudgeDetails key={key} nudge={nudge} />);
    }
    triggerEvent() {
        console.log('Calling.... 123');

        axios.post('http://localhost:3000/api/icm/v1/triggerEvent',{
            "deviceToken": "b2e4e7c0-1031-11eb-adc1-0242ac120002",
            "deviceId": 1,
            "eventId": 3,
            "event": "turn off",
            "id": "fvv567FE",
            "mac": "Xf678hT",
            "ipAddress": "168.192.1.3",
            "approximateLocation": 34532.57,
            "calendaData": "dhgjhf"
        })
            .then((response) =>{
                console.log(JSON.stringify(response.data));
            } );
    }

    render() {
        return (
            <View>
                <Button label={strings.TRIGGER_EVENT} onPress={()=>this.triggerEvent()}/>
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
            </View>

        );
    }
}
export default NudgeList;
