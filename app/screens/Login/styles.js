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
        flexDirection: 'row',
        paddingVertical:8
    },
    iconView:{
        marginLeft: 15,
        paddingHorizontal: 5,
        resizeMode:'contain'
    },
    images:{
        resizeMode: 'contain',
        width:120,
        height:120
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_DARK_SEPERATOR,
        height: 1,
        width: metrics.screenWidth - 60,
    },
    logoView:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30
    },
    signinButton:{
        alignItems:'center',
        backgroundColor:'#3D94BE',
        borderRadius:30,
        height:60, 
        justifyContent:'center',  
        marginTop:40,
        marginVertical:12,
        width: metrics.screenWidth - 60,
    },
    signupButton:{
        alignItems:'center', 
        backgroundColor:'#617177',
        borderRadius:30,
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
    textSignin:{
        color:AppStyles.color.COLOR_WHITE,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18 
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
