import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const TodoList = ({ initialTasks, onTaskAdded }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = () => {
    if (task !== '') {
      const newTaskList = [...tasks, task];
      setTasks(newTaskList);
      onTaskAdded(newTaskList); // Memanggil prop onTaskAdded dengan daftar tugas yang baru
      setTask('');
    }
  };

  return (
    <View>
      <Text>My To-Do List</Text>
      <TextInput
        placeholder="Add a task..."
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default TodoList;
