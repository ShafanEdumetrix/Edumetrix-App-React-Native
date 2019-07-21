import React, { Component } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import AppStyles from '../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as navigationActions from '../actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';

class AdminVerificationPendingScreen extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }

    componentDidMount () {
        AsyncStorage.removeItem('step2');
        AsyncStorage.removeItem('step3');
    }

    backPress = () => {
        this.props.navigation.goBack(this.props.navigation.state.key);
    };


      render() {        
          return (
              <SafeAreaView style={{flex:1}}>
                <CustomStatusBar backgroundColor={AppStyles.color.COLOR_TRANSP}barStyle="dark-content" />
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{fontSize:16,fontFamily:AppStyles.fonts.FONT_REGULAR,color:AppStyles.color.COLOR_BLACK}}>
                        ADMIN VERIFICATION IS PENDING !!!
                    </Text>
                </View>
                <TouchableOpacity style={{
    alignSelf:'flex-end',
    backgroundColor: AppStyles.color.COLOR_BLACK,
    borderRadius: 18,
    justifyContent:'flex-end',
    marginHorizontal:16,
    marginVertical:30,
    paddingHorizontal:14,
    paddingVertical: 5,
}} onPress={()=>{
                    this.props.navigateToLogin()
                }}>
                <Text style={{fontSize:16,fontFamily:AppStyles.fonts.FONT_REGULAR,color:AppStyles.color.COLOR_WHITE,padding:5}}>LOGIN PAGE</Text>
                </TouchableOpacity>
              </SafeAreaView>
          );
      }
}


function mapStateToProps() {
    return {
    };
}
function mapDispatchToProps() {
    return {
        navigateToLogin: () =>
            navigationActions.navigateToLogin()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminVerificationPendingScreen);
