import React,{useState} from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Homepage from './components/Homepage';
import Addroom from './components/Addroom';
import  Title from './components/Title';
import Room from './components/Room';



function App() {

  const [roomList,setRoomList]=useState([{typeroom:'',name:'',roomColor:''}])

  const addRoomToList=(typeroom,name,roomColor)=>{
    setRoomList([{typeroom:typeroom,name:name,roomColor:roomColor},...roomList])
  }



  return (
    <div className="App">
            <Title/>

            <Router>
              {roomList.map((element)=>{
               return <Homepage typeroom={element.typeroom} name={element.name} color={element.roomColor}/>
              })}
              
              <Switch>
                   <Route exact path='/addroom' component={()=>{return <Addroom add={addRoomToList} />}}/>
                   <Route exact path='/room' component={()=>{return <Room/>}}/>
     
              </Switch>
            </Router>
   
    </div>
  );
}

export default App;
