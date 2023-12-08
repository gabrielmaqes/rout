import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {fonts} from 'theme/fonts';
import CheckBox from '../components/CheckBox';
import Tag from '../components/Tag';
import Separator from '../components/Separator';
import {useInjectGet} from 'global/hooks/useInjectGet';
import {TaskController} from 'modules/task/controllers/api/TaskController';
import {TaskModel} from 'models/TaskModel';

const HomeScreen = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const controller = useInjectGet<TaskController>('TaskController');

  const handleListTask = useCallback(() => {
    controller.listTasks().then((result: TaskModel[]) => {
      setTasks(result);
    });
  }, [controller]);

  useEffect(() => {
    handleListTask;
  }, [handleListTask]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <View style={styles.taskBox}>
            <CheckBox onPress={() => {}} />
            <View style={styles.fluid}>
              <Text style={styles.body}>{item.description}</Text>
              <View style={styles.detailBox}>
                <Text style={styles.label}>
                  {item.status} - {item.expiration}
                </Text>
                <Tag label={item.category} />
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f9',
    padding: 16,
  },
  fluid: {
    flex: 1,
  },
  taskBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#d7d7d7',
    padding: 16,
    borderRadius: 16,
  },
  detailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    padding: 16,
    backgroundColor: '#ff8080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  body: {
    fontSize: fonts.bodyMedium,
  },
  label: {
    fontSize: fonts.labelSmall,
  },
});

export default HomeScreen;
