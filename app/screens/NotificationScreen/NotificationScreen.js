import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import Loader from "../../components/Loader/Loader";

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestNotification(this.props.token);
    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      this.pageFocused
    );
  }

  pageFocused = () => {
    this.props.requestNotification(this.props.token);
  };

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  backPress = () => {
    this.props.navigation.goBack(this.props.navigation.state.key);
  };

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.itemView}
          onPress={() => {
            this.props.requestReadNotification(
              this.props.token,
              item.notification_id
            );
          }}
        >
          <Text style={styles.text}>{item.content}</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        {this.props.data.length == 0 && !this.props.isNotifLoading?
 <View style={styles.loader}>
 <Text style={styles.noData}>NO NOTIFICATIONS TO DISPLAY</Text>
 </View>:
          <FlatList
            data={this.props.data}
            renderItem={this.renderItem}
            extraData={this.state}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
          />}
        <TouchableOpacity style={styles.backView} onPress={this.backPress}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        {this.props.isNotifLoading &&
          <Loader />}
      </View>
    );
  }
}

NotificationScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func
};

export default NotificationScreen;
