import React, { Component } from 'react';
import { View, Text, Keyboard, Platform, Image, TouchableOpacity,FlatList, TextInput,SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Images from '../../config/images';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppStyles from '../../config/styles';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SignUpDetailsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            keyboardHeight: 0,
            isChecked:false,
            isDate: false,
            selectedDate: '',
            address:'',
            Country:'Country',
            state:'State',
            school:'',
            sid:'',
            isModalVisible: false,
            isStateModalVisible:false
        };
    }

    componentDidMount() {
        this.props.requestAllCountry();
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


    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    _toggleStateModal = () =>
        this.setState({ isStateModalVisible: !this.state.isStateModalVisible });

    _showDatePicker = () => this.setState({ isDate: true });

    _hideDatePicker = () => this.setState({ isDate: false });

    _handleDatePicked = date => {
        this.setState({
            selectedDate: moment(date).format('YYYY-MM-DD')
        }),
        this._hideDatePicker();
    };



    renderToolBar=()=>{
        return(
            <View style={styles.toolStyle}>
                <Text/>
                <Text style={styles.headText}>Country List</Text>
            </View>
        );
    }

    renderCountryToolBar=()=>{
        return(
            <View style={styles.toolStyle}>
                <Text/>
                <Text style={styles.headText}>State List</Text>
            </View>
        );
    }



    renderStateItem=({item})=>{
        return(
            <TouchableOpacity style={{padding:5}}
            onPress={()=>{
                this.setState({
                    state:item.name,
                    isStateModalVisible: !this.state.isStateModalVisible
                })
            }}
            >
            <Text style={styles.textName}>{item.name}
            </Text>
        </TouchableOpacity>
        )
    }

    renderItem=({item})=>{
        return(
            <TouchableOpacity style={{padding:5}}
            onPress={()=>{
                this.setState({
                    Country:item.name,
                    isModalVisible: !this.state.isModalVisible
                }),
                this.props.requestState(item.id)
            }}
            >
            <Text style={styles.textName}>{item.name}
            </Text>
        </TouchableOpacity>
        )
    }

    renderStateModal=()=>{
        return(
            <View>
                <Modal isVisible={this.state.isStateModalVisible} onBackdropPress={this._toggleStateModal}>
                    <View style={styles.modalView}>
                        {this.renderCountryToolBar()}
                        <FlatList
                          data={this.props.dataState}
                          renderItem={this.renderStateItem}
                          extraData={this.state}
                          keyExtractor={(item, index) => item + index}
                      />

                    </View>
                </Modal>
            </View>
        );
    }

    renderModal=()=>{
        return(
            <View>
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={this._toggleModal}>
                    <View style={styles.modalView}>
                        {this.renderToolBar()}
                        <FlatList
                          data={this.props.data}
                          renderItem={this.renderItem}
                          extraData={this.state}
                          keyExtractor={(item, index) => item + index}
                      />

                    </View>
                </Modal>
            </View>
        );
    }

    render() {
        const {username} =this.props.navigation.state.params
        const {password} =this.props.navigation.state.params
        const {mobilenumber} =this.props.navigation.state.params
        const {email} =this.props.navigation.state.params
        const {name} =this.props.navigation.state.params
        const {surname} =this.props.navigation.state.params

        return (
            <SafeAreaView style={styles.container}>
                <CustomStatusBar backgroundColor={AppStyles.color.COLOR_TRANSP} barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'>
                    <View style={styles.logoView}>
                        <Image
                            source={Images.icons.logo}
                            style={styles.images}/>
                    </View>
                    <View>
                        <Text style={styles.pleaseText}>Please complete the following steps</Text>
                        <TouchableOpacity onPress={this._showDatePicker} style={styles.dob}>
                            {this.state.selectedDate.length === 0 ?
                                <Text style={styles.dateText}>
                                   Date Of Birth
                                </Text>
                                :
                                <Text style={styles.dateText}>
                                    {this.state.selectedDate}
                                </Text>
                            }
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDate}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDatePicker}
                        />
                        <View style={styles.line}/>
                        <TextInput
                            style={styles.textInputAddress}
                            multiline={true}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={'#617177'}
                            placeholder={'Address'}
                            value={this.state.address}
                            onChangeText={(address)=>{
                                this.setState({
                                    address:address
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TouchableOpacity onPress={this._toggleModal} style={styles.textCountryInput}>
                            <Text style={styles.textInputView} >{this.state.Country}</Text>
                            <Icon
                                name="arrow-drop-down"
                                size={24}
                                color={'grey'}                       
                    />
                        </TouchableOpacity>
                        <View style={styles.line}/>
                        <TouchableOpacity onPress={this._toggleStateModal} style={styles.textCountryInput}>
                            <Text style={styles.textInputView}>{this.state.state}</Text>
                            <Icon
                                name="arrow-drop-down"
                                size={24}
                                color={'grey'}/>
                        </TouchableOpacity>
                        <View style={styles.line}/>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={'School'}
                            value={this.state.school}
                            onChangeText={(school)=>{
                                this.setState({
                                    school:school
                                });
                            }}/>
                        <View style={styles.line}/>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={'#617177'}
                            underlineColorAndroid="transparent"
                            placeholder={'Student ID'}
                            value={this.state.sid}
                            onChangeText={(sid)=>{
                                this.setState({
                                    sid:sid
                                });
                            }}/>
                        <View style={styles.line}/>
                    </View>
                    <TouchableOpacity style={styles.startButton} onPress={()=>{
                        {this.state.selectedDate.length === 0 || this.state.address.length === 0 || this.state.Country.length === 0 || this.state.state.length === 0 || this.state.school.length === 0 || this.state.sid.length === 0?
                            alert('Please Fill The Details'):
                        this.props.navigateToSignUpImageScreen({username:username,password:password,mobilenumber:mobilenumber,email:email,name:name,surname:surname,selectedDate:this.state.selectedDate,address:this.state.address,Country:this.state.Country,state:this.state.state,school:this.state.school,sid:this.state.sid});
                    }}}>
                        <Text style={styles.text}>NEXT</Text>
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
                            <Text style={styles.bottomText}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <View style={styles.dotView}/>
                        <TouchableOpacity
                        onPress={()=>{
                            this.props.navigateToTermsOfServicesScreen();
                        }}>
                            <Text style={styles.bottomText}>Terms Of Service</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {this.renderModal()}
                {this.renderStateModal()}
                <View style={{ height: this.state.keyboardHeight }} />
            </SafeAreaView>

        );
    }
}

SignUpDetailsScreen.propTypes = {
    navigateToSignUpImageScreen: PropTypes.func
};

export default SignUpDetailsScreen;
