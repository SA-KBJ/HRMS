import React from 'react';
import Setup from './src/boot/setup'

import NewLeave from './views/leave/NewLeave'
import UpComingHoliday from './views/leave/UpcomingHoliday'
import MyLeave from './views/leave/MyLeave'

export default class App extends React.Component {
  render() {
    return (

      <MyLeave />
      // <UpComingHoliday/>
      // <NewLeave/>
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
