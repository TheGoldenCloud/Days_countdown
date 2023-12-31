import React from 'react'

type data = {
    message: string | undefined,
    diffDays: number | undefined
}

let Output = ({ message, diffDays }: data) => {
  return (
    <div className='mx-2'>
        <div className='alert alert-primary' role="alert">
            <div className="d-flex">
                <div className="me-auto">{message}</div>
                <div className='p'>{diffDays} days</div>
            </div>
        </div>
    </div>
  )
}

export default Output