import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Addroom(props) {

    
    const [typeroom,setTypeRoom]=useState('');
    const [name,setName]=useState('');
    const [roomColor,setRoomColor]=useState('');
    const [newRoom,setnewRoom]=useState({typeroom:'',name:'',color:''})

    const validTypeRoom=()=>{
        if(typeroom=="Ambatroom"||typeroom=="Sleeproom"||typeroom=="Bedroom"||typeroom=="ckitcen"){
            alert ('good')
        }
        else{
            alert ('ERROR')
        }
    }

    const validName=()=>{
        if (name.length<=5){
            alert ('good')
        }
        else{
            alert ('ERROR')
        }
    }



    return (
        <div>
             <div className="input-group mb-3">
             
             <select onChange={(e)=>{setTypeRoom(e.target.value)}} className="custom-select" id="inputGroupSelect01">
                 <option selected>Choose room</option>
                 <option >Sleeproom</option>
                 <option >Ambatroom</option>
                 <option >Bethroom</option>
                 <option >kitchen</option>
             </select>
         </div>

         <div><button onClick={validTypeRoom}>chek typeroom</button></div>

         <div>
              <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="name"/>
         </div>

         <div><button onClick={validName}>check name</button></div>

         <div className="input-group mb-3">
           
           <select onChange={(e)=>{setRoomColor(e.target.value)}} className="custom-select" id="inputGroupSelect01">
               <option selected>Choose color</option>
               <option >Yelow</option>
               <option >Green</option>
               <option >Red</option>
               <option >Pink</option>
           </select>
           
       </div>

         <div>
             <Link to='/homepage'><button onClick={()=>{props.add(typeroom,name,roomColor)}} type="button" className="btn btn-success">create room</button></Link>
         </div>
        </div>
    )
}
