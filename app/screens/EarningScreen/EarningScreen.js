import React, { Component } from 'react';
import { View, Text, Share, TouchableOpacity, ActivityIndicator, Image,TextInput, Platform, Clipboard, Keyboard } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar/Toolbar';
import Images from '../../config/images';
import Modal from 'react-native-modal'; 
import * as Progress from 'react-native-progress';
import metrics from '../../config/metrics';

class EarningScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalVisible: false,
            accountName:'',
            accountNumber:'',
            ifscCode:'',
            keyboardHeight:0,
            branch:'',
            bankName:''
        };
    }


    componentDidMount() {
        this.props.requestEarningsList(this.props.token);
        this.props.requestAllPayment(this.props.token);
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

    sharePress = () => {
        Share.share(
            {
                message:
                    'Found this useful link for you : https://www.edumetrix.io/site/signup',
                url: 'https://www.edumetrix.io/site/signup',
                title: 'EduMetrix - Learn More To Earn More'
            },
            {
               
            }
        );
    };


    onDrawerPress=()=>{
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    onSubmitPress = ()=>{
        this.props.addBankRequest(this.props.token,this.state.bankName,this.state.branch,this.state.ifscCode,this.state.accountNumber,this.state.accountName)
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }


    onRequestPress=()=>{
        this.props.requestPayment(this.props.token,100);
    }

    renderToolBar=()=>{
        return(
            <View style={styles.toolStyle}>
                <Text/>
                <Text style={styles.headText}>ACCOUNT DETAILS</Text>
            </View>
        );
    }

    renderModal=()=>{
        return(
            <View>
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={this._toggleModal}>
                    <View style={styles.modalView}>
                        {this.renderToolBar()}
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholder={'Account Holder Name'}
                            placeholderTextColor={'#617177'}
                            value={this.state.accountName}
                            onChangeText={(accountName)=>{
                                this.setState({
                                    accountName:accountName
                                });
                            }}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholder={'Account Number'}
                            placeholderTextColor={'#617177'}
                            value={this.state.accountNumber}
                            onChangeText={(accountNumber)=>{
                                this.setState({
                                    accountNumber:accountNumber
                                });
                            }}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholder={'Bank Name'}
                            placeholderTextColor={'#617177'}
                            value={this.state.bankName}
                            onChangeText={(bankName)=>{
                                this.setState({
                                    bankName:bankName
                                });
                            }}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholder={'Branch'}
                            placeholderTextColor={'#617177'}
                            value={this.state.branch}
                            onChangeText={(branch)=>{
                                this.setState({
                                    branch:branch
                                });
                            }}/>
                        <TextInput   
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            placeholder={'IFSC CODE'}
                            placeholderTextColor={'#617177'}
                            value={this.state.ifscCode}
                            onChangeText={(ifscCode)=>{
                                this.setState({
                                    ifscCode:ifscCode
                                });
                            }}/>
                        <TouchableOpacity onPress={this.onSubmitPress} style={styles.submitButton}>
                            <Text style={styles.submitText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }

    setClipboardContent = (msg) => {
        Clipboard.setString(msg);
    };

    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <Toolbar onDrawerPress={this.onDrawerPress}/>
                {this.props.isEarningsListLoading?
                <View style={styles.loader}> 
                    <ActivityIndicator size="large" color="grey" />
               </View>:
               this.props.data.length===0?
               <View style={styles.loader}> 
               <Text style={styles.noData}>NO DATA AVAILABLE</Text>
               </View>:
                <View style={styles.container}>
                <View style={styles.topView}>
                    <Text style={styles.referText}>Refer your friends and earn more coins</Text>
                    <View style={styles.textButtonView}>
                        <Text style={styles.nameText}>{data.student_referrallink}</Text>
                        <TouchableOpacity style={styles.buttonView}
                            onPress={()=>this.setClipboardContent(data.student_referrallink)}>
                            <Text style={styles.copyText}>COPY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonView}
                            onPress={this.sharePress}>
                            <Text style={styles.copyText}>SHARE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.iconView}>
                    <View style={styles.imageView}>
                        <Image
                            source={Images.icons.coin}
                            style={styles.images}/>
                        <Text style={styles.text}>{data.total_coins} <Text style={styles.nestedText}>Coins</Text></Text>  
                    </View>
                    <View style={styles.imageView}>
                        <Image
                            source={Images.icons.like}
                            style={styles.images}/>
                        <Text style={styles.text}>{data.total_likes} <Text style={styles.nestedText}>Likes</Text></Text>
                    </View>
                    <View style={styles.imageView}>
                        <Image
                            source={Images.icons.refer}
                            style={styles.images}/>
                        <Text style={styles.text}>{data.total_refferals} <Text style={styles.nestedText}>Refers</Text></Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.detailView}
                    onPress={()=>{
                        this.props.navigateToEarningDetailScreen({item:this.props.data});
                    }}>
                    <Text style={styles.fullText}>View Full Details</Text>  
                </TouchableOpacity>
                <View style={styles.progressView}>
                    <Progress.Bar progress={this.props.data.payment_threshold_percentage/100} width={metrics.screenWidth-20} height={30} color="#DEDFE2" />
                    <View style={styles.textEmcView}>
                        <Text style={styles.textEmc}>Payment Threshold: EMC 100.00</Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                {this.props.data.payment_threshold_percentage === 100 &&
                    <TouchableOpacity style={styles.buttonBottomView}
                        onPress={this.onRequestPress}>
                        <Text style={styles.textButon}>
                            Request Payment
                        </Text>
                    </TouchableOpacity>}
                    <TouchableOpacity style={styles.buttonBottomView}
                        onPress={()=>{
                            this.props.navigateToEarningPaymentDetailsScreen();
                        }}>
                        <Text style={styles.textButon}>
                            View Payed Details
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBottomView} onPress={this._toggleModal}>
                        <Text style={styles.textButon}>
                            Set Bank Account Details
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>}
                {this.renderModal()}
                <View style={{ height: this.state.keyboardHeight }} />
            </View>
        );
    }
}

EarningScreen.propTypes = {
    navigation: PropTypes.func,
    navigateToEarningDetailScreen: PropTypes.func,
    navigateToEarningPaymentDetailsScreen: PropTypes.func
};

export default EarningScreen;
