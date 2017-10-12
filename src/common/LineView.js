// @flow
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
const LineView = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 1]}
      colors={['#949FA7', '#F7931E']}
      {...props}
    />
  );
};
export default LineView;
