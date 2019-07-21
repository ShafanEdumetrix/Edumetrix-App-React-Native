import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

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
    container: {
        flex: 1
    },
    noData:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:18,
        color:AppStyles.color.COLOR_BLACK
    },
    loader:{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    headingView: {
        alignItems: 'flex-start',
        backgroundColor: AppStyles.color.COLOR_WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 22
    },
    payedText: { 
        alignItems: 'flex-start', 
        color: AppStyles.color.COLOR_GREEN,
        fontSize:14,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        flex: 1
    },
    payedView: {
        backgroundColor: AppStyles.color.COLOR_GREY_LIGHT_OPACITY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    pendingText: { 
        alignItems: 'flex-start', 
        color: AppStyles.color.COLOR_RED,
        flex: 1,
        fontSize:14,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    }, 
    pendingView: {
        backgroundColor: AppStyles.color.COLOR_TRANS_GREY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    subView:{
        padding:6
    },
    text: { 
        alignItems: 'flex-start',
        flex: 1,
        fontSize:14,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        color:AppStyles.color.COLOR_BLACK
    }
    
});

export default styles;
