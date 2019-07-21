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
  buttonView: {
    alignSelf: "flex-start",
    backgroundColor: AppStyles.color.COLOR_LIGHT_GREY,
    borderRadius: 14,
    marginVertical: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop:10
  },
  buttonChangeView: {
    alignSelf: "flex-start",
    backgroundColor: AppStyles.color.COLOR_LIGHT_GREY,
    borderRadius: 14,
    marginVertical: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 7
  },
  container: {
    flex: 1
  },
  iconView: {
    paddingHorizontal: 4
  },
  reportText: {
    fontSize: 16,
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    padding: 8
  },
  renderModalView: { justifyContent: "center", alignItems: "flex-end" },
  modalView: {
    alignItems: "flex-start",
    backgroundColor: AppStyles.color.COLOR_WHITE,
    justifyContent: "space-between",
    width: metrics.screenWidth / 2.5
  },
  itemBackView: { backgroundColor: "#F3F3F3" },

  imageText: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color: AppStyles.color.COLOR_BLACK,
    fontSize: 18,
    padding: 4,
    paddingHorizontal: 10
  },
  menu: {
    top: metrics.screenHeight / 2
  },
  image: {
    backgroundColor: "#F3F3F3",
    height: metrics.screenHeight / 3,
    width: metrics.screenWidth,
    paddingHorizontal: 10
  },
  images: {
    height: 25,
    paddingHorizontal: 4,
    resizeMode: "contain",
    tintColor: AppStyles.color.COLOR_BLACK,
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
    backgroundColor: '#DEDFE2',
    height: 1,
    width: metrics.screenWidth
  },
  headText: {
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 18
  },
  toolStyle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 6
  },
  submitText: {
    color: AppStyles.color.COLOR_WHITE,
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 16
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_BLACK,
    borderRadius: 14,
    justifyContent: "center",
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4
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
  rowLikeView: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent:'center'
  },
  textInput: {
    height: 40,
    marginLeft: 10,
    width: metrics.screenWidth - 40
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
    borderColor: AppStyles.color.COLOR_GREY
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 18,
    color: AppStyles.color.COLOR_DARK
  },
  country: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    color: AppStyles.color.COLOR_COUNTRY
  },
  noData: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 18,
    color: AppStyles.color.COLOR_BLACK
  },
  owner: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    color: AppStyles.color.COLOR_BLACK
  },
  buttonTouchView: {
    flexDirection: "row"
  },
  modalPasswordView: {
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_WHITE,
    borderRadius: 6,
    justifyContent: "space-between"
  },
  time: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 14,
    color: AppStyles.color.COLOR_SPACE
  },
  follower: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 15,
    color: AppStyles.color.COLOR_DARK
  },
  editText: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    fontSize: 12,
    color: AppStyles.color.COLOR_BLACK
  }
});

export default styles;
