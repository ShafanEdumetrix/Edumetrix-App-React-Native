import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import Loader from "../../components/Loader/Loader";
import Icon from "react-native-vector-icons/MaterialIcons";
import Images from "../../config/images";
import moment from "moment";
import Menu, { MenuItem } from "react-native-material-menu";
import Modal from "react-native-modal";

class StudentFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isModalVisible: false
    };
  }

  componentDidMount() {
    this.props.requestStudentFeed(
      this.props.token,
      this.props.navigation.state.params.item.student_userid
    );
    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      this.pageFocused
    );
  }

  pageFocused = () => {
    this.props.requestStudentFeed(
      this.props.token,
      this.props.navigation.state.params.item.student_userid
    );
  };

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  likePress = (item,index) => {
    item.like_flag == 0
      ? this.props.requestLikeStudent(this.props.token, item.id,index,item)
      : this.props.requestUnLikeStudent(this.props.token, item.id,index,item);
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
        {item.post_photo.length == 0 ? (
          <Text style={styles.imageText} multiline={true}>
            {item.post_content}
          </Text>
        ) : (
          <Image
            source={
              item.post_photo.length === 0
                ? Images.findFriends.edu
                : { uri: "http://edumetrix.io/frontend/web/" + item.post_photo }
            }
            style={styles.image}
            resizeMode="stretch"
          />
        )}
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
    this.props.requestReport(this.props.token, this.state.isValue);
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
              <Text style={styles.reportText}>Report An Admin</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    global.id = this.props.navigation.state.params.item.student_userid;
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        {this.props.data.length == 0 && !this.props.isStudentFeedLoading?
          <View style={styles.loader}>
          <Text style={styles.noData}>NO FEEDS TO DISPLAY</Text>
          </View>:
          <FlatList
            data={this.props.data}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            keyboardShouldPersistTaps={"always"}
            extraData={this.props}   
          />}
        
        {this.renderModal()}
        {this.props.isStudentFeedLoading && <Loader />}
      </View>
    );
  }
}

StudentFeedScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func,
  navigateToEditProfileScreen: PropTypes.func
};

export default StudentFeedScreen;
