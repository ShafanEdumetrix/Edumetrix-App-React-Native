import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,Keyboard, TextInput, Platform,SafeAreaView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Images from '../../config/images';
import AppStyles from '../../config/styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import Loader from "../../components/Loader/Loader";
import AsyncStorage from '@react-native-community/async-storage';

class LoginView extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            keyboardHeight: 0,
        };
    }

    componentDidMount() {
        AsyncStorage.removeItem('step2');
        AsyncStorage.removeItem('step3');
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <CustomStatusBar backgroundColor={AppStyles.color.COLOR_TRANSP} barStyle="dark-content" />
                <View style={styles.logoView}>
                    <Image
                        source={Images.icons.logo}
                        style={styles.images}/>
                    <Text style={styles.titleText}>EDUMETRIX</Text>
                </View>
                <View style={styles.textInputView}>
        <View style={styles.iconTextView}>
            <Image
                source={Images.login.user}
                style={styles.iconView}/>
            <TextInput   
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder={'Username'}
                placeholderTextColor={'#617177'}
                value={this.state.username}
                autoCapitalize={false}
                autoCorrect={false}
                keyboardType={'email-address'}
                onChangeText={(username)=>{
                    this.setState({
                        username:username
                    });
                }}/>
        </View>
        <View style={styles.line}/>
        <View style={styles.iconTextView}>
            <Image
                source={Images.login.password}
                style={styles.iconView}/>
            <TextInput   
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder={'Password'}
                value={this.state.password}
                secureTextEntry={true}
                placeholderTextColor={'#617177'}
                onChangeText={(password)=>{
                    this.setState({
                        password:password
                    });
                }}/>
        </View>
        <View style={styles.line}/>
        <TouchableOpacity style={styles.signinButton}
            onPress={()=>{
                this.props.requestLogin(this.state.username,this.state.password) 
                                   }}>
            <Text style={styles.textSignin}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={()=>{
            this.props.navigateToSignUp();
        }}>
            <Text style={styles.text}>Not yet an account? <Text style={styles.textSignin}>Sign up!</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={()=>{
            this.props.navigateToResetPasswordScreen();
        }}>
            <Text style={styles.bottomText}>Forgot password</Text>
        </TouchableOpacity>
        
    </View>
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
                <Text style={styles.bottomText}>Privacy Policy</Text>
            </TouchableOpacity>
            <View style={styles.dotView}/>
            <TouchableOpacity onPress={()=>{
                this.props.navigateToTermsOfServicesScreen();
            }}>
                <Text style={styles.bottomText}>Terms Of Service</Text>
            </TouchableOpacity>
        </View>
        <View style={{ height: this.state.keyboardHeight }} />
            {this.props.isLoginLoading && <Loader/>}
            </SafeAreaView>
        );
    }
}

LoginView.propTypes = {
    navigateToSignUp: PropTypes.func,
    navigateToResetPasswordScreen: PropTypes.func
};

export default LoginView;
