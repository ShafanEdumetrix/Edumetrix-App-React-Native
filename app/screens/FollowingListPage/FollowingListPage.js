import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import Images from "../../config/images";
import Loader from '../../components/Loader';
import _ from 'lodash';
import Icon from "react-native-vector-icons/MaterialIcons";

class FollowingListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      query: '',
      firstQuery:'',
      isFetching: false
    };
  }

  componentDidMount() {
    this.requestFollowigs();
  }

  onRefresh() {
    this.setState({ isFetching: true },this.requestFollowigs);
 }

  requestFollowigs = () => {
    this.setState({
        isFetching: false
    });
    this.props.requestAllFollowings(this.props.token);
};

  onSearchTextChanged = _.debounce(text => {
    this.setState({
        query: text
    });
}, 250);

  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.itemView}>
          <View style={styles.subItemView}>
            <Image
              source={
                item.following_photo.length === 0
                  ? Images.findFriends.edu
                  : {
                      uri:
                        "http://edumetrix.io/frontend/web/" +
                        item.following_photo
                    }
              }
              style={styles.userImage}
            />
            <View style={styles.itemTextView}>
              <Text style={styles.nameText} numberOfLines={1}>
                {item.following}
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.stateText}>
                {item.state},{''}
                </Text>
                <Text style={styles.stateText}>
                {item.student_country}
                </Text>
                </View>
                <Text style={styles.followerText}>
                {item.followers}{''} Followers
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    let copyData = this.props.data.slice();

    const formatQuery = this.state.query.toLowerCase();

    let filteredData = _.filter(copyData, item => {
        return (
            item.following &&
            item.following.toLowerCase().includes(formatQuery)
        );
    });
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        <View style={styles.searchView}>
               <TextInput 
                style={styles.textInputSearch}
                placeholder={'Search By Name'}
                value={this.state.firstQuery}
                onChangeText={query => {
                    this.setState({ firstQuery: query });
                    this.onSearchTextChanged(query);
                }}
                />
                  <Icon
            name="search"
            size={24}
            color={"#CFCFD3"}
            style={styles.iconStyle}
          />
                </View>
                {this.props.data.length == 0 && !this.props.isFollowingListLoading?
                <View style={styles.loader}>
                <Text style={styles.noData}>NO FOLLOWINGS TO DISPLAY</Text>
                </View>: 
          <FlatList
            data={filteredData}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            keyboardShouldPersistTaps={"always"}
            extraData={this.state}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
          />}
        
        {this.props.isFollowingListLoading &&
          <Loader/>
        }
      </View>
    );
  }
}

FollowingListPage.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func,
  navigateToEditProfileScreen: PropTypes.func
};

export default FollowingListPage;
