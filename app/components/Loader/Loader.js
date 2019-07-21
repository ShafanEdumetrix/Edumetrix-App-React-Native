import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator
} from "react-native";

import styles from "./styles";

export default class EventDetailView extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <View
        style={styles.mainView}
      >
        <View
          style={styles.subView}
        >
        <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    );
  }
}




