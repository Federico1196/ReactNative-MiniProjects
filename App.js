import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './componets/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
  }

  const completeTask =  (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); 
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.items}>
          {/* This is where the task go */}
          {
            taskItems.map((item, index) => {
              return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task  text={item}/>
                  </TouchableOpacity>

              )
               
            })
          }
        </View>
      </View>

      {/* write a task section */}
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  items: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    paddingVertical:15,
    paddingHorizontal:15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0'
    
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0'
    

  },
  addText: {},

});
