import React from 'react'

type data = {
    message: string,
    diffDays: number
}

let Output = ({ message, diffDays }: data) => {
  return (
    <div className='event'>
        <div className='alert alert-primary' role="alert">
            <div className="d-flex">
                <div className="me-auto">{message}</div>
                <div className='p'>{diffDays} days</div>
            </div>
        </div>
    </div>
    // <div id = "outputData" />
  )
}

export default Output