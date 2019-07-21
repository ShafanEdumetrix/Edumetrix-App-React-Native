import React, { Component } from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text, Image, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar/Toolbar';

class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            keyboardHeight: 0,
            isChecked:false,
            isDate: false,
            selectedDate: this.props.data.dob,
            avatarSource:'',
            backImage:'',
            profilePic:'',
            name:this.props.data.student_fname,
            surname:this.props.data.student_lname,
            phone:this.props.data.student_phone,
            email:this.props.data.student_email,
            address:this.props.data.student_address,
            country:this.props.data.student_country,
            state:this.props.data.state,
            school:this.props.data.school,
            sid:this.props.data.studentid
        };
    }


    
    componentDidMount() {
        this.props.requestUser(this.props.token);
        this.didFocusSubscription = this.props.navigation.addListener(
            'didFocus',
          this.pageFocused
          );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedDate: nextProps.data.dob,
            name:nextProps.data.student_fname,
            surname:nextProps.data.student_lname,
            phone:nextProps.data.student_phone,
            email:nextProps.data.student_email,
            address:nextProps.data.student_address,
            country:nextProps.data.student_country,
            state:nextProps.data.state,
            school:nextProps.data.school,
            sid:nextProps.data.studentid
        })
    }

    pageFocused = () => {
        this.props.requestUser(this.props.token);

    }
    
    componentWillUnmount(){
        this.didFocusSubscription.remove();
    }

    onPress = () => {
        this.props.navigation.goBack(this.props.navigation.state.key);
    };


    onDrawerPress=()=>{
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        
        return (
            <View style={styles.container}>
                <Toolbar onDrawerPress={this.onDrawerPress}/>
                {this.props.data.length===0?
                  <View style={styles.loaderNoData}> 
                  <Text style={styles.noData}>NO DATA AVAILABLE</Text>
                  </View>
                :

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={styles.subContainer}>
                        <View style={styles.textView}>
                            <Text style={styles.photoText}>Change Profile Photo</Text>
                        </View>
                        {this.state.profilePic.length === 0?
                            <View style={styles.imageBox}>
                            <ImageBackground  
                                source={{uri: 'http://edumetrix.io/frontend/web/'+this.props.data.student_photo}}
                                style={styles.imageBox}>
                               
                                </ImageBackground>
                            </View>
                            :
                            <Image
                                style={styles.imageView}
                                source={this.state.profilePic}/>
                        }
                        <View style={styles.textView}>
                            <Text style={styles.photoText}>Change ID Card Photo</Text>
                        </View>
                        <View style={styles.boxView}>
                            {this.state.avatarSource.length === 0?
                                <View style={styles.imageBox} >
                                <ImageBackground  
                                source={{uri: 'http://edumetrix.io/frontend/web/'+this.props.data.student_idfront}}
                                style={styles.imageBox}>
                               
                                </ImageBackground>
                                    <View style={styles.absoluteView}>
                                        <Text style={styles.photoText}>Front Side</Text>
                                    </View>
                                </View>
                                :
                                <View>
                                    <Image
                                        style={styles.imageView}
                                        source={this.state.avatarSource}/>
                                </View>}
                            {this.state.backImage.length === 0?
                                <View style={styles.imageBox}>
                                     <ImageBackground  
                                source={{uri: 'http://edumetrix.io/frontend/web/'+this.props.data.student_idback}}
                                style={styles.imageBox}>
                               
                                </ImageBackground>
                                    <View style={styles.absoluteView}>
                                        <Text style={styles.photoText}>Back Side</Text>
                                    </View>
                                </View>:
                                <View>
                                    <Image
                                        style={styles.imageView}
                                        source={this.state.avatarSource}/>
                                </View>}
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.student_fname}
                            value={this.state.name}
                            placeholderTextColor={'#617177'}
                            autoCorrect={false}
                            editable={false}
                            onChangeText={(name)=>{
                                this.setState({
                                    name:name
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#617177'}
                            placeholder={this.props.data.student_lname}
                            value={this.state.surname}
                            editable={false}
                            onChangeText={(surname)=>{
                                this.setState({
                                    surname:surname
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#617177'}
                            placeholder={this.props.data.dob}
                            value={this.state.surname}
                            editable={false}
                            onChangeText={(selectedDate)=>{
                                this.setState({
                                    selectedDate
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.student_phone}
                            value={this.state.phone}
                            editable={false}
                            keyboardType={'number-pad'}
                            onChangeText={(phone)=>{
                                this.setState({
                                    phone:phone
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.student_email}
                            value={this.state.email}
                            autoCorrect={false}
                            editable={false}
                            keyboardType={'email-address'}
                            onChangeText={(email)=>{
                                this.setState({
                                    email:email
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInputAddress}
                            multiline={true} 
                            editable={false}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.student_address}
                            value={this.state.address}
                            onChangeText={(address)=>{
                                this.setState({
                                    address:address
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.student_country}
                            value={this.state.country}
                            editable={false}
                            onChangeText={(country)=>{
                                this.setState({
                                    country:country
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            editable={false}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.state}
                            value={this.state.state}
                            onChangeText={(state)=>{
                                this.setState({
                                    state:state
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={this.props.data.school}
                            value={this.state.school}
                            editable={false}
                            onChangeText={(school)=>{
                                this.setState({
                                    school:school
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#617177'}
                            placeholder={this.props.data.studentid}
                            value={this.state.sid}
                            editable={false}
                            onChangeText={(sid)=>{
                                this.setState({
                                    sid:sid
                                });
                            }}/>
                        <View style={styles.line}/>
                    </View>
                    <TouchableOpacity style={styles.saveView} 
                    onPress={this.onPress}>
                        <Text style={styles.saveText}>BACK</Text>
                    </TouchableOpacity>
                </ScrollView>
                }
            </View>
        );
    }
}

ProfileScreen.propTypes = {
    navigation: PropTypes.func,
    navigateToSignUp: PropTypes.func
};

export default ProfileScreen;
