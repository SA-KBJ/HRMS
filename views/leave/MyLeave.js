import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Alert,
  TouchableOpacity,
  DatePickerAndroid,
  ToastAndroid,
 
  FlatList
} from "react-native";
import colors from "../../config/colors";
import strings from "../../config/string";
import dimen from "../../config/dimen";
import images from "../../config/images";
import { CheckBox, Input, Image, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class MyLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaveBalance: 0,
      leaveList: [
        {
          id: 1,
          date: "14-2-2019",
          leaveCount: 3,
          day: "Thursday",
          reason: "Would like to attain marriage funation",
          status: "Approved",
          assign: "Ankit Thakkar"
        },
        {
          id: 2,
          date: "14-2-2019",
          leaveCount: 3,
          day: "Thursday",
          reason: "Would like to attain marriage funation",
          status: "Approved",
          assign: "Ankit Thakkar"
        },
        {
          id: 3,
          date: "14-2-2019",
          leaveCount: 3,
          day: "Thursday",
          reason: "Would like to attain marriage funation",
          status: "Approved",
          assign: "Ankit Thakkar"
        },
        {
          id: 4,
          date: "14-2-2019",
          leaveCount: 3,
          day: "Thursday",
          reason: "Would like to attain marriage funation",
          status: "Approved",
          assign: "Ankit Thakkar"
        },
        {
          id: 5,
          date: "14-2-2019",
          leaveCount: 3,
          day: "Thursday",
          reason: "Would like to attain marriage funation",
          status: "Approved",
          assign: "Ankit Thakkar"
        }
      ]
    };
  }

  rowItem = item => {
    return (
      <View style={styles.rowMainContainer}>
        <View style={styles.innerRowContainer}>
          <Icon color={colors.date_icon} name="calendar" size={20} />
          <Text style={styles.rowText}>{item.date}</Text>
          <Text style={styles.leaveBalanceText}>
            {" (" + item.leaveCount + ") "}{" "}
          </Text>
        </View>
        <View style={styles.middleRowContainer}>
          <Icon color={colors.reason_icon} name="question-circle" size={25} />
          <Text style={styles.rowText}>{item.reason}</Text>
        </View>
        <View style={styles.middleRowContainer}>
          <Icon color={colors.status_icon} name="check-circle" size={25} />
          <Text style={styles.rowText}>{item.status}</Text>
        </View>
        <View style={styles.middleRowContainer}>
          <Icon color={colors.approved_icon} name="user" size={27} />
          <Text style={styles.rowText}>{item.assign}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.leaveContainer}>
          <Text style={styles.leaveText}>
            {strings.lable_leave + "" + this.state.leaveBalance}
          </Text>
          <Button
            buttonStyle={styles.buttonShowFilter}
            title={strings.lable_show_filter}
            // onPress={() => { sendRequestClick() }}
          />
        </View>
        <FlatList
          data={this.state.leaveList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.rowItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: dimen.marginSmall,
    // backgroundColor: colors.colorPrimary,
    flex: 1
  },
  leaveText: {
    fontWeight: "bold",
    fontSize: dimen.textMedium,
    marginTop: dimen.marginSmall,
    marginBottom: dimen.marginSmall,
    color: colors.textTitleGray
  },
  leaveContainer:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  buttonShowFilter: {
    backgroundColor: colors.colorPrimary
  },
  rowMainContainer: {
    padding: dimen.marginSmall,
    marginBottom: dimen.marginSmall,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.textValueGray,
    borderRadius: 4,
    elevation: 3
  },
  innerRowContainer: {
    flexDirection: "row"
  },
  middleRowContainer: {
    flexDirection: "row",
    marginTop: dimen.marginSmall,
    alignItems: "center"
  },
  rowText: {
    marginLeft: dimen.marginSmall,
    color: colors.textValueGray
  },
  leaveBalanceText: {
    color: colors.textTitleGray
  }
});
