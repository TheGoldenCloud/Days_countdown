import React,{ useState,useEffect } from 'react'
import Output from './Output'
import { v4 as uuidv4 } from 'uuid';

type OutputItem = {
    id:string,
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

    useEffect(()=>{
      let date1 = new Date();
      let oldEvents = window_.dataHistory.data.events;
      let oldEvents_ = []


      for (let i = 0; i < oldEvents.length; i++) {    //FILTRIRA TAKO DA IH BRISE
        if(date1 < new Date(oldEvents[i].diffDays)){
          let date2 = new Date(oldEvents[i].diffDays);
          let diffTime = Math.abs(date2.getTime() - date1.getTime());
          let diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            let obj: OutputItem = {
                id: oldEvents[i].id,
                message: oldEvents[i].message,
                diffDays: oldEvents[i].diffDays
            }
            obj.diffDays = diff;

            oldEvents_.push(obj);   //NEW FILTERED LIST sa stringom diffday u formatu '2018-10-10'
        }
    }
      setListEvents(oldEvents_);

    },[])

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
        
        console.log(typeof pickedDate);

        if(date1 < new Date(pickedDate)){
            let diffTime = Math.abs(date2.getTime() - date1.getTime());
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            let id = uuidv4();

            setShowWarning(false);
            setListEvents([...listEvents,{ id,message,diffDays }]);

            let data = {
                id:id,
                message: message,
                diffDays: pickedDate
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

        {  listEvents.map((o)=>(<Output key={o.id} message = {o.message} diffDays = {o.diffDays}/>)) }
    </>
  )
}

export default Input