import React, { Component } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform
} from "react-native";
import styles from "./styles";
import Toolbar from "../../components/Toolbar/Toolbar";
import Images from "../../config/images";
import Loader from "../../components/Loader/Loader";

class CommentsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      keyboardHeight: 0
    };
  }

  componentDidMount() {
    this.props.requestComments(
      this.props.token,
      this.props.navigation.state.params.item
    );
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      this.pageFocused
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    this.didFocusSubscription.remove();
  }

  pageFocused = () => {
    this.props.requestComments(
      this.props.token,
      this.props.navigation.state.params.item
    );
  };

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

  backPress = () => {
    this.props.navigation.goBack(this.props.navigation.state.key);
  };

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Image
          source={
            item.owner_photo.length === 0
              ? Images.findFriends.edu
              : { uri: "http://edumetrix.io/frontend/web/" + item.owner_photo }
          }
          style={styles.userImage}
        />
        <View style={styles.textViewItem}>
          <Text style={styles.ownerText}>
            {item.owner} {"  "}
          </Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        <View style={styles.subView}>
           {!this.props.isGetComments && this.props.data.length===0?
           <View style={styles.loader}>
           <Text style={styles.noData}>NO COMMENTS TO DISPLAY</Text>
           </View>:
           <FlatList
              data={this.props.data}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
              keyboardShouldPersistTaps={"always"}
              extraData={this.props.data}
            />}
          <View style={styles.headerView}>
            <Image
              source={
                this.props.userData.student_photo.length === 0
                  ? Images.findFriends.edu
                  : {
                      uri:
                        "http://edumetrix.io/frontend/web/" +
                        this.props.userData.student_photo
                    }
              }
              style={styles.userImage}
            />
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor={"#8e9299"}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                multiline={true}
                placeholder={"Write Something here... "}
              />
              <TouchableOpacity
                style={styles.postView}
                onPress={() => {
                  this.props.requestComment(
                    this.props.token,
                    this.props.navigation.state.params.item,
                    this.state.text
                  ),
                    this.setState({
                      text: ""
                    });
                  Keyboard.dismiss();
                }}
              >
                <Text>POST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: this.state.keyboardHeight }} />
        {this.props.isGetComments &&
            <Loader />}
      </View>
    );
  }
}

export default CommentsListScreen;
