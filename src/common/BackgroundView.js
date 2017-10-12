//@flow
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const BackgroundView = ({ children, ...props }) => {
  return (
    <LinearGradient
      end={{ x: 0.0, y: 1.0 }}
      start={{ x: 1.0, y: 0.0 }}
      locations={[0, 0.01, 0.07, 0.14, 0.22, 0.3, 0.41, 0.57, 1]}
      colors={[
        '#949FA7',
        '#8D98A0',
        '#6E7981',
        '#535D66',
        '#3E4751',
        '#2D3640',
        '#222B35',
        '#1B242E',
        '#19222C'
      ]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};
export default BackgroundView;
