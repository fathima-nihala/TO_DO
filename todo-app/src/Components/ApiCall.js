import axios from "axios";

//post task
export const PostData = async (data) => {
    console.log('dataaaaaaaaaaaa', data);
    try {
        const dbdata = await axios.post('http://localhost:7006/data/postDatass', data)
        console.log('ressssss', dbdata);
        return dbdata
    } catch (error) {
        console.log(error);
    }
}

//get all task
export const GetData = async (id) => {
    try {
        const res = await axios.get(`http://localhost:7006/data/getall?id=${id}`);
        console.log('get res', res.data);
        return res.data; // return the response data, not the entire response object
    } catch (error) {
        console.error('Error:', error);
        throw error; // rethrow the error so the caller can handle it
    }
};

//to get task based on id
export const taskGet = async (id) => {
    console.log('apiIddddd', id);
    const data = id.id;
    try {
        const response = await axios.get(`http://localhost:7006/data/gettask/${data}`, id);
        console.log('response', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



//post completed task
export const CompletedDataPost = async (id) => {
    console.log('cdcdcd', { id });
    try {
        const res = await axios.post('http://localhost:7006/data/cpost', id)
        console.log('abcd', res.data);
        return res
    } catch (error) {

    }
}

//delete task based on id
export const DeleteTask = async (id) => {
    console.log('delete', id);
    try {
        const res = await axios.delete(`http://localhost:7006/data/delete/${id}`)
        console.log('deletdtasks', res);
    } catch (error) {
        console.log(error);
    }
}

//get all the completed tasks
export const GetCompAll = async (data) => {
    try {
        const res = await axios.get('http://localhost:7006/data/allget', data)
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

//edit task
export const regEdit = async (data) => {
    console.log('upidddddddd', data);
    const { task, id } = data;
    const update = {task};
    console.log('huhuhu', update);
    try {
        const dbdata = await axios.put(`http://localhost:7006/data/edit/${id}`, update)
        console.log('dbdataaaaa', dbdata.data);
        return dbdata.data
    } catch (error) {
        console.log(error);
    }
}