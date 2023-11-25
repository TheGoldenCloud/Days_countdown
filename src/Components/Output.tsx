import React from 'react'

type data = {
    key: string,
    message: string,
    diffDays: number
}

let Output = ({ key,message, diffDays }: data) => {
  return (
    <div className={key + ' mx-2'}>
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