import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
    circleView:{
        borderColor:AppStyles.color.COLOR_PRIMARY,
        borderRadius:30,
        borderWidth:2,
        height:60,
        width:60    
    },
    container: {
        backgroundColor:AppStyles.color.COLOR_BACKGROUND,
        flex: 1
    },
    searchView:{
        backgroundColor:'#6a6e79',borderRadius:25,
        marginLeft:12,
        marginRight:12,
        marginTop:28,
        marginBottom:28,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      iconStyle:{margin:10},
      textInputSearch:{
        height:40,paddingLeft:8,width:metrics.screenWidth-75,fontSize:16,color:AppStyles.color.COLOR_WHITE
      },
    itemTextView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:7
    },
    itemView:{
        flexDirection:'row',
        margin:12
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
    line:{
            borderStyle: 'dotted',
            borderWidth: 1,
            borderRadius: 1   
    },
    nameText:{
        color: AppStyles.color.COLOR_WHITE,
        padding:3,
        fontSize:16,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    nameStatusText:{
        color: AppStyles.color.COLOR_WHITE,
        padding:3,
        fontSize:12,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    timeText:{
        color: AppStyles.color.COLOR_ASH_LIGHT,
        padding:3,
        fontSize:14,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    userImage:{
        height:54,
        width:54,
        borderRadius:27,
        borderWidth: 2,
        borderColor: AppStyles.color.COLOR_GREY
    }
});

export default styles;
