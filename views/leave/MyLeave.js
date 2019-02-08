import React from 'react';
import { StyleSheet, Text, View, Picker, Alert, TouchableOpacity, DatePickerAndroid, ToastAndroid } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import images from '../../config/images'
import { CheckBox, Input, Image, Button, Icon } from 'react-native-elements'

export default class MyLeave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveBalance: 0
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.leaveText}>{strings.lable_leave +""+ this.state.leaveBalance}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: dimen.marginSmall,
        // backgroundColor: colors.colorPrimary,
        flex: 1,
    },
    leaveText:{
        fontWeight: 'bold',
        fontSize: dimen.textMedium,
        marginTop:dimen.marginSmall,
        color:colors.textTitleGray
    }

})