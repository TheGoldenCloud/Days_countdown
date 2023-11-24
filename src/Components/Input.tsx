import React,{ useState } from 'react'
import Output from './Output'
//import { v4 as uuidv4 } from 'uuid'; Adduj id svakom output elementu ili ovako ili drugacije

type OutputItem = {
    message: string,
    diffDays: number
}

let window_ = (window as any);

let Input = () => {

    let [message,setMessage] = useState('');
    let [pickedDate,setpickedDate] = useState('');
    let [showWarning,setShowWarning] = useState(Boolean);
    let [warningType,setWarningType] = useState('');
    let [listEvents,setListEvents] = useState<OutputItem[]>([]);

    let addEvent = () => {
      if(message === ''){
        setWarningType('You forgot event NAME');
        setShowWarning(true);
      }else if(pickedDate === ''){
        setWarningType('You forgot event DATE');
        setShowWarning(true);
      }else{

        let date1 = new Date(); //NOW
        let date2 = new Date(pickedDate);
        
        if(date1 < new Date(pickedDate)){//date1.getDate() < date2.getDate() ???
            let diffTime = Math.abs(date2.getTime() - date1.getTime());
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            setShowWarning(false);
            setListEvents([...listEvents,{ message,diffDays }]);
    
            // let data = {
            //     msg: message,
            //     days: date2.getDate()
            // }
    
            // let data = {
            //     msg: message,
            //     days: pickedDate
            // }

            let data = {
                msg: message,
                days: diffDays
            }
    
            window_.rendererFunctions.ipcRenderer.send('eventData', data);
    
        }else{
            setWarningType('Enter date that will come!!!');
            setShowWarning(true);
        }
      }
    }

  return (
    <>
        <div className="inputData mx-2">
            <label>Enter message:</label>
            <input type="text" className="form-control" onChange={(e)=> setMessage(e.target.value)} id="message" />

            <label>Enter end date:</label>
            <input type="date" className="form-control" onChange={(e)=> setpickedDate(e.target.value)} id="date" />
        </div>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick={()=>addEvent()}>Add reminder</button>

        { showWarning ? <p className="text-danger mx-2">{warningType}</p> : '' }
      
        <hr />

        {  listEvents.map((o)=>(<Output message = {o.message} diffDays = {o.diffDays}/>)) }
    </>
  )
}

export default Input