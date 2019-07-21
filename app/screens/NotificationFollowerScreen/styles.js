import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({

    backText:{
        color:AppStyles.color.COLOR_WHITE,
        fontSize:13,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    backView:{
        alignSelf:'flex-end',
        backgroundColor:AppStyles.color.COLOR_BLACK,
        borderRadius:11,
        marginHorizontal:8,
        marginVertical:16,
        paddingHorizontal:14,
        paddingVertical:4
    },
    itemView:{
        marginVertical:3,
        marginHorizontal:5,
        padding:6
    },
    noData:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18,
        color:AppStyles.color.COLOR_BLACK
    },
    line:{
        width:metrics.screenWidth,
        height:1,
        backgroundColor:AppStyles.color.COLOR_GREY
    },
    loader:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:14,
        color:AppStyles.color.COLOR_SPACE
    }
});

export default styles;
