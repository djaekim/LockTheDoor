import React from 'react';
import { StyleSheet, Text, View, NetInfo, TouchableOpacity, Alert, Header } from 'react-native';

import TimerMixin from 'react-timer-mixin';

// Never used React before so I found react native even more challenging 
// It took me a full day trying to set up my machine
// I am still finding it hard to wrap my head around design patterns


export default class UserSetup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isHome: false, 

            GeoLocationAPI: 0,

            // I didn't know how to set mock API  so I just created a state
            BackEndAPI_getHomeLocation: null, // saved Location
            BackEndAPI_notificationLocation: null, // location where you get alert message
           
            // the current and previous distance are important to determine the direction of travel. If I go from 0 to 200m then it should alert me, but not when i go from 300 to 200 metre
            prevDistance: null, 
            currentDistance:  1,
            timer: null // i used setInterval mimic the distance that the person is travelling

        };
    }


    handleOnPress = (val) => this.setState({ isHome: val }, function () {
        console.log(this.state.isHome);
    });

    // gets the GeoLocation of home, which I set it as 0... even though in theory it should be ln and latitude. 
    getGeoLocationAPI = () => {

        this.setState({ BackEndAPI_getHomeLocation: this.state.GeoLocationAPI, BackEndAPI_notificationLocation: this.state.GeoLocationAPI+200}, function () {
            console.log(this.state.BackEndAPI_notificationLocation);
        });
    }
    // I called getGeoLocationAPI to get the coordinates and saved it in my BackEndAPI
    saveLocationToAPI = () => {
        this.getGeoLocationAPI();
    }
    // This function is progressively tracking the distance
    HomeTrack = (travellingOptions) => {

        clearInterval(this.state.timer);
        this.state.timer = TimerMixin.setInterval(
            () => {
                if (this.state.currentDistance === this.state.BackEndAPI_notificationLocation && this.state.currentDistance > this.state.prevDistance) {

                    Alert.alert('PLEASE REMEMBER TO LOCK THE DOOR!');

                }
                if (this.state.currentDistance === 0 && this.state.currentDistance < this.state.prevDistance) {

                    clearInterval(this.state.timer);
                }
                if (this.state.currentDistance === 220 && this.state.currentDistance > this.state.prevDistance) {

                    clearInterval(this.state.timer);
                }
                if (travellingOptions === 'leaving') {
                    this.setState({ currentDistance: this.state.currentDistance + 1, prevDistance: this.state.currentDistance }, () => {
                        console.log(this.state.currentDistance);
                    })
                }
                else if (travellingOptions === 'arriving') {
                    this.setState({ currentDistance: this.state.currentDistance - 1, prevDistance: this.state.currentDistance }, () => {
                        console.log(this.state.currentDistance);
                    })
                }
            },  
            100
        );
    }
    render() {
        const alertMessageNO = 'Perform setup when you arrive home';
        const alertMessageYES = 'Save current location of the user as their "home"';
        /* - This ternary expression determines your route.
           - If the user sets the home location, then it will take you to progressively checking components
           - else it stays in the home screen
        */
        const UserSet = this.state.isHome ?
            <View style={styles.container}  >
               
                <Text style={styles.header}>{'The App is Tracking your location now...'}</Text>
                <Text style={styles.subheader}>{'below are test cases to mimic person travelling.'}</Text>
                
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('TESTING LEAVING HOME')
                        this.HomeTrack('leaving', 1);
                    }
                    }
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Leaving home  </Text>
                        

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('TESTING GOING TOWARDS HOME')
                        this.HomeTrack('arriving', 30);

                    }
                    }
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Approaching home</Text>
                       
                    </View>
                </TouchableOpacity>
                <View  style={styles.distance}>

                <Text   style={styles.distanceText}>{'distance travelled: ' + this.state.currentDistance +  ' (metre)'}</Text>
                </View> 
            </View>
            
            :
            <View style={styles.container}  >
                <Text style={styles.header}>{'Are You Home?'}</Text>
                <TouchableOpacity
                    style={styles.wrapper}
                    onPress={() => {
                        Alert.alert('SAVING ADDRESS', alertMessageYES)
                        this.handleOnPress(true);
                        this.saveLocationToAPI();
                    }
                    }>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> YES </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.wrapper}
                    onPress={() => {
                        Alert.alert('NOT HOME', alertMessageNO)
                        this.handleOnPress(false);
                    }
                    }>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}> NO </Text>
                    </View>

                </TouchableOpacity>

            </View>
            ;

        return (
            <View style={styles.container} >
                {UserSet}
            </View>

        );
    }
}

// some styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: { borderRadius: 5, marginBottom: 10, },
    button: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 200,
        elevation:5

    },
    backButton:{
        position: 'absolute', left: 10, top: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 35,
        marginBottom: 10,
    },
    subheader:{
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 10,
        marginTop:10
    },
    distance:{
        backgroundColor:'#eff0f1',
      
       
        marginTop:10,

        alignSelf: 'stretch',
        height:100,
        elevation:1,
        position: 'absolute', left: 0, right: 0, bottom: 0
       

       
    },
    distanceText: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:35,
        color:'black',
         
        fontSize: 15,
    }
});

