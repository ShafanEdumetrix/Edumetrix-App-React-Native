import React, { Component } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity,TextInput} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar/Toolbar';
import Images from '../../config/images';
import Loader from '../../components/Loader';
import _ from 'lodash';
import Icon from "react-native-vector-icons/MaterialIcons";

class FollowersListPage extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
            query: '',
            firstQuery:'',
            isFetching: false,
        };
    }

componentDidMount(){
    this.requestFollowers();
}

onRefresh() {
    this.setState({ isFetching: true },this.requestFollowers);
 }

 requestFollowers = () => {
    this.setState({
        isFetching: false
    });
    this.props.requestAllFollowers(this.props.token);
};


onSearchTextChanged = _.debounce(text => {
    this.setState({
        query: text
    });
}, 250);


onDrawerPress=()=>{
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    renderItem=({item,index})=>{        
        return(
            <View>
            <View style={styles.itemView}>
                <View style={styles.subItemView}>
                <Image
                    source={item.follower_photo.length===0?Images.findFriends.edu:{uri: 'http://edumetrix.io/frontend/web/'+item.follower_photo}}
                    style={styles.userImage}/>
                    <View style={styles.itemTextView}>
                        <Text style={styles.nameText} numberOfLines={1}>{item.follower}</Text>
                        <View style= {styles.followersView}>
                        <Text style={styles.countryText} numberOfLines={1}>{item.state},{' '}
                            <Text>{item.student_country}</Text></Text>
                        </View>
                        <View style= {styles.followersView}>
                            <Text style={styles.followersText}>{item.followers}{' '}</Text>
                            <Text style={styles.followersText}>Followers</Text>
                        </View>
                    </View>
                </View>
                {item.follow_flag == 1 &&
                
                <TouchableOpacity style={{marginRight:20}}  onPress={()=>{
                    this.props.navigateToChatDetailScreen({
                        item: {
                            receiver: item.follower,
                            receiver_id: item.student_userid,
                            receiver_photo: item.follower
            }})

        }}>
            <Image
            source={Images.findFriends.chat}
        style={styles.images}/>
        </TouchableOpacity>}
        {item.follow_flag == 1 ?
        <TouchableOpacity onPress={()=>{
            this.props.requestUnFollow(this.props.token,item.student_userid,item,index)
        }}>
                <Image
                    source={Images.findFriends.unfollow}
                    style={styles.images}/>
                    </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>{
                this.props.requestFollow(this.props.token,item.student_userid,item,index)
            }}>
            <Image
                    source={Images.findFriends.follow}
                    style={styles.images}/>
                    </TouchableOpacity>}
            </View>
            </View>
        );
    }

    render() {
        let copyData = this.props.data.slice();

        const formatQuery = this.state.query.toLowerCase();

        let filteredData = _.filter(copyData, item => {
            return (
                item.follower &&
                item.follower.toLowerCase().includes(formatQuery)
            );
        });
        return (
            <View style={styles.container}>
                <Toolbar onDrawerPress={this.onDrawerPress}/>
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
                {this.props.data.length == 0 && !this.props.isFollowerListLoading?
                 <View style={styles.loader}>
                 <Text style={styles.noData}>NO FOLLOWER TO DISPLAY</Text>
                 </View>:
                <FlatList
                    data={filteredData}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    keyboardShouldPersistTaps={'always'}
                    extraData={this.props}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                />}
                {this.props.isFollowerListLoading && 
                <Loader/>}
                
            </View>
        );
    }
}

FollowersListPage.propTypes = {
    navigation: PropTypes.func,
    navigateToSignUp: PropTypes.func,
    navigateToEditProfileScreen: PropTypes.func
};

export default FollowersListPage;
