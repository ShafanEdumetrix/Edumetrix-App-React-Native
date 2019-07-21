import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    absoluteView:{
        bottom: 1,
        left: 5,
        position: 'absolute'
    },
    boxView:{
        flexDirection:'row'
    },
    container: {
        flex: 1
    },
    dateText:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontSize:15,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    selectedDate:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontSize:15,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    dob:{
        marginVertical:15
    },
    imageBox:{
        alignItems:'center',
        backgroundColor: AppStyles.color.COLOR_GREY_WHITE,
        height: metrics.screenHeight/5,
        justifyContent:'center',
        marginRight:10,
        marginVertical: 10,
        width: metrics.screenWidth/2.5
    },
    imageView:{
        height: metrics.screenHeight/5,
        marginRight:10,
        marginVertical: 10,
        resizeMode:'cover',
        width: metrics.screenWidth/2.5
    },
    inputView:{
        marginHorizontal:20,
        marginTop:25,
    },
    loaderNoData:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    noData:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18,
        color:AppStyles.color.COLOR_BLACK
    },
    loader:{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_DARK_SEPERATOR,
        height: 1,
        width: metrics.screenWidth - 40,
    },
    photoText:{
        color:AppStyles.color.COLOR_DARK,
        fontSize:13,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    saveText:{
        color:AppStyles.color.COLOR_WHITE,
        fontSize:13,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    saveView:{
        alignSelf:'flex-end',
        backgroundColor: AppStyles.color.COLOR_BLACK,
        borderRadius: 18,
        justifyContent:'flex-end',
        marginHorizontal:16,
        marginVertical:30,
        paddingHorizontal:14,
        paddingVertical: 5,
    },
    subContainer:{
        marginHorizontal:20
    },
    textInput:{
        fontSize: 15,
        height: 50,
        width: metrics.screenWidth - 40,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_PALE_SKY
    },
    textInputAddress:{
        fontSize: 15,
        height: 120,
        width: metrics.screenWidth - 60,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_PALE_SKY,
        textAlignVertical: 'top'
    },
    textView:{
        paddingTop:20
    }
});

export default styles;
