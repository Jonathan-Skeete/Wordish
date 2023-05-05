import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';

const ShakeAnimation = ({ shouldShake, children }) => {
  const [shakeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (shouldShake) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 5, duration: 50 }),
        Animated.timing(shakeAnimation, { toValue: -5, duration: 50 }),
        Animated.timing(shakeAnimation, { toValue: 5, duration: 50 }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50 })
      ]).start();
    }
  }, [shouldShake, shakeAnimation]);

  const interpolated = shakeAnimation.interpolate({
    inputRange: [-10, 0, 10],
    outputRange: ['-10deg', '0deg', '10deg']
  });

  const animatedStyle = {
    transform: [{ rotate: interpolated }]
  };

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
};

export default ShakeAnimation;
