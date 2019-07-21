import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Image, Text, TouchableOpacity, View, Dimensions, ScrollView,TextInput,BackHandler} from 'react-native';
import styles from './styles';
import Toolbar from "../../components/Toolbar/Toolbar";
import Images from "../../config/images";
import moment from "moment";
import Video from 'react-native-af-video-player';
import Loader from "../../components/Loader/Loader";
import SImage from 'react-native-scalable-image';
import { NavigationActions, StackActions,NavigationEvents} from 'react-navigation';
class EditPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      codeInput:this.props.navigation.state.params.post_content,
      post_id:this.props.navigation.state.params.post_id
    };
  }

  componentDidMount() {
    this.setState({
      codeInput:this.props.navigation.state.params.post_content, 
      post_id:this.props.navigation.state.params.post_id
    })
  }

  backPressed() {
    this.setState({codeInput:"",post_id:""})
    this.props.navigateToHomeScreen(this.props.token);
  }


  onDrawerPress = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };
  render() {
    const item = this.props.navigation.state.params.item;
    const index = this.props.navigation.state.params.index;

    return (
      <View style={styles.container}>
<NavigationEvents onDidFocus={() => this.componentDidMount()}
/>
        <Toolbar onDrawerPress={this.onDrawerPress} />
        <ScrollView ref="scrollView"
         style={{flex:1}}
             onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}>
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
            </TouchableOpacity>
            <View style={styles.bottomView}>
           <TextInput 
           multiline={true}
           style={{flex:1,margin:20,marginTop:10,marginBottom:0}}
           autoFocus
           onChangeText={value => this.setState({ codeInput: value })}
           placeholder={'Write something.....'}
           value={this.state.codeInput}
           />
              </View>
          </View>
         
        </ScrollView>
        <View style={{flexDirection:'row',margin:10,alignItems:'flex-end',marginTop:0}}>
                <TouchableOpacity style={{borderColor:'grey',borderWidth:1,flex:1,margin:10,alignItems:'center',borderRadius:18}}
                 onPress={() =>this.backPressed()}>
                  <Text style={{margin:10,color:'grey'}}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:'#78BECA',borderWidth:1,flex:1,margin:10,alignItems:'center',borderRadius:18,backgroundColor:'#78BECA'}}
                onPress={() => this.props.requestEditPost(this.props.token,this.state.post_id,this.state.codeInput)}>
                <Text style={{margin:10,color:'#fff'}}>POST</Text>
                  </TouchableOpacity>
              </View>
        
              {this.props.isEditLoading && <Loader />}
      </View>
    );
  }
}
EditPostScreen.propTypes = {
  navigation: PropTypes.func,
  navigateToSignUp: PropTypes.func,
};
//   <Text>{this.props.token}</Text>
export default EditPostScreen;
