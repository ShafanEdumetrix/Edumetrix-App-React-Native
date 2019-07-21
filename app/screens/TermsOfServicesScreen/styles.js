import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
   text:{
       fontFamily:AppStyles.fonts.FONT_REGULAR,
       fontSize:15,
       color:AppStyles.color.COLOR_BACKGROUND
   },
   saveText:{
    color:AppStyles.color.COLOR_WHITE,
    fontSize:13,
    fontFamily:AppStyles.fonts.FONT_REGULAR
},
textView:{
    padding:5
},
heading:{
    justifyContent:'center',
    alignItems:'center',
    padding:5
},
container:{
    marginHorizontal:8
},
headingText:{
    fontSize:22,
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    color:AppStyles.color.COLOR_BLACK
},
saveView:{
    alignSelf:'flex-end',
    backgroundColor: AppStyles.color.COLOR_BLACK,
    borderRadius: 18,
    justifyContent:'flex-end',
    marginHorizontal:16,
    marginVertical:30,
    paddingHorizontal:14,
    paddingVertical: 5,
}
});

export default styles;
