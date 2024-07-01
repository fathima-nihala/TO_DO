import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetCompAll } from './ApiCall'

const Completed = () => {

  const [completed, setCompleted] = useState([])
  const [isChecked, setIsChecked] = useState(false);


    //to get all compelted task
    useEffect(() => {
      const handleCompletedGet = async () => {
          try {
              const res = await GetCompAll()
              console.log('tttt', res);
              setCompleted(res)
          } catch (error) {
              console.error('Error fetching product data:', error);
          }
      }
      handleCompletedGet()
  }, [])

   //checked inp field
   const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
};

  return (
    <div className='add'>
    <div className='add-container'>
        <div className='pending'>
            <h2>Completed</h2>
            {completed.map((val) => (
                            <div>
                                <input
                                    type="checkbox"
                                    checked={!isChecked}
                                    onChange={handleCheckboxChange}
                                />{val.task}
                            </div>
                        ))}
            <div className='addtask-btn'>
                <Link to='/'><button>Back</button></Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Completed
