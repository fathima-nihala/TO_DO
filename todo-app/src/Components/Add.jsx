import React, { useEffect, useState } from 'react'
import './add.css'
import { CompletedDataPost, DeleteTask, GetCompAll, GetData, PostData, regEdit, taskGet } from './ApiCall';
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Add = () => {

    // const [activeState, setActiveState] = useState(0)
    const [isInputVisible, setInputVisible] = useState(false);
    const [task, setTask] = useState('')
    const [item, setItem] = useState([])
    const [completed, setCompleted] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    const [iseditInputVisible, setEditInputVisible] = useState(false);
    const [edit, setEdit] = useState('')
    const [val, setVal] = useState('')



    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };

    //post tasks
    const handleSubmit = async () => {
        console.log('submitting form datas', { task });
        const dbdata = await PostData({ task });
        console.log('dbdataaaass', dbdata);
        console.log(dbdata.data_id);
        alert('task added successfully');
    }

    //to get all task
    useEffect(() => {
        const display = async () => {
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
                {item ?
                    <div className=''>
                        <Link className='comp-link' to='/pending'><h2>Pending</h2></Link>
                        {item.map((data) => (
                            <div className='pending'>
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
                            </div>
                        ))}
                    </div>
                    :
                    <div>
                            
                    </div>
                }

                {completed ?
                    <div>
                        <Link className='comp-link' to='/comp'><h2>Completed</h2></Link>
                        {completed.map((val) => (
                            <div>
                                <input
                                    type="checkbox"
                                    checked={!isChecked}
                                    onChange={handleCheckboxChange}
                                />{val.task}
                            </div>
                        ))}
                    </div>
                    :
                    <div>

                    </div>
                }
                {isInputVisible ? (
                    <div className='add-container-sub'>
                        <input type="text" placeholder="Add Task..." value={task} onChange={(e) => setTask(e.target.value)} />
                        <Link to='/pending'><button onClick={handleSubmit}>submit</button></Link>
                    </div>
                ) : (
                    <div className='addtask-btn'>
                        <button onClick={toggleInputVisibility}>Add Task</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Add
