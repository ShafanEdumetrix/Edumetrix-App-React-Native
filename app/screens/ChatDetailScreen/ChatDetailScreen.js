import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
  Image,
  BackHandler
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import Images from "../../config/images";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";

class ChatDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      keyboardHeight: 0,
      data: this.props.data
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  );
    this.props.requestChatDetail(
      this.props.token,
      this.props.navigation.state.params.item.receiver_id
    );
    this._interval = setInterval(() => {
      this.props.requestChatDetail(
        this.props.token,
        this.props.navigation.state.params.item.receiver_id
      );
    }, 10000);
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
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
    clearInterval(this._interval);
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  handleBackButtonClick() {
    this.props.navigateToChatScreen(this.props.token);
    return true;
}
  static getDerivedStateFromProps(props) {
    return {
      data: props.data
    };
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

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  onPress = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() ;

    today = time;
    const { data } = this.state;
    data.push({
      sender: this.props.navigation.state.params.item.receiver,
      sender_photo: "",
      chat: this.state.text,
      chat_time: today,
      sender_flag: 1
    });
    this.setState({
      data: this.state.data,
      text: ""
    });
    this.props.requestChat(
      this.props.token,
      this.props.navigation.state.params.item.receiver_id,
      this.state.text
    );
  };

  renderItem = ({ item }) => {
    if (item.sender_flag == 1) {
      return (
        <View style={styles.itemView}>
          <View style={styles.titleLeftView}>
            <Text style={styles.textTitle}>{item.chat}</Text>
          </View>
          <View style={styles.blueTriangleView}>
          <View style={styles.dateView}>
            <Text style={styles.textDate}>{item.chat_time}</Text>
            <Text>{' '}|{' '}</Text>
            <Text style={styles.textDate}>{moment(item.chat_date).format("MMMM YYYY")}
</Text>
            </View>
            <View style={styles.blueTriangle} />
          </View>
        </View>
      );
    } else
      return (
        <View style={styles.itemView}>
          <View style={styles.whiteTriangleView}>
            <View style={styles.whiteTriangle} />
            <View style={styles.dateView}>
            <Text style={styles.textDate}>{item.chat_time}</Text>
            <Text>{' '}|{' '}</Text>
            <Text style={styles.textDate}>{moment(item.chat_date).format("MMMM YYYY")}
</Text>
            </View>
          </View>
          <View style={styles.titleRightView}>
            <Text style={styles.textTitle}>{item.chat}</Text>
          </View>
        </View>
      );
  };

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        <View style={styles.subView}>
          <View style={styles.subContainer}>
            <Image
              source={
                item.receiver_photo.length === 0
                  ? Images.findFriends.edu
                  : {
                      uri:
                        "http://edumetrix.io/frontend/web/" +
                        item.receiver_photo
                    }
              }
              style={styles.circleView}
            />
            <View style={styles.nameView}>
              <Text style={styles.receiverText}>{item.receiver}</Text>
              {/* <Text style={styles.statusText}>{item.status}</Text> */}
            </View>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            extraData={this.state}
            keyExtractor={(item, index) => item + index}
          />
            <View style={{flexDirection:'row'}}>
          <View style={styles.textInputView}>
            <TouchableOpacity>
            <Icon
            name="smile-o"
            size={24}
            color={"#78bdca"}
            style={{marginLeft:10,marginRight:10}}
          />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder={"Type Message"}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              placeholderTextColor={"#617177"}
            />
          </View>
          {this.state.text !== "" ? (
          <TouchableOpacity onPress={this.onPress} style={{backgroundColor:'#78bdca',borderRadius:24,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
          <Icon
            name="send"
            size={19}
            color={"#fff"}
            style={{marginLeft:25,marginRight:25}}
          />
            </TouchableOpacity>
          ) : null}
          
            </View>
        </View>
        <View style={{ height: this.state.keyboardHeight }} />
      </View>
    );
  }
}

ChatDetailScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func
};

export default ChatDetailScreen;
