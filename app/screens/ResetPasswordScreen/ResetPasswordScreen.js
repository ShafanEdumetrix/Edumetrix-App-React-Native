import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Keyboard, Platform,SafeAreaView } from 'react-native';
import styles from './styles';
import Images from '../../config/images';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppStyles from '../../config/styles';

class ResetPasswordScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            keyboardHeight:0
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
                            source={Images.login.email}
                            style={styles.iconView}/>
                        <TextInput   
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={'Enter your email id'}
                            value={this.state.email}
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            autoCapitalize={false}
                            onChangeText={(email)=>{
                                this.setState({
                                    email:email
                                });
                            }}/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.sendView}>
                        <TouchableOpacity style={styles.signinButton}
                            onPress={()=>{
                            this.props.requestForgotPassword(this.state.email)
                            }}>
                            <Text style={styles.text}>SEND PASSWORD</Text>
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
                </View>
                <View style={{ height: this.state.keyboardHeight }} />

            </SafeAreaView>
        );
    }
}

ResetPasswordScreen.propTypes = {
    
};

export default ResetPasswordScreen;
