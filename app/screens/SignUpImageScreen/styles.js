import { StyleSheet } from 'react-native';
import  metrics  from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    absoluteView:{
        bottom: 1,
        left: 5,
        position: 'absolute'
    },
    bottomView:{        
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:8,
        marginHorizontal:12
    },
    boxView:{
        flexDirection:'row'
    },
    checkBox:{
        flex: 1, 
        marginTop:10,
        padding: 10,
    },
    container: {
        flex: 1,
        margin:15
    },
    pleaseText:{
        fontSize:13,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_PALE_SKY
    },
    dotView:{
        backgroundColor:AppStyles.color.COLOR_GREY,
        borderRadius:2,
        height:4,
        marginBottom:4,
        marginHorizontal:4,
        width:4
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
    images:{
        height: 40,
        marginTop:20,
        resizeMode: 'contain',
        width: 40
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_DARK_SEPERATOR,
        height: 1,
        width: metrics.screenWidth - 40,
    },
    logoView:{
        alignItems:'flex-end',
        justifyContent:'center'
    },
    loader:{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    startButton:{
        alignItems:'center',
        backgroundColor:'#3D94BE',
        borderRadius:25,
        height:60, 
        justifyContent:'center', 
        marginTop:30, 
        marginVertical:12,
        width: metrics.screenWidth - 30
    },
    text:{
        color:AppStyles.color.COLOR_WHITE,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15
    },
    textInput:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:15,
        height: 50,
        width: metrics.screenWidth - 60
    },
    textInputAddress:{
        fontSize: 15,
        height: 120,
        width: metrics.screenWidth - 60
    },
    textView:{
        paddingTop:20
    },
    titleText:{
        paddingTop:14
    },
    bottomText:{
        color:AppStyles.color.COLOR_ALUMINIUM,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:13
    },
    subText:{
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:13
    }
});

export default styles;
