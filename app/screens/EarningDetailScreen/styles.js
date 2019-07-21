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
    countView: { 
        alignItems: 'center',
        flex: 1, 
        justifyContent: 'center' 
    },
    itemPaidView: {
        backgroundColor: '#E5E6E8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    itemView: {
        backgroundColor: "#D0D4D7",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    subView: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        flex: 1,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:14,
        color:AppStyles.color.COLOR_BLACK
    },
    textHead: {
        flex: 1,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:17,
        color:AppStyles.color.COLOR_BLACK
    },
    textLike:{
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:14,
        color:AppStyles.color.COLOR_BLACK
    }
});

export default styles;
