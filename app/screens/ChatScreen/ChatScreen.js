import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image,TextInput,BackHandler} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Toolbar from "../../components/Toolbar/Toolbar";
import _ from "lodash";
import Images from "../../config/images";
import Loader from "../../components/Loader/Loader";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dash from 'react-native-dash';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      query: '',
      firstQuery:'',
      isFetching:false
    };
    this.backPressed = this.backPressed.bind(this);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
    BackHandler.addEventListener('hardwareBackPress', this.backPressed)
  );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed)
  );
    this.requestChatList();
   
  }
backPressed() {
  this.props.navigation.goBack(null);
  return true;
}

  onRefresh() {
    this.setState({ isFetching: true },this.requestChatList);
 }

 requestChatList = () => {
    this.setState({
        isFetching: false
    });
    this.props.requestChatList(this.props.token);
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
      <TouchableOpacity
        onPress={() => {
          this.props.navigateToChatDetailScreen({ item: item });
        }}
      >
        <View style={styles.itemView}>
          <Image
            source={
              item.receiver_photo.length === 0
                ? Images.findFriends.edu
                : {
                    uri:
                      "http://edumetrix.io/frontend/web/" + item.receiver_photo
                  }
            }
            style={styles.userImage}
          />
          <View style={styles.itemTextView}>
            <View>
              <Text style={styles.nameText}>{item.receiver}</Text>
              {/* <Text style={styles.nameStatusText}>{item.status}</Text> */}
            </View>
            <Text style={styles.timeText}>{item.chat_time}</Text>
          </View>
        </View>
        <Dash 
        dashColor={'#30384b'}
        style={{width:null, height:1,flex:1,flexDirection:'row'}}/>
    </TouchableOpacity>
    );
  };

  render() {
    let copyData = this.props.data.slice();

    const formatQuery = this.state.query.toLowerCase();

    let filteredData = _.filter(copyData, item => {
        return (
            item.receiver &&
            item.receiver.toLowerCase().includes(formatQuery)
        );
    });
    return (
      <View style={styles.container}>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        <View style={styles.searchView}>
               <TextInput 
                style={styles.textInputSearch}
                placeholder={''}
                value={this.state.firstQuery}
                onChangeText={query => {
                    this.setState({ firstQuery: query });
                    this.onSearchTextChanged(query);
                }}
                />
                  <Icon
            name="search"
            size={24}
            color={"#A3A7B3"}
            style={styles.iconStyle}
          />
                </View>
                {!this.props.isChatLoading && this.props.data.length === 0?
                  <View style={styles.loader}>
                  <Text style={styles.noData}>NO CHAT LIST TO DISPLAY</Text>
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
         {this.props.isChatLoading &&
        <Loader />}
      </View>
     
    )
  }
}

ChatScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToChatDetailScreen: PropTypes.func
};

export default ChatScreen;
