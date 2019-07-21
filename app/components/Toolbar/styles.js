import { StyleSheet, Platform, StatusBar } from 'react-native';
import Metrics from '../../config/metrics';
import AppStyles from '../../config/styles';
import { isIphoneX } from '../../lib/isIphoneX';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? (isIphoneX() ? 66 : 44) : 56;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyles.color.COLOR_TOOLBAR,
        flexDirection: 'row',
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        width: Metrics.screenWidth,
    },
    iconView:{
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        height: 20,
        marginLeft: 15,
        width: 20,
    },
    imageCal: {
        height: 20,
        marginRight: 15,
        width: 20,
    },
    linearGradient: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        justifyContent: 'center',
        paddingTop: STATUSBAR_HEIGHT / 2,
    },
    text: {
        color: AppStyles.color.COLOR_WHITE,
        fontFamily: AppStyles.fonts.FONT_LIGHT,
        fontSize: 20,
    },
    titleView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    toolBar: {
        alignItems:'center',
        backgroundColor:AppStyles.color.COLOR_GREY_WHITE,
        flexDirection:'row',
        height: isIphoneX() ? 72 : 56,
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
});

export default styles;
