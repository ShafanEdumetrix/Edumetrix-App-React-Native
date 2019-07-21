import React, { Component } from 'react';
import { View ,Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import CustomStatusBar from '../CustomStatusBar';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import Images from '../../config/images';
import AppStyles from '../../config/styles';
import * as loginActions from '../../actions/loginActions';
import { DrawerActions } from 'react-navigation';

class DrawerComponent extends Component {

    onPress=()=>{
        this.props.navigation.closeDrawer();
    }

    render(){
        return (
            <View style={styles.container}>
                <CustomStatusBar barStyle="dark-content" backgroundColor={AppStyles.color.COLOR_TRANSP}/>
                <View style={styles.closeView} >
                    <TouchableOpacity onPress={this.onPress}>
                        <Icon
                            name="close"
                            size={20}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                <Image
                    source={{uri: 'http://edumetrix.io/frontend/web/'+this.props.userData.student_photo}}
                    style={styles.circleView}/>
                    <Text style={styles.titleText}>{this.props.userData.student_fname}{' '}{this.props.userData.student_lname}</Text>
                    <View style={styles.textView}>
                    <TouchableOpacity style={styles.buttonTextView} onPress={()=>{ this.props.navigateToFollowersListPage();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                        }}>
                        <Text style={styles.textCount}>{this.props.userData.followers}</Text>
                        <Text style={styles.textFollow}>{' '}Follower</Text>
                        </TouchableOpacity>
                        <Text style={styles.lineText}>|</Text>
                        <TouchableOpacity style={styles.buttonTextView} onPress={()=>{ this.props.navigateToFollowingListPage();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                        }}>
                        <Text style={styles.textFollow}>{this.props.userData.followings}</Text>
                        <Text style={styles.textFollow}>{' '}Following</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textButtonView}>
                        <TouchableOpacity style={styles.buttonView} onPress={()=>{ this.props.navigateToEditProfileScreen();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                        }}>
                            <Text  style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigateToMyHomeScreen();
                            this.props.navigation.dispatch(DrawerActions.closeDrawer());
                        }} style={styles.buttonView}>
                            <Text  style={styles.buttonText}>My Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}/>
                <View style={styles.subContainerBottomView}>
                    <TouchableOpacity style={styles.iconTextView} onPress={()=>{
                        this.props.navigateToHomeScreen();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}>
                        <Image
                            source={Images.menu.home}
                            style={styles.iconStyle}/>
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTextView} onPress={()=>{
                        this.props.navigateToChatScreen();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}>
                        <Image
                            source={Images.menu.liveChat}
                            style={styles.iconStyle}/>
                        <Text style={styles.text}>Live Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTextView} onPress={()=>{
                        this.props.navigateToFindFriendsScreen();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}>
                        <Image
                            source={Images.menu.findFriend}
                            style={styles.iconStyle}/>
                        <Text style={styles.text}>Find Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTextView} onPress={()=>{
                        this.props.navigateToEarningScreen();
                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                    }}>
                        <Image
                            source={Images.menu.earnings}
                            style={styles.iconStyle}/>
                        <Text style={styles.text}>Earning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTextView} 
                        onPress={()=>{
                            this.props.navigateToProfileListScreen();
                            this.props.navigation.dispatch(DrawerActions.closeDrawer());
                        }}>
                        <Image
                            source={Images.menu.myprofile}
                            style={styles.iconStyle}/>
                        <Text style={styles.text}>My profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTextView}
                    onPress={()=>{
                        this.props.resetAllStates();
                        this.props.navigateToLogin();
                    }}>
                        <Image
                            source={Images.menu.logout}
                            style={styles.iconStyle}/>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomView}>
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
        );
    }
}

DrawerComponent.propTypes = {
    onDrawerPress: PropTypes.func,
    navigateToEditProfileScreen: PropTypes.func,
    navigateToFindFriendsScreen: PropTypes.func,
    navigateToChatScreen: PropTypes.func,
    navigateToEarningScreen: PropTypes.func,
    navigateToHomeScreen: PropTypes.func,
    navigation: PropTypes.func,
    navigateToProfileListScreen: PropTypes.func,
    navigateToMyHomeScreen: PropTypes.func

};

function mapStateToProps(state) {
    return {
        userData:state.userDetailsReducer.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToEditProfileScreen: () =>
            navigationActions.navigateToEditProfileScreen(),
        navigateToMyHomeScreen: () =>
            navigationActions.navigateToMyHomeScreen(),
        navigateToFindFriendsScreen: () =>
            navigationActions.navigateToFindFriendsScreen(),
        navigateToChatScreen: () =>
            navigationActions.navigateToChatScreen(),
        navigateToEarningScreen: () =>
            navigationActions.navigateToEarningScreen(),
        navigateToHomeScreen: () =>
            navigationActions.navigateToHomeScreen(),
        navigateToProfileListScreen: () =>
            navigationActions.navigateToProfileListScreen(),
        navigateToLogin: () =>
            navigationActions.navigateToLogin(),
        resetAllStates:()=>{
                dispatch(loginActions.resetAllStates());
            },
        navigateToPrivacyPolicyScreen: () =>
            navigationActions.navigateToPrivacyPolicyScreen(),
        navigateToTermsOfServicesScreen: () =>
            navigationActions.navigateToTermsOfServicesScreen(),
        navigateToDisclaimerScreen: () =>
            navigationActions.navigateToDisclaimerScreen(),
        navigateToFollowersListPage:()=>{
                navigationActions.navigateToFollowersListPage()
            },
        navigateToFollowingListPage:()=>{
                navigationActions.navigateToFollowingListPage()
            },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerComponent);
