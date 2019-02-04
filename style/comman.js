import { StyleSheet} from 'react-native';

const baseStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    verticalView: {
      alignItems:'center',    
      backgroundColor: 'white',
      justifyContent: 'center',
      flexDirection:'column'
    },
    horizontalView: {

      flexDirection:'row'
      }
  })

export default baseStyles;