import { StyleSheet } from "react-native";
import AppStyles from "../../config/styles";
import metrics from "../../config/metrics";

const styles = StyleSheet.create({
  bottomView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 14
  },
  followersText:{
    fontSize:12,
    color:AppStyles.color.COLOR_SCARLET,
    fontFamily:AppStyles.fonts.FONT_REGULAR
},
  countryText:{
    width:metrics.screenWidth/2.2,
    fontSize:13,
    color:AppStyles.color.COLOR_ASH,
    fontFamily:AppStyles.fonts.FONT_REGULAR
},
searchView:{
  backgroundColor:'#E6E6E6',borderRadius:25,
  marginVertical:10,
  marginHorizontal:20,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
},
iconStyle:{paddingHorizontal:5},
textInputSearch:{
  height:40,paddingLeft:8,width:metrics.screenWidth-75,fontSize:16
},
  followersView:{
    flexDirection:'row',
    padding:3
},
  buttonView: {
    alignSelf: "flex-start",
    backgroundColor: AppStyles.color.COLOR_LIGHT_GREY,
    borderRadius: 14,
    marginVertical: 6,
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  followerText:{
    padding: 3,
    fontSize: 14,
    color: "#6FA8AB",
    fontFamily: AppStyles.fonts.FONT_REGULAR
  },
  stateText:{
    padding: 3,
    fontSize: 14,
    color: AppStyles.color.COLOR_GREY,
    fontFamily: AppStyles.fonts.FONT_REGULAR
  },
  nameText:{
    padding:3,
    width:metrics.screenWidth/2.2,
    fontSize:16,
    color:AppStyles.color.COLOR_DRAWER,
    fontFamily:AppStyles.fonts.FONT_REGULAR
},
  itemTextView: {
    justifyContent: "center",
    paddingHorizontal: 7
  },
  container: {
    flex: 1
  },
  imageText: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color: AppStyles.color.COLOR_BLACK,
    fontSize: 18,
    padding: 4,
    backgroundColor: AppStyles.color.COLOR_GREY,
    height: metrics.screenHeight / 3,
    width: metrics.screenWidth
  },
  reportText: {
    fontSize: 16,
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    padding: 8
  },
  renderModalView: { justifyContent: "center", alignItems: "flex-end" },
  modalView: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: AppStyles.color.COLOR_WHITE,
    justifyContent: "space-between",
    width: metrics.screenWidth / 2.5
  },
  menu: {
    top: metrics.screenHeight / 2 + 30
  },
  owner: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    color: AppStyles.color.COLOR_BLACK
  },
  time: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    color: AppStyles.color.COLOR_SPACE
  },
  noData: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 18,
    color: AppStyles.color.COLOR_BLACK
  },
  iconView: {
    paddingHorizontal: 4
  },
  image: {
    backgroundColor: AppStyles.color.COLOR_GREY,
    height: metrics.screenHeight / 3,
    width: metrics.screenWidth
  },
  images: {
    height: 25,
    paddingHorizontal: 4,
    resizeMode: "contain",
    width: 25
  },
  itemCircleView: {
    backgroundColor: AppStyles.color.COLOR_GREY,
    borderRadius: 22.5,
    height: 45,
    width: 45
  },
  itemView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18
  },
  line: {
    backgroundColor: AppStyles.color.COLOR_GREY,
    height: 1,
    width: metrics.screenWidth
  },
  lineText: {
    fontSize: 20
  },
  paddingText: {
    paddingLeft: 6
  },
  rowView: {
    alignItems: "center",
    flexDirection: "row"
  },
  textInput: {
    height: 70,
    marginLeft: 5,
    width: metrics.screenWidth - 90
  },
  textInputView: {
    justifyContent: "center",
    paddingHorizontal: 5
  },
  textView: {
    justifyContent: "center",
    paddingHorizontal: 12
  },
  topView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 16
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#6FA8AB"
  },
  subItemView: {
    flexDirection: "row"
  },
  itemView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 22
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
