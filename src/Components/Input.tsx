import React,{ useState } from 'react'

let Input = () => {

    let [message,setMessage] = useState('');
    let [pickedDate,setpickedDate] = useState('');

  return (
    <>
        <div id="inputData">
            <label>Enter message:</label>
            <input type="text" className="form-control" id="message" />

            <label>Enter end date:</label>
            <input type="date" className="form-control" id="date" />
        </div>
        <button type="button" className="btn btn-primary mx-2" id="btnn">Add reminder</button>
    </>
  )
}

export default Input