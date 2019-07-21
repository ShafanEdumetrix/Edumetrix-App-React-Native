import { StyleSheet } from "react-native";
import metrics from "../../config/metrics";
import AppStyles from "../../config/styles";

const styles = StyleSheet.create({
  bottomView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:15,
    marginTop:15
  },
  container: {
    flex: 1
  },
  profileTextImage:{
    fontSize:12,
    paddingHorizontal:2,
    fontFamily:AppStyles.fonts.FONT_REGULAR,
    color:AppStyles.color.COLOR_BLACK,
    width:metrics.screenWidth/2
  },
  headerView: {
    flex:1,
    padding:10
  },
  imageTextView: {
    flexDirection: "row"
  },
  imageUploadedView: {
    borderRadius:4,
    marginLeft:10,
    flex:1,
  },
  uploadText: {
    fontSize: 14,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color:'#fff',
    margin:2,
    textAlign:'center'
  },
  reportText: {
    fontSize: 16,
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    padding: 8
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_GREY,
    borderRadius: 18,
    justifyContent: "center",
    width: metrics.screenWidth / 3,
    flex: 1,
    margin: 5
  },
  submitText: {
    color:'#fff',
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize:14,
    padding: 5
  },
  followText: {
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    padding: 5
  },
  footerView: { justifyContent: "center", alignItems: "center", flex: 1 },
  renderModalView: { justifyContent: "center", alignItems: "flex-end" },
  horizontalView: {
    height: metrics.screenHeight / 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:13,
    backgroundColor: AppStyles.color.COLOR_WHITE
  },
  sucessText: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 16,
    color: AppStyles.color.COLOR_BLACK,
    padding: 8
  },
  modalView: {
    alignItems: "flex-start",
    backgroundColor: AppStyles.color.COLOR_WHITE,
    justifyContent: "space-between",
    width: metrics.screenWidth / 2.5
  },
  modalFollowView: {
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_WHITE,
    borderRadius: 6,
    justifyContent: "space-between"
  },
  imageText: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color: AppStyles.color.COLOR_BLACK,
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 10
  },
  owner: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 15,
    color: AppStyles.color.COLOR_BLACK
  },
  time: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 11,
    color: AppStyles.color.COLOR_SPACE
  },
  iconTextView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconView: {
    paddingHorizontal:3
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    backgroundColor: "#F3F3F3",
    // backgroundColor:'red',
    height: metrics.screenHeight / 3,
    width: metrics.screenWidth,
    paddingHorizontal:9
  },
  image1: {
    backgroundColor: "#F3F3F3",
    // backgroundColor:'red',
    paddingHorizontal:9
  },
  images: {
    height: 22,
    paddingHorizontal: 10,
    width: 22,
    resizeMode: "contain"
  },
  menu: {
    top: metrics.screenHeight / 2
  },
  itemView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin:14
  },
  line: {
    backgroundColor: '#969696',
    height:.9,
  },
  lineText: {
    fontSize: 20
  },
  mainImage: {
    height:16,
    paddingHorizontal:3,
    tintColor: AppStyles.color.COLOR_BLACK,
    width:16
  },
  mainImageSelected: {
    height:16,
    paddingHorizontal: 4,
    tintColor: "#3D94BE",
    width:16
  },
  paddingText: {
    paddingLeft: 6,
    color: AppStyles.color.COLOR_COMPOSE,
    fontSize: 13,
    fontFamily: AppStyles.fonts.FONT_REGULAR
  },
  paddingTextSelected: {
    paddingLeft: 6,
    color: "#3D94BE",
    fontSize: 13,
    fontFamily: AppStyles.fonts.FONT_REGULAR
  },
  noData: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 18,
    color: AppStyles.color.COLOR_BLACK
  },
  paddingItemText: {
    paddingLeft: 6
  },
  postView: {
    alignSelf: "flex-end",
    borderRadius:4,
    justifyContent: "flex-end",
    elevation: 2, 
    backgroundColor: "#78BECA",
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    marginBottom:5,
    marginRight:2
  },
  rowLikeView: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  rowView: {
    alignItems: "center",
    flexDirection: "row"
  },
  textInput: {
    height: 40,
    marginLeft:10,
    width: metrics.screenWidth - 90,
    color: AppStyles.color.COLOR_PALATEE,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    textAlignVertical: "top"
  },
  textInputView: {
    justifyContent: "center",
    marginLeft: 6
  },
  topView: {
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_BACK,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:10,
    paddingVertical:10
  },
  itemBackView: { backgroundColor: "#F3F3F3" },
  profileText: {
    fontSize: 13,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color: AppStyles.color.COLOR_BLACK
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: AppStyles.color.COLOR_GREY
  },
  followButton: {
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_BACK,
    borderRadius: 30,
    justifyContent: "center",
    padding: 5,
    marginVertical: 5,
    height:40,
    width:90
  },
  userSuggImage: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  nameText: {
    fontSize: 14,
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    paddingTop: 7
  },
  countryText: {
    fontSize: 12,
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR
  }
});

export default styles;
