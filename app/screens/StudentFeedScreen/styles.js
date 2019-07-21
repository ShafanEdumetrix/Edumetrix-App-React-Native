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
    paddingVertical: 5
  },
  container: {
    flex: 1
  },
  imageText: {
    fontFamily: AppStyles.fonts.FONT_REGULAR,
    color: AppStyles.color.COLOR_BLACK,
    fontSize: 18,
    padding: 4,
    paddingHorizontal: 10
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
  itemBackView: { backgroundColor: "#F3F3F3" },
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
  rowLikeView: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10
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
  }
});

export default styles;
