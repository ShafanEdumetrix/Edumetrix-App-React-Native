import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar/Toolbar';
import _ from 'lodash';
import Images from '../../config/images';
import Modal from 'react-native-modal'; 
import Loader from '../../components/Loader';
import Icon from "react-native-vector-icons/MaterialIcons";

class FindFriendsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
            text:'',
            isModalVisible: false,
            page:0,
            isFetching:false
        };
    }
 


componentDidMount() {
    this.requestStudent();
  }

  onRefresh() {
    this.setState({ isFetching: true },this.requestStudent);
 }

 requestStudent = () => {
    this.setState({
        isFetching: false
    });
    this.props.requestAllStudent(this.props.token,this.state.page);
};

static getDerivedStateFromProps(props) {
    return {
        data: props.data
    };
}


onSearchTextChanged = _.debounce(text => {
    this.setState({
        query: text
    });
}, 250);

    onDrawerPress=()=>{
        const { navigation } = this.props;
        navigation.openDrawer();
    }
 


    footerComponent=()=>{
        return(
            <View style={styles.footerView}>
            <TouchableOpacity onPress={()=>{
                const page = this.state.page + 1;
                this.setState(
                {
                    page
                },
                () => {
                    this.props.requestAllStudent(this.props.token,this.state.page);
            }
                )
            }}
            style={styles.submitButton}>
                <Text style={styles.submitText}>Load More</Text>
            </TouchableOpacity>
            </View>
        )
    }

    toggleModal = ({item}) =>
        this.setState({ isModalVisible: !this.state.isModalVisible,isValue:item });


       

    renderItem=({item,index})=>{        
        return(
            <View>
            <View style={styles.itemView} >
                <View style={styles.subItemView}>
                <TouchableOpacity onPress={()=>{ this.props.navigateToStudentFeedScreen({item:item})}}>
                <Image
                    source={item.image.length===0?Images.findFriends.edu:{uri: 'http://edumetrix.io/frontend/web/'+item.image}}
                    style={styles.userImage}/>
                </TouchableOpacity>
                    <View style={styles.itemTextView}>
                        <Text style={styles.nameText} numberOfLines={1}>{item.student_name}</Text>
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
                {item.follow_flag == 1 && item.following_flag == 1 &&                
                <TouchableOpacity style={{marginRight:20}}  onPress={()=>{
                    this.props.navigateToChatDetailScreen({
                        item: {
                            receiver: item.student_name,
                            receiver_id: item.student_userid,
                            receiver_photo: item.image
            }})

        }}>
            <Image
            source={Images.findFriends.chat}
        style={styles.images}/>
        </TouchableOpacity>}


{item.follow_flag == 0 ?
    <TouchableOpacity onPress={()=>{
        this.props.requestFollowStudent(this.props.token,item.student_userid,item,index)
    }}>
    <Image
            source={Images.findFriends.follow}
            style={styles.images}/>
            </TouchableOpacity>:
    <TouchableOpacity onPress={()=>{
        this.props.requestUnFollowStudent(this.props.token,item.student_userid,item,index)
    }}>
            <Image
                source={Images.findFriends.unfollow}
                style={styles.images}/>
                </TouchableOpacity>
        
      }
            </View>
            </View>
        );
    }

    render() {
        let copyData = this.props.data.slice();

        const formatQuery = this.state.query.toLowerCase();

        let filteredData = _.filter(copyData, item => {
            return (
                item.student_name &&
                item.student_name.toLowerCase().includes(formatQuery)
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
                {!this.props.isStudentLoading && this.props.data.length === 0?
                  <View style={styles.loader}>
                  <Text style={styles.noData}>NO CHAT LIST TO DISPLAY</Text>
                  </View>:
                 <FlatList
                     data={filteredData}
                     showsVerticalScrollIndicator={false}
                     renderItem={this.renderItem}
                     keyExtractor={(item, index) => index}
                     keyboardShouldPersistTaps={'always'}
                     extraData={this.state}
                     ListFooterComponent={this.footerComponent}
                     onRefresh={() => this.onRefresh()}
                     refreshing={this.state.isFetching}
                 />}
                  {this.props.isStudentLoading &&
                <Loader/>}
            </View>
        );
    }
} 

FindFriendsScreen.propTypes = {
    navigation: PropTypes.func,
    navigateToSignUp: PropTypes.func
};

export default FindFriendsScreen;
