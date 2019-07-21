import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import Loader from "../../components/Loader/Loader";
import Icon from "react-native-vector-icons/MaterialIcons";
import Images from "../../config/images";
import moment from "moment";
import Modal from "react-native-modal";
import Video from 'react-native-af-video-player';
import SImage from 'react-native-scalable-image';

class ProfileListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isModalVisible: false,
      isPassword: false,
      oldPassword: "",
      newPassword: ""
    };
  }

  componentDidMount() {
    this.props.requestAllData(this.props.token);
    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      this.pageFocused
    );
  }

  pageFocused = () => {
    this.props.requestAllData(this.props.token);
  };

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = item => {
    this._menu.hide();
    this.props.requestReport(this.props.token, item);
  };

  showMenu = () => {
    this._menu.show();
  };

  likePress = (item,index) => {
    item.like_flag == 0
      ? this.props.requestLikeMyHome(this.props.token, item.id,index,item)
      : this.props.requestUnLikeMyHome(this.props.token, item.id,index,item);
  };

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };


  renderView=(item)=>{
    if(item.post_photo.length == 0 && item.post_video.length == 0){
      return(
      <Text style={styles.imageText} multiline={true}>
        {item.post_content}
      </Text>
      )
    } else if(item.post_photo.length === 0 && item.post_video.length !==0){
      return(
        <View>
<Video url={{ uri: "http://edumetrix.io/frontend/web/" + item.post_video }}
            autoPlay={false} />
 <Text style={styles.imageText} multiline={true}>
 {item.post_content}
</Text>
</View>
      )
    }
  
  else{
    return(
      <View>
      <SImage
            width={Dimensions.get('window').width}
        source={
          item.post_photo.length === 0
            ? Images.findFriends.edu
            : { uri: "http://edumetrix.io/frontend/web/" + item.post_photo }
        }
      />
       <Text multiline={true} style={{paddingLeft:10}}>
        {item.post_content}
      </Text>
      </View>
    )
    }
}

  renderItem = ({ item,index }) => {
    return (
      <View style={styles.itemBackView}>
        <View style={styles.line} />
        <View style={styles.itemView}>
          <View style={styles.rowView}>
            <Image
              source={
                item.owner_photo.length === 0
                  ? Images.findFriends.edu
                  : {
                      uri:
                        "http://edumetrix.io/frontend/web/" + item.owner_photo
                    }
              }
              style={styles.userImage}
            />
            <View style={styles.textInputView}>
              <Text style={styles.owner}>{item.owner}</Text>
              <View style={styles.rowView}>
              <Text style={styles.time}>
                  {moment(item.creation_date).format("DD MMMM")}{'  '}
                </Text>
                {/* <Text> | </Text> */}
                <Text style={styles.time}>
                  {moment(item.creation_date).format("HH:MM:SS")}
                </Text>
              </View>
            </View>
          </View>
          <Icon
            name="more-horiz"
            size={24}
            color={"black"}
            style={styles.iconView}
            onPress={() => {
              this._toggleModal({ item: item.id });
            }}
          />
        </View>
        <TouchableOpacity onPress={()=>{this.props.navigateToPostDetailScreen({item:item,index:index})}}>

        {this.renderView(item)}

                </TouchableOpacity>

        <View style={styles.bottomView}>
          <View style={styles.rowLikeView}>
            <TouchableOpacity
              onPress={() => {
                this.likePress(item,index);
              }}
            >
              <Image
                source={Images.profile.like}
                style={[
                  styles.images,
                  {
                    tintColor: item.like_flag == 0 ? "black" : "#3D94BE"
                  }
                ]}
              />
            </TouchableOpacity>
            <Text style={styles.paddingText}>{item.like_count}</Text>
          </View>
          <TouchableOpacity
            style={styles.rowView}
            onPress={() => {
              this.props.navigateToCommentsListScreen({ item: item.id });
            }}
          >
            <Image source={Images.profile.comment} style={styles.images} />
            <Text style={styles.paddingText}>{item.comment_count}</Text>
          </TouchableOpacity>
          <View style={styles.rowView} />
        </View>
      </View>
    );
  };

  _toggleModal = ({ item }) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      isValue: item
    });
  };

  _togglePasswordModal = ({}) => {
    this.setState({ isPassword: !this.state.isPassword });
  };

  onModalViewPress = item => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.deletePostRequest(this.props.token, this.state.isValue);
  };

  onSubmitPress = () => {
    this.setState({
      isPassword: !this.state.isPassword,
      oldPassword: "",
      newPassword: ""
    });
    this.props.changePassword(
      this.props.token,
      this.state.oldPassword,
      this.state.newPassword
    );
  };

  renderToolBar = () => {
    return (
      <View style={styles.toolStyle}>
        <Text />
        <Text style={styles.headText}>CHANGE PASSWORD</Text>
      </View>
    );
  };

  renderPasswordModal = () => {
    return (
      <View>
        <Modal
          isVisible={this.state.isPassword}
          onBackdropPress={this._togglePasswordModal}
        >
          <View style={styles.modalPasswordView}>
            {this.renderToolBar()}
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder={"Old Password"}
              placeholderTextColor={"#617177"}
              secureTextEntry={true}
              value={this.state.oldPassword}
              onChangeText={oldPassword => {
                this.setState({
                  oldPassword
                });
              }}
            />
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder={"New Password"}
              placeholderTextColor={"#617177"}
              value={this.state.newPassword}
              secureTextEntry={true}
              onChangeText={newPassword => {
                this.setState({
                  newPassword
                });
              }}
            />
            <TouchableOpacity
              onPress={this.onSubmitPress}
              style={styles.submitButton}
            >
              <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  renderModal = () => {
    return (
      <View>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this._toggleModal}
          style={styles.renderModalView}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                this.onModalViewPress();
              }}
            >
              <Text style={styles.reportText}>Delete Post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState({ isModalVisible: !this.state.isModalVisible })}}>
              <Text style={styles.reportText}>Edit Post</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>{this.onModalViewPress()}}>
                        <Text style={styles.reportText}>Report An Admin</Text>
                        </TouchableOpacity> */}
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        <ScrollView>
          <View>
            <View style={styles.topView}>
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
              <View style={styles.textView}>
                <Text style={styles.name}>
                  {this.props.userData.student_fname}{" "}
                  {this.props.userData.student_lname}
                </Text>
                <Text style={styles.country}>
                  {this.props.userData.student_country}
                </Text>
                <View style={styles.rowView}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigateToFollowersListPage();
                    }}
                  >
                    <Text style={styles.follower}>
                      {this.props.userData.followers} Follower
                    </Text>
                  </TouchableOpacity>
                  <Text>
                    {"  "}|{"  "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigateToFollowingListPage();
                    }}
                  >
                    <Text style={styles.follower}>
                      {this.props.userData.followings} Following
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonTouchView}>
                  <TouchableOpacity
                    style={styles.buttonView}
                    onPress={() => {
                      this.props.navigateToEditProfileScreen();
                    }}
                  >
                    <Text style={styles.editText}>Edit Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonChangeView}
                    onPress={this._togglePasswordModal}
                  >
                    <Text style={styles.editText}>Change Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            
            {this.props.userData.length == 0 && !this.props.isGetAllUserPost?
   <View style={styles.loader}>
   <Text style={styles.noData}>NO FEEDS TO DISPLAY</Text>
   </View>:
            <FlatList
              data={this.props.userPostData}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
              keyboardShouldPersistTaps={"always"}
              extraData={this.props}
            />}
        {this.renderModal()}
        {this.renderPasswordModal()}
        </View>
        </ScrollView>
        {this.props.isGetAllUserPost && <Loader />}
      </View>
    );
  }
}

ProfileListScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func,
  navigateToEditProfileScreen: PropTypes.func
};

export default ProfileListScreen;
