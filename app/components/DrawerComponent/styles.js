import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
    buttonText: {
        color: AppStyles.color.COLOR_LIGHT_WHITE,
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:14
    },
    buttonView: {
        borderColor: AppStyles.color.COLOR_GREY,
        borderRadius: 16,
        borderWidth: 1,
        marginHorizontal: 5
    },
    buttonTextView: {
        borderColor: AppStyles.color.COLOR_GREY,
        borderRadius: 16,
        borderWidth: 1,
        marginHorizontal: 5,
        flexDirection:'row',
        padding:7
    },
    bottomText:{
        color:AppStyles.color.COLOR_ALUMINIUM,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:12
    },
    bottomView:{        
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:8,
        marginHorizontal:12
    },
    dotView:{
        backgroundColor:AppStyles.color.COLOR_GREY,
        borderRadius:2,
        height:4,
        marginBottom:4,
        marginHorizontal:4,
        width:4
    },
    circleView: {
        borderColor: AppStyles.color.COLOR_WHITE,
        borderRadius: 70,
        borderWidth:5,
        height: 140,
        width: 140
    },
    closeView: {
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_GREY_TRANSP,
        borderRadius: 15,
        height:30,
        justifyContent:'center',
        position: 'absolute',
        right: 30,
        top: 30,
        width: 30,
        zIndex: 1,
 
    },
    container: {
        backgroundColor: AppStyles.color.COLOR_DRAWER,
        flex: 1
    },
    iconStyle: {
        paddingHorizontal:30,
        resizeMode:'contain',
        width:19,
        height:19
    },
    iconTextView: {
        alignItems:'center',
        flexDirection:'row',
        padding:12,
    },
    images:{
        resizeMode:'stretch'
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_BLACK,
        height:1,
        width:metrics.screenWidth-70
    },
    lineText:{
        color: AppStyles.color.COLOR_WHITE,
        marginHorizontal: 5,
        fontSize:24
    },
    subContainer:{
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'center'
    },
    subContainerBottomView:{
        alignSelf:'center',
        flex: 0.5
    },
    text:{
        color: AppStyles.color.COLOR_WHITE,
        fontSize:16,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    textFollow:{
        color: AppStyles.color.COLOR_WHITE,
        fontSize:15,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    textBottom:{
        color: AppStyles.color.COLOR_WHITE
    },
    textButtonView: {
        flexDirection: 'row',
        marginVertical: 5
    },
    textCount: {
        color: AppStyles.color.COLOR_COUNT,
        fontSize:15,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    textView: {
        flexDirection: 'row',
        marginVertical: 8
    },
    titleText:{
        color: AppStyles.color.COLOR_WHITE,
        marginTop: 22,
        fontSize:21,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    }
});

export default styles;
