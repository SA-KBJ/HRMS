import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../config/colors';
import dimen from '../../config/dimen';
import CommonStyle from "../../style/comman";


class Profile extends React.Component {
    render() {
        return (
            <View style={CommonStyle.container}>
                <View style={CommonStyle.verticalView}>
                <View style={styles.detailView}>
                    <Image source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
                </View>
                <View style={styles.tabView}>
                    <Text>Hello</Text>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    detailView: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'powderblue',
       
    },
    innerView: {
        flex: 1,
        
        justifyContent:'space-evenly',
        marginTop: dimen.marginLarge,
        marginBottom:dimen.marginLarge,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },

    tabView: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
            
    }
})

export default Profile;