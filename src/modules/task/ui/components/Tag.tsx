import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fonts} from '../../../../theme/fonts';

interface TagProps {
  label: string;
  color?: string;
}

const Tag = (props: TagProps) => {
  return (
    <View
      style={{...styles.container, backgroundColor: props.color ?? '#26CD8F'}}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },
  label: {
    fontSize: fonts.labelSmall,
  },
});

export default Tag;
