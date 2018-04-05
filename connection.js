import React, { Component } from 'react';
import {
    View,
    Text,
    NetInfo
} from 'react-native';

// styles
import { style } from './style';
import { globalStyle } from '../../assets/styles/globalStyle';

// redux
import { connect } from 'react-redux';
import * as actions from '../../actions';

class InternetConnectionPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionInfo: ''

        }
        this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);

    }
    handleFirstConnectivityChange(connectionInfo) {
        this.setState({
            connectionInfo: connectionInfo.type
        })
        console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);

    }

    componentDidMount() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({
                connectionInfo: connectionInfo.type
            })
            //console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });

        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    }
    componentWillUnmount() {
        NetInfo.removeEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }




    render() {


        return (
            <View>
                <Text> ComponentName component </Text>
                <Text> {this.state.connectionInfo} </Text>
            </View>
        );
    }
}


export default InternetConnectionPopUp;