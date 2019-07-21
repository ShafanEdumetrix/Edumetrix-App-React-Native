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
    checkBox:{
        flex: 1, 
        marginTop:10,
        padding: 10,
    },
    container: {
        flex: 1,
        margin:10
    },
    dotView:{
        backgroundColor:AppStyles.color.COLOR_GREY,
        borderRadius:2,
        height:4,
        marginBottom:4,
        marginHorizontal:4,
        width:4
    },
    images:{
        height: 80,
        marginTop:20,
        resizeMode: 'contain',
        width: 80
    },
    inputView:{
        marginTop:25
    },
    line:{
        backgroundColor:AppStyles.color.COLOR_DARK_SEPERATOR,
        height: 1,
        width: metrics.screenWidth - 30,
    },
    logoView:{
        alignItems:'center',
        justifyContent:'center'
    },
    startButton:{
        alignItems:'center',
        backgroundColor:'#3D94BE',
        borderRadius:30,
        height:60, 
        justifyContent:'center',  
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
        width: metrics.screenWidth - 30
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
    },
    rightText:{
        fontSize:11,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_PALE_SKY
    }
});

export default styles;
