import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import CustomStatusBar from "../../components/CustomStatusBar";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import AppStyles from "../../config/styles";
import Images from "../../config/images";
import { connect } from "react-redux";
import * as navigationActions from "../../actions/navigationActions";

class Toolbar extends Component {
  render() {
    return (
      <View>
        <CustomStatusBar
          backgroundColor={AppStyles.color.COLOR_GREY_WHITE}
          barStyle="dark-content"
        />
        <View style={styles.toolBar}>
          <Icon
            name="bars"
            size={24}
            color={"black"}
            onPress={this.props.onDrawerPress}
          />
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToNotificationScreen();
              }}
            >
               <Icon
            name="globe"
            size={26}
            color={"#9ba3b0"}
          />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToChatScreen();
              }}
            >
              <Icon
            name="comments-o"
            size={26}
            color={"#9ba3b0"}
          />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToProfileListScreen();
              }}
            >
               <Icon
            name="user"
            size={26}
            color={"#9ba3b0"}
          />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Toolbar.propTypes = {
  onDrawerPress: PropTypes.func
};

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {
    navigateToMyHomeScreen: () => navigationActions.navigateToMyHomeScreen(),
    navigateToChatScreen: () => navigationActions.navigateToChatScreen(),
    navigateToNotificationScreen: () =>
      navigationActions.navigateToNotificationScreen(),
    navigateToProfileListScreen: () =>
      navigationActions.navigateToProfileListScreen(),
    navigateToNotificationFollowerScreen: () =>
      navigationActions.navigateToNotificationFollowerScreen()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
