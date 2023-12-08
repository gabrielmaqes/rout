import {View, StyleSheet} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.gap} />;
};

const styles = StyleSheet.create({
  gap: {
    flex: 1,
    margin: 4,
  },
});

export default Separator;
