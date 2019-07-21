import { StyleSheet, Platform, StatusBar } from 'react-native';
import AppStyles from '../../config/styles';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: AppStyles.color.COLOR_BACK_TOOLBAR,
        height: APPBAR_HEIGHT
    },
    iOsStatusBar: {
        backgroundColor: AppStyles.color.COLOR_BACK_TOOLBAR,
        height: STATUSBAR_HEIGHT,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});

export default styles;
