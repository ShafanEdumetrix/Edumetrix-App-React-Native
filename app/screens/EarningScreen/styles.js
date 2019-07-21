import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import  metrics  from '../../config/metrics';

const styles = StyleSheet.create({
    bottomView:{
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end'
    },
    referText:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15,
        color:AppStyles.color.COLOR_BLACK
    },
    nameText:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:11,
        color:AppStyles.color.COLOR_BLACK
    },
     noData:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18,
        color:AppStyles.color.COLOR_BLACK
    },
    buttonBottomView:{
        alignItems:'center',
        backgroundColor:'#3A3E47',
        borderRadius:25,
        height:40, 
        justifyContent:'center',  
        marginVertical:5,
        padding:8,
        width: metrics.screenWidth - 60,
    },
    buttonView:{
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_BLACK,
        borderRadius:8,
        justifyContent:'center',
        marginHorizontal:5,
        paddingHorizontal:8,
        paddingVertical:4
    },
    container: {
        flex: 1
    },
    copyText:{
        color:AppStyles.color.COLOR_WHITE,
        fontSize:13,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    detailView:{
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_GREYISH,
        flexDirection:'row',
        justifyContent:'center',
        padding:8
    },
    iconStyle:{
        paddingLeft:24
    },
    iconView:{
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_WHITE,
        flexDirection:'row',
        height:metrics.screenHeight/6,
        justifyContent:'space-between',
        marginHorizontal:8
    },
    imageView:{
        alignItems:'center',
        flexDirection:'row',
    },
    images:{
        height:20,
        padding:5,
        resizeMode:'contain',
        width:20
    },
    modalView:{
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_WHITE,
        borderRadius:6,
        justifyContent:'space-between'
    },
    progressView:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    submitButton:{
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_BLACK,
        borderRadius:14,
        justifyContent:'center',
        marginHorizontal:5,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4 
    },
    text:{
        color: AppStyles.color.COLOR_DARK_GREEN,
        padding:5,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:20
    },
    fullText:{
        color: AppStyles.color.COLOR_DARK,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15
    },
    nestedText:{
        color: AppStyles.color.COLOR_DARK_GREEN,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:14
    },
    textButon:{
        color:AppStyles.color.COLOR_WHITE,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:13
    },
    textButtonView:{
        flexDirection:'row',
        paddingVertical:12,
        alignItems:'center'
    },
    loader:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    noData:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18,
        color:AppStyles.color.COLOR_BLACK
    },
    textEmc:{
        padding:5,
        color:AppStyles.color.COLOR_LIGHT,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:14
    },
    headText:{
        color:AppStyles.color.COLOR_BLACK,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18
    },
    submitText:{
        color:AppStyles.color.COLOR_WHITE,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:16
    },
    textEmcView:{
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        marginRight:5
    },
    textInput:{
        height: 40,
        marginLeft:7,
        width: metrics.screenWidth - 60,
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15
    },
    toolStyle:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:6
    },
    topView:{
        backgroundColor:AppStyles.color.COLOR_GREYISH,
        padding:10
    }
});

export default styles;
