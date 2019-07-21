import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Images from "../../config/images";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImagePicker from "react-native-image-picker";
import CustomStatusBar from "../../components/CustomStatusBar";
import AppStyles from "../../config/styles";
import { ActivityIndicator } from "react-native-paper";

const options = {
  title: "Select Image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class SgnUpImageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardHeight: 0,
      avatarSource: "",
      backImage: "",
      profilePic: ""
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = e => {
    if (Platform.OS === "android") {
      return;
    }
    this.setState({
      keyboardHeight: e.endCoordinates.height
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      keyboardHeight: 0
    });
  };

  onAddImagePress = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };

  onBackImagePress = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          backImage: source
        });
      }
    });
  };

  onProfileImagePress = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          profilePic: source
        });
      }
    });
  };

  onPress = (
    username,
    password,
    mobilenumber,
    email,
    name,
    surname,
    selectedDate,
    address,
    Country,
    state,
    school,
    sid
  ) => () => {
    this.props.requestRegister(
      username,
      password,
      mobilenumber,
      email,
      name,
      surname,
      selectedDate,
      address,
      Country,
      state,
      school,
      sid,
      this.state.profilePic,
      this.state.avatarSource,
      this.state.backImage,
      this.state.rcode
    );
  };

  render() {
    const { username } = this.props.navigation.state.params;
    const { password } = this.props.navigation.state.params;
    const { mobilenumber } = this.props.navigation.state.params;
    const { email } = this.props.navigation.state.params;
    const { name } = this.props.navigation.state.params;
    const { surname } = this.props.navigation.state.params;
    const { selectedDate } = this.props.navigation.state.params;
    const { address } = this.props.navigation.state.params;
    const { Country } = this.props.navigation.state.params;
    const { state } = this.props.navigation.state.params;
    const { school } = this.props.navigation.state.params;
    const { sid } = this.props.navigation.state.params;

    return (
      <SafeAreaView style={styles.container}>
        <CustomStatusBar
          backgroundColor={AppStyles.color.COLOR_TRANSP}
          barStyle="dark-content"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.logoView}>
            <Image source={Images.icons.logo} style={styles.images} />
          </View>
          <View>
            <Text style={styles.pleaseText}>
              Please complete the following steps
            </Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholderTextColor={"#617177"}
              placeholder={"Refferal Code"}
              value={this.state.rcode}
              onChangeText={rcode => {
                this.setState({
                  rcode: rcode
                });
              }}
            />
            <View style={styles.line} />
            <View style={styles.textView}>
              <Text style={styles.subText}>Upload ID Card Photo</Text>
            </View>
            <View style={styles.boxView}>
              <TouchableOpacity
                style={styles.imageBox}
                onPress={this.onAddImagePress}
              >
                {this.state.avatarSource.length === 0 ? (
                  <Icon
                    name="add"
                    size={24}
                    color={"grey"}
                    style={styles.iconView}
                  />
                ) : (
                  <Image
                    style={styles.imageView}
                    source={this.state.avatarSource}
                  />
                )}
                <View style={styles.absoluteView}>
                  <Text style={styles.subText}>Front Side</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.imageBox}
                onPress={this.onBackImagePress}
              >
                {this.state.backImage.length === 0 ? (
                  <Icon
                    name="add"
                    size={24}
                    color={"grey"}
                    style={styles.iconView}
                  />
                ) : (
                  <Image
                    style={styles.imageView}
                    source={this.state.backImage}
                  />
                )}
                <View style={styles.absoluteView}>
                  <Text style={styles.subText}>Back Side</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.textView}>
              <Text style={styles.subText}>Upload Profile Photo</Text>
            </View>

            <TouchableOpacity
              style={styles.imageBox}
              onPress={this.onProfileImagePress}
            >
              {this.state.profilePic.length === 0 ? (
                <Icon
                  name="add"
                  size={24}
                  color={"grey"}
                  style={styles.iconView}
                />
              ) : (
                <Image
                  style={styles.imageView}
                  source={this.state.profilePic}
                />
              )}
            </TouchableOpacity>

            {this.props.isRegisterLoading && (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color="grey" />
              </View>
            )}
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={this.onPress(
              username,
              password,
              mobilenumber,
              email,
              name,
              surname,
              selectedDate,
              address,
              Country,
              state,
              school,
              sid,
              this.state.rcode
            )}
          >
            <Text style={styles.text}>SUBMIT</Text>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToAboutUsScreen();
              }}
            >
              <Text style={styles.bottomText}>About Us</Text>
            </TouchableOpacity>
            <View style={styles.dotView} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToDisclaimerScreen();
              }}
            >
              <Text style={styles.bottomText}>Disclaimer</Text>
            </TouchableOpacity>
            <View style={styles.dotView} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToPrivacyPolicyScreen();
              }}
            >
              <Text style={styles.bottomText}>Privacy Policy</Text>
            </TouchableOpacity>
            <View style={styles.dotView} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigateToTermsOfServicesScreen();
              }}
            >
              <Text style={styles.bottomText}>Terms Of Service</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ height: this.state.keyboardHeight }} />
      </SafeAreaView>
    );
  }
}

SgnUpImageScreen.propTypes = {
  navigateToSignUpImageScreen: PropTypes.func
};

export default SgnUpImageScreen;
