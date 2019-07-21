import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  mainView:{
    position: "absolute",
    // height: Constants.SCREEN_HEIGHT,
    // width: Constants.SCREEN_WIDTH,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(110,110,110,0.5)"
  },
  subView:{
    width: 100,
    height: 100,
    backgroundColor: "transparent", //"rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden"
  },
  text:{
     fontSize: 12, 
     color:'#fff',
     fontWeight:'500',
     fontFamily:AppStyles.fonts.FONT_REGULAR
  }
});

export default styles;
