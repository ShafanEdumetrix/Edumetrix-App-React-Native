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
        flex: 1,
        margin:10
    },
    dateText:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15
    },
    dob:{
        marginVertical:15
    },
    dotView:{
        backgroundColor:AppStyles.color.COLOR_GREY,
        borderRadius:2,
        height:4,
        marginBottom:4,
        marginHorizontal:4,
        width:4
    },
    pleaseText:{
        fontSize:13,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_PALE_SKY
    },
    images:{
        height: 40,
        marginTop:20,
        resizeMode: 'contain',
        width: 40
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_DARK_SEPERATOR,
        height: 1,
        width: metrics.screenWidth - 30,
    },
    logoView:{
        alignItems:'flex-end',
        justifyContent:'center'
    },
    startButton:{
        alignItems:'center',
        backgroundColor:'#3D94BE',
        borderRadius:30,
        height:60, 
        justifyContent:'center', 
        marginTop:30, 
        marginVertical:12,
        width: metrics.screenWidth - 30
    },
    headText:{
        color:AppStyles.color.COLOR_BLACK,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:16
    },
    iconStyle:{
        position:'absolute',
        top:0,
        right:0
    },
    modalView:{
        backgroundColor:AppStyles.color.COLOR_WHITE,
        borderRadius:6,
        marginHorizontal:5,
        marginVertical:12

    },
    text:{
        color:AppStyles.color.COLOR_WHITE,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15
    },
    textName:{
        color:AppStyles.color.COLOR_BLACK,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:16
    },
    bottomText:{
        color:AppStyles.color.COLOR_ALUMINIUM,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:13
    },
    toolStyle:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding:5
    },
    textInput:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15,
        height: 50,
        width: metrics.screenWidth - 30
    },
    textInputView:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15,
        width: metrics.screenWidth - 60
    },
    textCountryInput:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15,
        width: metrics.screenWidth - 60,
        paddingVertical:15,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    textModalInput:{
        height: 50,
        width: metrics.screenWidth - 60,
        justifyContent:'center',
        alignItems:'center'
    },
    textInputAddress:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15,
        height: 120,
        width: metrics.screenWidth - 30,
        textAlignVertical: 'top',
        paddingVertical:6
    }
});

export default styles;
