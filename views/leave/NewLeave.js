import React from 'react';
import { StyleSheet, Text, View, Picker, Alert, TouchableOpacity, DatePickerAndroid } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import images from '../../config/images'
import { CheckBox, Input, Image, Button } from 'react-native-elements'


export default class NewLeave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMultipleLeave: false,
            Watchers: ['Add Watcher', 'a', 'b', 'c', 'd', 'e'],
            selectedWatcher: 'Add Watcher'
        };
    }


    render() {

        const { isMultipleLeave } = this.state;

         showDataPicker = () => {
            try {
                const {action, year, month, day} =  DatePickerAndroid.open({
                  date: new Date()
                });

                if (action !== DatePickerAndroid.dismissedAction) {
                    // Selected year, month (0-11), day
                  }
                  if (action !== DatePickerAndroid.dateSetAction) {
                    // Selected year, month (0-11), day
                  }
              } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
              }
        }
        sendRequestClick = () => {
            Alert.alert('You tapped the sendRequestClick!');
        }
        goBackClick = () => {
            Alert.alert('You tapped the goBackClick!');
        }

        return (

            <View style={styles.container}>
                <CheckBox
                    title={strings.lable_Multiple_leave}
                    checked={isMultipleLeave}
                    checkedColor={colors.colorPrimary}
                    onPress={() => this.setState({ isMultipleLeave: !isMultipleLeave })}
                />
                <Text style={styles.textTitle}>{strings.lable_date}</Text>
                <TouchableOpacity onPress={() => showDataPicker()}>
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.lableInput}
                        placeholder={strings.select_date}
                        editable={false}
                        rightIcon={
                            <Image style={styles.icon}
                                source={images.calander} />
                        }
                    />
                </TouchableOpacity>

                <Text style={styles.textTitle}>{strings.lable_reason}</Text>
                <Input
                    placeholder={strings.place_holder_reason}
                />

                <View style={styles.assignContainer}>
                    <Text style={styles.textTitle}>{strings.lable_assign_to}</Text>
                    <Text style={styles.textValue}>Ankit Thakkar </Text>
                </View>

                <Text style={styles.textTitle}>{strings.lable_watcher}</Text>

                <Picker
                    selectedValue={this.state.selectedWatcher}
                    onValueChange={(watcher, itemIndex) => (this.setState({ selectedWatcher: watcher }))}
                    style={styles.watcherPicker}
                    mode="dropdown">
                    {
                        this.state.Watchers.map((watcher, index) => {
                            return <Picker.Item color={colors.colorPrimary} key={index} value={watcher} label={watcher} />
                        })
                    }
                </Picker>

                <View style={styles.btnContainer}>
                    <Button
                        buttonStyle={styles.buttonRequest}
                        title={strings.lable_send_request}
                        onPress={() => { sendRequestClick() }}
                    />
                    <Button
                        buttonStyle={styles.buttonGoback}
                        title={strings.lable_do_nothing}
                        onPress={() => { goBackClick() }}
                    />

                </View>


            </View >

        );
    }



}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colors.white,
        // padding: dimen.marginMedium,
        justifyContent: 'center'

    },

    input: {
        width: '100%',
        color: colors.colorPrimary
    },


    textTitle: {
        color: colors.textTitleGray,
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        fontWeight: 'bold',
        fontSize: dimen.textMedium

    },

    icon: {
        width: 50,
        height: 50
    },
    textValue: {
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        color: colors.textValueGray,
    },

    assignContainer: {
        flexDirection: 'row',
    },
    watcherPicker: {
        marginLeft: dimen.marginTiny
    },

    btnContainer: {
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        flexDirection: 'row',
    },
    buttonRequest: {
        backgroundColor: colors.colorPrimary
    },
    buttonGoback: {
        backgroundColor: colors.colorPrimary,
        marginLeft: dimen.marginSmall,
    }

});