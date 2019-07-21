import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
   text:{
       fontFamily:AppStyles.fonts.FONT_REGULAR,
       fontSize:15,
       color:AppStyles.color.COLOR_BLACK
   },
   saveText:{
    color:AppStyles.color.COLOR_WHITE,
    fontSize:13,
    fontFamily:AppStyles.fonts.FONT_REGULAR
},
noData:{
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    fontSize:18,
    color:AppStyles.color.COLOR_BLACK
},
subView:{
    justifyContent:'space-between',flex:1
},
textView:{
    padding:5
},
postView:{
    alignSelf:'flex-end',
    borderRadius: 18,
    justifyContent:'flex-end',
    marginHorizontal:16,
    marginVertical:3,
    paddingHorizontal:14,
    paddingVertical: 4,
    backgroundColor:'#78BECA'
},
loader:{
       flex:1,
        alignItems: "center",
        justifyContent: "center"
},
container: {
    flex: 1,
    backgroundColor:AppStyles.color.COLOR_GREY_BACKGROUND
},
heading:{
    justifyContent:'center',
    alignItems:'center',
    padding:5
},
headingText:{
    fontSize:18,
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    color:AppStyles.color.COLOR_BLACK
},
headerView:{
    flexDirection:'row',
    height:metrics.screenHeight/6,
    padding:8
},
userImage:{
    height:44,
    width:44,
    borderRadius:22
},
itemView:{
    padding:6
},
textInput:{
    height:60,
    marginLeft:5,
    width: metrics.screenWidth - 90,
    color:AppStyles.color.COLOR_PALATEE,
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    fontSize:14,
    textAlignVertical: 'top',
    padding:5
},
textInputView:{
    backgroundColor: AppStyles.color.COLOR_WHITE,
    marginLeft:6,
    borderRadius:20

},
textViewItem:{justifyContent:'flex-end',flexDirection:'row',padding:5,alignItems:'center'},
ownerText:{
    fontSize:15,
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    color:AppStyles.color.COLOR_BLACK
},
comment:{
    fontSize:12,
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    color:AppStyles.color.COLOR_LIGHT_BLACK,
    width:metrics.screenWidth/2 + 40
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
