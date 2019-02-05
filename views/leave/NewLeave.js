import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import images from '../../config/images'
import { CheckBox, Input, Image, Button } from 'react-native-elements'


export default class NewLeave extends React.Component {

    constructor() {
        super();
        this.state = {
            checked: false
        };
    }


    render() {

        const { checked } = this.state;

        return (
            <View style={styles.container}>

                <CheckBox
                    title={strings.lable_Multiple_leave}
                    checked={checked}
                    checkedColor={colors.colorPrimary}
                    onPress={() => this.setState({ checked: !checked })}
                />
                <Text style={styles.text}>{strings.lable_date}</Text>
                <Input
                    style={styles.input}
                    placeholder={strings.select_date}
                    rightIcon={
                        <Image style={styles.icon}
                            source={images.calander} />
                    }
                />
                <Text style={styles.text}>{strings.lable_reason}</Text>
                <Input
                    style={styles.input}
                    placeholder={strings.place_holder_reason}
                />

                <View style={styles.innerContainer}>
                    <Text style={styles.text}>{strings.lable_assign_to}</Text>
                    <Text style={styles.planText}>Ankit Thakkar </Text>
                </View>

                <Text style={styles.text}>{strings.lable_watcher}</Text>

                <View style={styles.btnContainer}>
                    <Button
                        style={styles.button}
                        title={strings.lable_send_request}
                    />
                    <Button
                        style={styles.button}
                        title= {strings.lable_do_nothing}
                    />
                </View>
            </View>

        );
    }



}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colors.white,
        // alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        margin: dimen.marginMedium
    },

    text: {
        margin: dimen.marginMedium,
        fontWeight: 'bold'
    },

    btnContainer: {
        flexDirection: 'row',
        marginTop: dimen.marginSmall,
        marginLeft:dimen.marginMedium
    },

    icon: {
        width: 50,
        height: 50
    },
    planText: {
        margin: dimen.marginMedium,
    },
    button: {
        margin: 60,
    }
});