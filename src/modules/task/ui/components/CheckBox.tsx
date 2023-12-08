import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface CheckBoxProps {
  onPress(): void;
}

const CheckBox = (props: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = useCallback(() => {
    props.onPress();
    setChecked(previous => !previous);
  }, [props]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheck}>
      {checked && <Icon name="check" size={24} color="#FFF" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#000',
    opacity: 0.1,
  },
});

export default CheckBox;
