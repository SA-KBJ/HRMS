import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, DatePickerAndroid, ToastAndroid } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import images from '../../config/images'
import { CheckBox, Input, Image, Button } from 'react-native-elements'


export default class LeaveDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Leave Details Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colors.white,
        marginTop: dimen.marginBig,
        // padding: dimen.marginMedium,
        // justifyContent: 'center'

    },
})