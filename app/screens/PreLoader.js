/**
 * Created by Jebin Benny
 * on April 22, 2019
 * Entrypoint - Everthing starts from the entrypoint.
 */

import { connect } from "react-redux";
import React, { Component } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import SplashScreen from 'react-native-splash-screen'
import NetInfo from "@react-native-community/netinfo";
import Snackbar from 'react-native-snackbar';
import * as appIntroActions from "../actions/appIntroActions";

class PreLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    setTimeout(function() {
      SplashScreen.hide();
    }, 1000);
    this._checkAppIntroStatus();
    NetInfo.addEventListener(
     "connectionChange",
     this._handleConnectivityChange
   );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }



  _handleConnectivityChange = isConnected => {
    console.log("NETWORK CHANGE==", isConnected.type);
    let networkStatus = isConnected.type === "none" ? false : true;
    this.props.onChangeNetworkStatus(networkStatus);

    if (isConnected.type === "none") {
  Snackbar.show({
  title: "NO_INTERNET_CONNECTION",
  duration: Snackbar.LENGTH_LONG,
  backgroundColor: "red"
  });
}
else

    Snackbar.show({
  title: "BACK_TO_ONLINE",
  duration: Snackbar.LENGTH_LONG,
  backgroundColor: "green"
});

  };

  //Method to check whether user logged in or not.
  _checkAppIntroStatus() {
    const { token } = this.props.loginReducer;
    console.log("Fsfsfsgfdg",this.props.loginReducer.token);

      if (token.length > 0) {
        this.props.navigation.navigate("DrawerStack");

      }
     else {
        this.props.navigation.navigate("Login");

    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginReducer: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeNetworkStatus: status =>{
       dispatch(appIntroActions.updateNetworkInfoStatus(status))}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreLoader);
