import React, { Component } from "react";
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  Keyboard,
  Platform,
  Image,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImagePicker from "react-native-image-picker";

const options = {
  title: "Select Image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardHeight: 0,
      isChecked: false,
      isDate: false,
      selectedDate: this.props.data.dob,
      avatarSource: "",
      backImage: "",
      profilePic: "",
      name: this.props.data.student_fname,
      surname: this.props.data.student_lname,
      phone: this.props.data.student_phone,
      email: this.props.data.student_email,
      address: this.props.data.student_address,
      country: this.props.data.student_country,
      state: this.props.data.state,
      school: this.props.data.school,
      sid: this.props.data.studentid
    };
  }

  componentDidMount() {
    this.props.requestUser(this.props.token);
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

  _showDatePicker = () => this.setState({ isDate: true });

  _hideDatePicker = () => this.setState({ isDate: false });

  _handleDatePicked = date => {
    this.setState({
      selectedDate: moment(date).format("YYYY-MM-DD")
    }),
      this._hideDatePicker();
  };

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
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

  onPress = () => {
    this.props.requestEditProfile(
      this.state.selectedDate,
      this.state.name,
      this.state.surname,
      this.state.country,
      this.state.state,
      this.state.address,
      this.state.school,
      this.state.sid,
      this.state.profilePic,
      this.state.avatarSource,
      this.state.backImage,
      this.state.phone,
      this.state.email,
      this.props.token
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        {this.props.data.length === 0 ? (
          <View style={styles.loaderNoData}>
            <Text style={styles.noData}>NO DATA AVAILABLE</Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={"always"}
          >
            <View style={styles.subContainer}>
              <View style={styles.textView}>
                <Text style={styles.photoText}>Change Profile Photo</Text>
              </View>
              <TouchableOpacity
                style={styles.imageBox}
                onPress={this.onProfileImagePress}
              >
                <ImageBackground
                  source={{
                    uri:
                      "http://edumetrix.io/frontend/web/" +
                      this.props.data.student_photo
                  }}
                  style={styles.imageBox}
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
                </ImageBackground>
              </TouchableOpacity>

              <View style={styles.textView}>
                <Text style={styles.photoText}>Change ID Card Photo</Text>
              </View>
              <View style={styles.boxView}>
                <TouchableOpacity
                  style={styles.imageBox}
                  onPress={this.onAddImagePress}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "http://edumetrix.io/frontend/web/" +
                        this.props.data.student_idfront
                    }}
                    style={styles.imageBox}
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
                  </ImageBackground>
                  <View style={styles.absoluteView}>
                    <Text style={styles.photoText}>Front Side</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.imageBox}
                  onPress={this.onBackImagePress}
                >
                  <ImageBackground
                    source={{
                      uri:
                        "http://edumetrix.io/frontend/web/" +
                        this.props.data.student_idback
                    }}
                    style={styles.imageBox}
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
                  </ImageBackground>
                  <View style={styles.absoluteView}>
                    <Text style={styles.photoText}>Back Side</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.student_fname}
                value={this.state.name}
                placeholderTextColor={"#617177"}
                autoCorrect={false}
                onChangeText={name => {
                  this.setState({
                    name: name
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholderTextColor={"#617177"}
                placeholder={this.props.data.student_lname}
                value={this.state.surname}
                onChangeText={surname => {
                  this.setState({
                    surname: surname
                  });
                }}
              />
              <View style={styles.line} />
              <TouchableOpacity
                onPress={this._showDatePicker}
                style={styles.dob}
              >
                {this.state.selectedDate.length === 0 ? (
                  <Text style={styles.dateText}>{this.props.data.dob}</Text>
                ) : (
                  <Text style={styles.selectedDate}>
                    {this.state.selectedDate}
                  </Text>
                )}
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDate}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDatePicker}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                placeholderTextColor={"#617177"}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.student_phone}
                value={this.state.phone}
                keyboardType={"number-pad"}
                onChangeText={phone => {
                  this.setState({
                    phone: phone
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                placeholderTextColor={"#617177"}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.student_email}
                value={this.state.email}
                autoCorrect={false}
                keyboardType={"email-address"}
                onChangeText={email => {
                  this.setState({
                    email: email
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInputAddress}
                multiline={true}
                placeholderTextColor={"#617177"}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.student_address}
                value={this.state.address}
                onChangeText={address => {
                  this.setState({
                    address: address
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                placeholderTextColor={"#617177"}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.student_country}
                value={this.state.country}
                onChangeText={country => {
                  this.setState({
                    country: country
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                placeholderTextColor={"#617177"}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.state}
                value={this.state.state}
                onChangeText={state => {
                  this.setState({
                    state: state
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                placeholderTextColor={"#617177"}
                underlineColorAndroid="transparent"
                placeholder={this.props.data.school}
                value={this.state.school}
                onChangeText={school => {
                  this.setState({
                    school: school
                  });
                }}
              />
              <View style={styles.line} />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholderTextColor={"#617177"}
                placeholder={this.props.data.studentid}
                value={this.state.sid}
                onChangeText={sid => {
                  this.setState({
                    sid: sid
                  });
                }}
              />
              <View style={styles.line} />
              {this.props.isEditLoading && (
                <View style={styles.loader}>
                  <ActivityIndicator size="large" color="grey" />
                </View>
              )}
            </View>
            <TouchableOpacity style={styles.saveView} onPress={this.onPress}>
              <Text style={styles.saveText}>SAVE</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
        <View style={{ height: this.state.keyboardHeight }} />
      </View>
    );
  }
}

EditProfileScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func
};

export default EditProfileScreen;
