import { StyleSheet} from 'react-native';

const baseStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red'
    },
    verticalView: {
      alignItems:'center',    
      backgroundColor: 'white',
      justifyContent: 'center',
      flexDirection:'column'
    },
    horizontalView: {
      flexDirection:'row'
      },
      buttonStyle:{
        flexDirection :'row',
        flex : 1,
        fontSize:12,
      },
      input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#FFFFFF',
      },image: {
        width : 100,
        height: 100,
        margin:10
         },
  })

export default baseStyles;