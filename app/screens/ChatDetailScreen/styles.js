import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import Metrics from '../../config/metrics';

const styles = StyleSheet.create({
    circleView: {
        borderColor: AppStyles.color.COLOR_PRIMARY,
        borderRadius: 25,
        borderWidth: 2,
        height: 50,
        marginVertical: 6,
        width: 50,
    },
    container: {
        flex: 1,
        backgroundColor:AppStyles.color.COLOR_GREY_BACKGROUND
    },
    dateView:{
        alignItems:'center',
        flexDirection:'row'
    },
    receiverText:{
        color:AppStyles.color.COLOR_DARK_BLACK,
        fontSize:16,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    statusText:{
        color:AppStyles.color.COLOR_LIGHT_BLACK,
        fontSize:14,
        fontFamily:AppStyles.fonts.FONT_REGULAR
    },
    nameView: { 
        alignSelf: 'center',
        padding: 8  
    },
    subContainer: { flexDirection: 'row' },
    subView:{
        padding:10,
        justifyContent:'space-between',
        flex:1
    },
    textInput: {
        height: 45, 
        flex:1,
        color:AppStyles.color.COLOR_PALE_SKY,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:13
    },
    textInputView: {
        alignItems: 'center',
        backgroundColor: AppStyles.color.COLOR_WHITE,
        borderRadius: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        flex:1
    },
    send:{
        color:AppStyles.color.COLOR_BLACK,
        fontFamily:AppStyles.fonts.FONT_REGULAR,
        fontSize:16
    },
    titleRightView: {
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: AppStyles.color.COLOR_WHITE,
        borderRadius: 3,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        minHeight: 30,
        padding: 5
    },
    titleLeftView: {
        marginHorizontal: 5,
        marginTop: 5,
        backgroundColor: '#78BECA',
        borderRadius: 3,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        minHeight: 30,
        padding: 5
    },
    whiteTriangle: {
        marginLeft: 14,
        width: 0,
        height: 0,
        borderLeftWidth: 12,
        borderRightWidth: 12,
        borderBottomWidth: 12,
        borderStyle: 'solid',
        backgroundColor: AppStyles.color.COLOR_TRANSP,
        borderLeftColor: AppStyles.color.COLOR_TRANSP,
        borderRightColor: AppStyles.color.COLOR_TRANSP,
        borderBottomColor: AppStyles.color.COLOR_WHITE
    },
    blueTriangleView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
    },
    whiteTriangleView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end'
    },
    textDate: {
        padding: 5
    },
    itemView: { marginVertical: 8 },
    blueTriangle: {
        justifyContent: 'flex-end',
        marginRight: 14,
        width: 0,
        height: 0,
        borderLeftWidth: 12,
        borderRightWidth: 12,
        borderTopWidth: 12,
        borderStyle: 'solid',
        backgroundColor: AppStyles.color.COLOR_TRANSP,
        borderLeftColor: AppStyles.color.COLOR_TRANSP,
        borderRightColor: AppStyles.color.COLOR_TRANSP,
        borderTopColor: '#78BECA'
    },
    textTitle:{
        margin:7
    }
});

export default styles;
