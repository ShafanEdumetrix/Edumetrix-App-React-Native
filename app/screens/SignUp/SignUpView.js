import React, { Component } from 'react';
import { View, Text, Keyboard, Platform, Image, TouchableOpacity, TextInput, ScrollView,SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Images from '../../config/images';
import CheckBox from 'react-native-check-box';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppStyles from '../../config/styles';


class SignUpView extends Component {
    constructor(props){
        super(props);
        this.state={
            keyboardHeight: 0,
            isChecked:false,
            username:'',
            password:'',
            mobilenumber:'',
            email:'',
            name:'',
            surname:''
        };
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = e => {
        if (Platform.OS === 'android') {
            return;
        }
        this.setState({
            keyboardHeight: e.endCoordinates.height
        });
    };

    _keyboardDidHide = () => {
        this.setState({
            keyboardHeight: 0
        });
    };

onSignInPress=()=>{
    let re = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(this.state.username.length === 0 || this.state.password.length === 0 || this.state.mobilenumber.length === 0 || this.state.name.length === 0 || this.state.email.length === 0 || this.state.surname.length === 0){
    alert('Please Fill The Details')

}
else if(!this.state.isChecked){
    alert('Please Accept Terms And Conditions')}
    else if(re.test(this.state.email) === false){
        alert('Please Enter Valid Email Address')

    }
    else if(this.state.mobilenumber.length<10){
        alert('Please Enter Valid Mobile Number')

    }
    else
        this.props.navigateToSignUpDetailsScreen({username:this.state.username,password:this.state.password,mobilenumber:this.state.mobilenumber,email:this.state.email,name:this.state.name,surname:this.state.surname});
    
    
}




    render() { 
        return (
            <SafeAreaView style={styles.container}>
                <CustomStatusBar backgroundColor={AppStyles.color.COLOR_TRANSP}barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'>
                    <View style={styles.logoView}>
                        <Image
                            source={Images.icons.logo}
                            style={styles.images}/>
                        <Text style={styles.titleText}>EDUMETRIX</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#617177'}
                            placeholder={'Username'}
                            value={this.state.username}
                            autoCapitalize={false}
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            onChangeText={(username)=>{
                                this.setState({
                                    username:username
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={'Password'}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={(password)=>{
                                this.setState({
                                    password:password
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#617177'}
                            placeholder={'Mobile Number'}
                            value={this.state.mobilenumber}
                            keyboardType={"number-pad"}
                            onChangeText={(mobilenumber)=>{
                                this.setState({
                                    mobilenumber:mobilenumber
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput 
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"  
                            placeholder={'Email'}
                            value={this.state.email}
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            onChangeText={(email)=>{
                                this.setState({
                                    email:email
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent" 
                            placeholder={'Name'}
                            value={this.state.name}
                            placeholderTextColor={'#617177'}
                            onChangeText={(name)=>{
                                this.setState({
                                    name:name
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput 
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"  
                            placeholder={'Surname'}
                            value={this.state.surname}
                            onChangeText={(surname)=>{
                                this.setState({
                                    surname:surname
                                });
                            }}/>
                        <View style={styles.line}/>
                    </View>
                    <CheckBox
                        style={styles.checkBox}
                        onClick={()=>{
                            this.setState({
                                isChecked:!this.state.isChecked
                            });
                        }}
                        isChecked={this.state.isChecked}
                        rightText={'I read and agree to Terms & Conditions'}
                        rightTextStyle={this.rightText}
                    />
                    <TouchableOpacity style={styles.startButton} onPress={()=>{this.onSignInPress()}}>
                        <Text style={styles.text}>GET STARTED</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                    <TouchableOpacity onPress={()=>{ this.props.navigateToAboutUsScreen()}}>
                <Text style={styles.bottomText}>About Us</Text>
            </TouchableOpacity>
            <View style={styles.dotView}/>
                    <TouchableOpacity onPress={()=>{ this.props.navigateToDisclaimerScreen()}}>
                            <Text style={styles.bottomText}>Disclaimer</Text>
                        </TouchableOpacity>
                        <View style={styles.dotView}/>
                        <TouchableOpacity onPress={()=>{ this.props.navigateToPrivacyPolicyScreen()}}>
                            <Text  style={styles.bottomText}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <View style={styles.dotView}/>
                        <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigateToTermsOfServicesScreen();
                        }}>
                            <Text  style={styles.bottomText}>Terms Of Service</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ height: this.state.keyboardHeight }} />
            </SafeAreaView>
               
        );
    }
}

SignUpView.propTypes = {
    navigateToSignUpDetailsScreen: PropTypes.func
};

export default SignUpView;
