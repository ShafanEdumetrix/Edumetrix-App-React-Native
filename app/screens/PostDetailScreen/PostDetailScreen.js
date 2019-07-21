import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import Toolbar from "../../components/Toolbar/Toolbar";
import Images from "../../config/images";
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";
import Video from 'react-native-af-video-player';
import SImage from 'react-native-scalable-image';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
const { ContextMenu, SlideInMenu, Popover } = renderers;

class PostDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  onModalViewPress = item => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.requestReport(this.props.token, this.state.isValue);
  };

  likePress = (item, index) => {
    item.like_flag == 0
      ? this.props.requestLikePost(this.props.token, item.id, index, item)
      : this.props.requestUnLikePost(this.props.token, item.id, index, item);
  };

  backPress = () => {
    this.props.navigation.goBack(this.props.navigation.state.key);
  };

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  _toggleModal = ({ item, id }) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      isValue: item,
      id: id
    });
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
            {this.state.id === this.props.students_info.student_userid &&
              <TouchableOpacity>
                <Text style={styles.reportText}>Delete Post</Text>
              </TouchableOpacity>
            }
            {this.state.id === this.props.students_info.student_userid &&
              <TouchableOpacity>
                <Text style={styles.reportText}>Edit Post</Text>
              </TouchableOpacity>}
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    const item = this.props.navigation.state.params.item;
    const index = this.props.navigation.state.params.index;

    return (
      <View style={styles.container}>

        <Toolbar onDrawerPress={this.onDrawerPress} />
        <ScrollView>
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
                  this._toggleModal({ item: item.id, id: item.owner_id });
                }}
              />
            </View>
            <TouchableOpacity>

              {item.post_video.length === 0 && item.post_photo.length !== 0 &&
                <View>
                  <SImage
                    source={
                      item.post_photo.length === 0
                        ? Images.findFriends.edu
                        : { uri: "http://edumetrix.io/frontend/web/" + item.post_photo }
                    }
                    width={Dimensions.get('window').width}
                  />
                  </View>
                  }
              {item.post_photo.length === 0 && item.post_video.length !== 0 &&
                <View>
                  <Video url={{ uri: "http://edumetrix.io/frontend/web/" + item.post_video }}
                    autoPlay={false} />

                </View>
              }
              {item.post_content !== '' &&
                <Text multiline={true} style={{ marginLeft: 10, marginTop: 5, marginBottom: 5, }}> {item.post_content}</Text>
              }
            </TouchableOpacity>
            <View style={styles.bottomView}>
              <View style={styles.rowLikeView}>
                <TouchableOpacity
                  onPress={() => {
                    this.likePress(item, index);
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
                <Text style={styles.paddingItemText}>{item.like_count}</Text>
              </View>
              <TouchableOpacity
                style={styles.rowView}
                onPress={() => {
                  this.props.navigateToCommentsListScreen({ item: item.id });
                }}
              >
                <Image source={Images.profile.comment} style={styles.images} />
                <Text style={styles.paddingItemText}>{item.comment_count}</Text>
              </TouchableOpacity>
              <View style={styles.rowView} />
            </View>
            <View style={styles.line} />

          </View>
        </ScrollView>
        {this.renderModal()}
      </View>
    );
  }
}


export default PostDetailScreen;
