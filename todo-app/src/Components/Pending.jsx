import React, { useEffect, useState } from 'react'
import { CompletedDataPost, DeleteTask, GetData, regEdit, taskGet } from './ApiCall'
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Pending = () => {

    const [item, setItem] = useState([])
    const [iseditInputVisible, setEditInputVisible] = useState(false);
    const [edit, setEdit] = useState('')
    const [val, setVal] = useState('')
    //get all tasks
    useEffect(() => {
        const display = async (id) => {
            try {
                const res = await GetData()
                console.log('gettttttttt', res);
                setItem(res)
            } catch (error) {
                console.error('Error fetching product data:', error);
            }

        }
        display()
    }, [])

    //to post & delete task based on id 
    const handleGet = async (id, task) => {
        console.log('idtask', { id, task });
        try {
            await CompletedDataPost({ id, task });
            await DeleteTask(id);
        } catch (error) {
            console.error('Error handling checkbox change:', error);
        }
    }

     //get tasks based on id
     const handleDisplay = async (id, task) => {
        console.log('display', { id, task });
        try {
            const res = await taskGet({ id, task })
            console.log(res._id);
            console.log(res.task);
            setEdit(res.task)
            setVal(res)
            setEditInputVisible(!iseditInputVisible);
        } catch (error) {
            console.error('Error handling checkbox change:', error);
        }
    }

    //edit task
    const handleUpdateSubmit = async (id, task) => {
        try {
            console.log('updatedata', { task: edit, id });
            const update = { task: edit, id };
            const res = await regEdit(update);
            console.log('uuuuuuuuuuuu', res);
            console.log('uuiiiiiiddddd', res._id);
        } catch (error) {
            console.error('Error handling checkbox change:', error);
        }
    }



    return (
        <div className='add'>
            <div className='add-container'>
                <div className='pending'>
                    <h2>Pending</h2>
                    {item.map((data) => (
                        <div className='pending-cntr'>
                            <div className='pending-sub-cntr'>
                            <input type="checkbox" value={data.task} name='task' onChange={(e) => handleGet(data._id, data.task)} className="rounded-checkbox" /><p>{data.task}</p><FaRegEdit className='icon' onClick={() => handleDisplay(data._id, data.task)} />
                            </div>
                            {iseditInputVisible && (
                                        <div className='edit'>
                                            <input type="text" value={edit} onChange={(e) => setEdit(e.target.value)} />
                                            <button onClick={() => handleUpdateSubmit(val._id, val.task)}>Edit</button>
                                        </div>
                                    )}
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

export default Pending
