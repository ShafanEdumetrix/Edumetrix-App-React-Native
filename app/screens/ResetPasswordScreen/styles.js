import { StyleSheet } from 'react-native';
import  metrics  from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    bottomView:{        
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:8,
        marginHorizontal:12
    },
    container: {
        flex: 1
    },
    dotView:{
        backgroundColor:AppStyles.color.COLOR_GREY,
        borderRadius:2,
        height:4,
        marginBottom:4,
        marginHorizontal:4,
        width:4
    },
    forgotButton:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconTextView:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconView:{
        marginLeft: 15,
        paddingHorizontal: 5,
        resizeMode:'contain'
    },
    images:{
        height:80,
        resizeMode: 'contain',
        width:80
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_DARK_SEPERATOR,
        height: 1,
        width: metrics.screenWidth - 60,
    },
    logoView:{
        alignItems: 'center',
        flex: 0.4,
        justifyContent: 'center'
    },
    sendView:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    signinButton:{
        alignItems:'center',
        backgroundColor:'#3D94BE',
        borderRadius:25,
        height:60, 
        justifyContent:'center',  
        marginVertical:12,
        width: metrics.screenWidth - 60,
    },
    signupButton:{
        alignItems:'center', 
        backgroundColor:AppStyles.color.COLOR_SIGNUP,
        borderRadius:25,
        height:60,
        justifyContent:'center',
        marginVertical:12,
        width: metrics.screenWidth - 60
    },
    text:{
        color:AppStyles.color.COLOR_WHITE,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15
    }, 
    textInput:{
        height: 40,
        marginLeft:7,
        width: metrics.screenWidth - 60,
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:16
    },
    textInputView:{
        alignItems: 'center',
        flex: 0.6,
        justifyContent: 'center'
    },
    titleText:{
        paddingTop:14,
        fontSize:14,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_SPACE
    },
    bottomText:{
        color:AppStyles.color.COLOR_ALUMINIUM,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:13
    }
});

export default styles;
 