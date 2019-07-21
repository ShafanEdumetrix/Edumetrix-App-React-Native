import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
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

class MyHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isModalVisible: false
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
      <Image
        source={
          item.post_photo.length === 0
            ? Images.findFriends.edu
            : { uri: "http://edumetrix.io/frontend/web/" + item.post_photo }
        }
        style={styles.image}
        resizeMode="stretch"
      />
       <Text multiline={true} style={{paddingLeft:10}}>
        {item.post_content}
      </Text>
      </View>
    )
    }
}

  likePress = (item,index) => {
    item.like_flag == 0
      ? this.props.requestLikeMyHome(this.props.token, item.id,index,item)
      : this.props.requestUnLikeMyHome(this.props.token, item.id,index,item);
  };

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

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

  onModalViewPress = item => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.deletePostRequest(this.props.token, this.state.isValue);
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
            <TouchableOpacity onPress={() => {     this.setState({ isModalVisible: !this.state.isModalVisible });
}}>
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
        {this.props.isGetAllUserPost && <Loader />}
      </View>
    );
  }
}

MyHomeScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func,
  navigateToEditProfileScreen: PropTypes.func
};

export default MyHomeScreen;
