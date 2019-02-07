import React from 'react';
import Setup from './src/boot/setup'

import NewLeave from './views/leave/NewLeave'

export default class App extends React.Component {
  render() {
    return (
  
      <NewLeave/>
      // <Setup/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
