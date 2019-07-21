import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import Loader from "../../components/Loader/Loader";
import Icon from "react-native-vector-icons/FontAwesome";
import Images from "../../config/images";
import moment from "moment";
import ImagePicker from "react-native-image-picker";
import Modal from "react-native-modal";
import SImage from 'react-native-scalable-image';
import Video from 'react-native-af-video-player';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
const { ContextMenu, SlideInMenu, Popover } = renderers;
const options = {
  title: "Select Image",
  storageOptions: {
    skipBackup: true,
    path: "images",
    isModalVisible: false
  }
};

const videoOptions = {
  title: "Video Picker",
  takePhotoButtonTitle: "Take Video...",
  mediaType: "video",
  videoQuality: "medium",
  allowsEditing: true,
  durationLimit: 60
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLiked: false,
      item_count: 0,
      profilePic: "",
      isVideo: "",
      isValue: 0,
      page: 0,
      isModalVisible: false,
      isModal: false,
      isTextSelected: true,
      isImageSelected: false,
      isVideoSelected: false,
      id: 0,
      index: 0,
      item1: '',
      avatarSource: null,
      videosouce: null,
      name:'',
      nameVideo:''
    };
  }

  _toggleModal = ({ item, id, index, item1 }) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      isValue: item,
      id: id,
      index: index,
      item: item1
    });
  };

  toggleFollowModal = ({ item }) =>
    this.setState({ isModal: !this.state.isModal, isFollow: item });

  onModalViewPress = item => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.requestReport(this.props.token, this.state.isValue);
    this.props.requestHome(this.props.token, this.state.page);
  };

  componentDidMount() {
    this.props.requestHome(this.props.token, this.state.page);
    this.props.requestAllSuggestions(this.props.token);
    this.props.requestUser(this.props.token);
    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      this.pageFocused
    );
  }

  pageFocused = () => {
    this.props.requestHome(this.props.token, this.state.page);
    this.props.requestUser(this.props.token);
  };

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  likePress = (item, index) => {
    item.like_flag == 0
      ? this.props.requestLikePost(this.props.token, item.id, index, item)
      : this.props.requestUnLikePost(this.props.token, item.id, index, item);
  };

  onImagePress = () => {
    this.setState({
      isTextSelected: false,
      isImageSelected: true,
      isVideoSelected: false
    });

  };

  onImageSelectPess = () => {
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
          profilePic: source,
          name: response.fileName,
          avatarSource: response.uri
        });
      }
    });
  }

  onVideoSelectPress = () => {

    ImagePicker.showImagePicker(videoOptions, response => {
      console.log("Fdgdgdfg", response);

      //if (response.path) {
      //} else {
      if (response.uri) {
        console.log("VIDEO PATG", response.uri);
        const source = { uri: response.uri };

        this.setState({
          isVideo: source,
          nameVideo: response.uri,
          videosouce: response.uri
        })
      }
      //}
    });
  }

  onVideoPress = () => {

    this.setState({
      isTextSelected: false,
      isImageSelected: false,
      isVideoSelected: true
    });
  };

  renderSuggestionItem = ({ item, index }) => {
    return (
      <View style={styles.horizontalView}>
        <Image
          source={
            item.student_photo.length === 0
              ? Images.findFriends.edu
              : {
                uri: "http://edumetrix.io/frontend/web/" + item.student_photo
              }
          }
          style={styles.userSuggImage}
        />
        <Text style={styles.nameText}>{item.student_name}</Text>
        <Text style={styles.countryText}> {item.student_country}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.requestFollow(
              this.props.token,
              item.student_userid,
              item,
              index
            );
            this.toggleFollowModal({ item: item.student_name });
          }}
          style={styles.followButton}
        >
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderView = (item) => {
    if (item.post_photo.length == 0 && item.post_video.length == 0) {
      return (
        <View>
          {item.post_content !== '' &&
            <Text multiline={true} style={{ marginLeft: 13, marginTop: 5, marginBottom: 5, color: '#000000', marginRight: 13 }}> {item.post_content}</Text>
          }
        </View>
      )
    } else if (item.post_photo.length === 0 && item.post_video.length !== 0) {
      return (
        <View>
          <Video url={{ uri: "http://edumetrix.io/frontend/web/" + item.post_video }}
            autoPlay={false} />
          {item.post_content !== '' &&
            <Text multiline={true} style={{ marginLeft: 13, marginTop: 5, marginBottom: 5, color: '#000000', marginRight: 13 }}> {item.post_content}</Text>
          }
        </View>
      )
    }

    else {
      return (
        <View>
          <SImage
            width={Dimensions.get('window').width} // height will be calculated automatically
            source={{ uri: "http://edumetrix.io/frontend/web/" + item.post_photo }}
          />
          {item.post_content !== '' &&
            <Text multiline={true} style={{ marginLeft: 13, marginTop: 5, marginBottom: 5, color: '#000000', marginRight: 13 }}> {item.post_content}</Text>
          }
        </View>
      )
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemBackView}>
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


          <Menu
            renderer={ContextMenu}>
            <MenuTrigger>
              <Icon name="ellipsis-h" size={22} color={"#4a4f56"} style={styles.iconView} />
            </MenuTrigger>
            <MenuOptions>
              {item.owner_id === this.props.students_info.student_userid &&
                <View>
                  <MenuOption style={{ flexDirection: 'row', margin: 5 }} onSelect={() => this.props.deleteHomePostRequest(this.props.token, item.id, item.owner_id, index, item)}>
                    <Icon name="trash-o" size={20} color={"#4a4f56"} style={{ marginLeft: 10 }} /><Text style={{ color: '#000000', marginLeft: 10 }}>Remove post</Text>
                  </MenuOption>
                  <MenuOption style={{ flexDirection: 'row', margin: 5 }} onSelect={() => this.props.navigateToEditPostScreen({ item: item, index: index, post_id: item.id, post_content: item.post_content })}>
                    <Icon name="edit" size={20} color={"#4a4f56"} style={{ marginLeft: 10 }} /><Text style={{ color: '#000000', marginLeft: 10 }}>Edit post</Text>
                  </MenuOption>
                </View>
              }
              {item.owner_id !== this.props.students_info.student_userid &&
                <MenuOption style={{ flexDirection: 'row', margin: 5 }}>
                  <Icon name="exclamation" size={20} color={"#4a4f56"} style={{ marginLeft: 10 }} /><Text style={{ color: '#000000', marginLeft: 10 }}>Report</Text>
                </MenuOption>
              }
            </MenuOptions>
          </Menu>
        </View>
        <TouchableOpacity onPress={() => { this.props.navigateToPostDetailScreen({ item: item, index: index }) }}>
          {this.renderView(item)}
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <View style={styles.rowLikeView}>
            <TouchableOpacity
              onPress={() => {
                this.likePress(item, index);
              }}
            >
              <Icon name="thumbs-up" size={23}
                style={[
                  {
                    color: item.like_flag == 0 ? "#4a4f56" : "#3D94BE"
                  }
                ]} />
            </TouchableOpacity>
            <Text style={styles.paddingItemText}>{item.like_count}</Text>
          </View>
          <TouchableOpacity
            style={styles.rowView}
            onPress={() => {
              this.props.navigateToCommentsListScreen({ item: item.id });
            }}
          >
            <Icon name="comment" size={22} color={'#4a4f56'} />
            <Text style={styles.paddingItemText}>{item.comment_count}</Text>
          </TouchableOpacity>
          <View style={styles.rowView} />
        </View>
        <View style={styles.line} />
        {index === 2 ? (
          <FlatList
            horizontal={true}
            data={this.props.suggestedData}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderSuggestionItem}
            keyExtractor={(item, index) => index}
            keyboardShouldPersistTaps={"always"}
            extraData={this.props}
          />
        ) : null}
      </View>
    );
  };

  footerComponent = () => {
    return (
      <View style={styles.footerView}>
        <TouchableOpacity
          onPress={() => {
            const page = this.state.page + 1;
            this.setState(
              {
                page
              },
              () => {
                this.props.requestHome(this.props.token, this.state.page);
              }
            );
          }}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Load More</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderFollowModal = () => {
    return (
      <View>
        <Modal
          isVisible={this.state.isModal}
          onBackdropPress={this.toggleFollowModal}
        >
          <View style={styles.modalFollowView}>
            <Text style={styles.sucessText}>
              You Followed {this.state.isFollow}
            </Text>
          </View>
        </Modal>
      </View>
    );
  };



  onApiPress = () => {

    Keyboard.dismiss();
    if (this.state.profilePic.length === 0 && this.state.isVideo.length === 0) {
      this.props.textFeedRequest(this.props.token, this.state.text);
    }
    else if (this.state.profilePic.length === 0) {
      this.props.addPostVideoRequest(this.state.isVideo, this.state.text, this.props.token)
    }
    else if (this.state.isVideo.length === 0) {
      this.props.addPostImageRequest(this.state.profilePic, this.state.text, this.props.token);
    }
    this.setState({
      text: "",
      profilePic: "",
      name: "",
      nameVideo: "",
      isVideo: ''
    });
  }
  render() {

    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />

        <View style={styles.topView}>
          <TouchableOpacity
            style={styles.iconTextView}
            onPress={() => {
              this.setState({
                isTextSelected: true,
                isImageSelected: false,
                isVideoSelected: false
              });
            }}
          >
            <Icon name="edit" size={22} style={
              this.state.isTextSelected
                ? styles.mainImageSelected
                : styles.mainImage
            } />
            <Text
              style={
                this.state.isTextSelected
                  ? styles.paddingTextSelected
                  : styles.paddingText
              }
            >
              Compose Post
            </Text>
          </TouchableOpacity>
          <Text style={styles.lineText}>|</Text>
          <TouchableOpacity
            style={styles.iconTextView}
            onPress={this.onImagePress}
          >
            <Icon name="image" size={22} style={
              this.state.isImageSelected
                ? styles.mainImageSelected
                : styles.mainImage
            } />
            <Text
              style={
                this.state.isImageSelected
                  ? styles.paddingTextSelected
                  : styles.paddingText
              }
            >
              Photo
            </Text>
          </TouchableOpacity>
          <Text style={styles.lineText}>|</Text>
          <TouchableOpacity
            style={styles.iconTextView}
            onPress={this.onVideoPress}
          >
            <Icon name="video-camera" size={22} style={
              this.state.isVideoSelected
                ? styles.mainImageSelected
                : styles.mainImage
            } />
            <Text
              style={
                this.state.isVideoSelected
                  ? styles.paddingTextSelected
                  : styles.paddingText
              }
            >
              Video
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.headerView}>
            <View style={styles.imageTextView}>
              <Image
                source={
                  this.props.userData.student_photo === 0 ||
                    this.props.userData.student_photo === "undefined"
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

                {this.state.isImageSelected && (
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.imageUploadedView} onPress={this.onImageSelectPess}>
                      <View style={{ flex: 1, alignItems: 'center', borderColor: '#8e9299', borderWidth: .9, borderRadius: 4, justifyContent: 'center' }}>
                        <Icon name="camera" size={24} color={"#4a4f56"} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 10 }}>Choose a Image</Text>
                        {this.state.name !== '' &&
                          <Text style={{ fontSize: 10, color: '#000000', flex: 1, marginLeft: 10, marginRight: 10, marginBottom: 5, width: 140 }} numberOfLines={1}>{this.state.name}</Text>
                        }
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                {this.state.isVideoSelected && (
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.imageUploadedView} onPress={this.onVideoSelectPress}>
                      <View style={{ flex: 1, alignItems: 'center', borderColor: '#8e9299', borderWidth: .9, borderRadius: 4, justifyContent: 'center' }}>
                        <Icon name="video-camera" size={24} color={"#4a4f56"} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 10 }}>Choose a Video </Text>
                        {this.state.nameVideo !== '' &&
                          <Text style={{ fontSize: 10, color: '#000000', marginLeft: 10, marginRight: 10, marginBottom: 5, width: 140 }} numberOfLines={1}>{this.state.nameVideo}</Text>
                        }
                      </View>
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={styles.profileTextImage}></Text>
                  </View>
                )}
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor={"#8e9299"}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  multiline={true}
                  placeholder={"Write Something here... "}
                />
              </View>
            </View>
            {this.state.text.length !== 0 || this.state.profilePic.length !== 0 || this.state.isVideo.length !== 0 ? (
              <TouchableOpacity
                style={styles.postView}
                onPress={() => {
                  this.onApiPress()
                }}
              >
                <Text style={{ color: '#fff', marginLeft: 35, marginRight: 35, margin: 5 }}>POST</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.line} />
          {this.props.data.length == 0 && !this.props.isHomeLoading ?
            <View style={styles.loader}>
              <Text style={styles.noData}>NO FEEDS TO DISPLAY</Text>
            </View> :
            <FlatList
              data={this.props.data}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
              keyboardShouldPersistTaps={"always"}
              extraData={this.props}
              ListFooterComponent={this.footerComponent}
            />}


          {/* {this.renderFollowModal()} */}
        </ScrollView>
        {this.props.isHomeLoading && <Loader />}
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func,
  requestHome: PropTypes.func
};

export default HomeScreen;
