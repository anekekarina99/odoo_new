import React, { useState } from 'react';
import { View } from 'react-native';
import TodoList from './TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTaskList) => {
    // Fungsi ini akan dipanggil ketika tugas baru ditambahkan
    setTasks(newTaskList);
  };

  return (
    <View style={{ flex: 1 }}>
      <TodoList initialTasks={tasks} onTaskAdded={handleTaskAdded} />
    </View>
  );
};

export default App;
