import React, {useState} from "react"
import "./styles/App.css"
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Modal from "./components/Modal"
import TaskModal from "./components/TaskModal"

function App(){
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  function addTask(task){
    setTasks([...tasks, task])
    onHideModal()
  }

  function onHideModal(){
    setShowModal(false)
  }
  function onShowModal(){
    setShowModal(true)
  }

  function deleteTask(idTask){
    let newArray = tasks.filter(item => item.id != idTask)
    console.log(newArray);
    setTasks(newArray)
  }

  function onShowTaskModal(){
    setTaskModal(true);
  }

  return (
    <div>
      <Header onShowModal={onShowModal}></Header>
      <Modal onHideModal={onHideModal} modal={showModal}><Form onAddTask={addTask}></Form></Modal>
      <List tasks={tasks} deleteTask={deleteTask} ></List>
    </div>
  )
}

export default App;