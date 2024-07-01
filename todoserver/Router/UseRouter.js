const router = require('express').Router()
const TODO = require('../Model/UserSchema')

//to post task
router.post('/postDatass', async (req, res) => {
    const newData = new TODO({
        task: req.body.task
    })
    console.log('newdataa', newData);
    try {
        const savedData = await newData.save();
        res.status(200).json(savedData)
    } catch (error) {
        res.status(500).json(error);
    }
})

//get all task
router.get('/getall', async (req, res) => {
    try {
        const dbdata = await TODO.find();
        console.log('all data', dbdata);
        res.status(200).json(dbdata);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//get task by id
router.get('/gettask/:id', async (req, res) => {
    console.log('reqqqqq', req.params.id);
    try {
        const dbdatas = await TODO.findById(req.params.id)
        console.log('ddddd', dbdatas);
        res.status(200).json(dbdatas)
    } catch (error) {
        res.status(400).json(error)
    }
})

//delete tasks based on id
router.delete('/delete/:id', async (req,res)=>{
    console.log('deleteeee',req.params.id);
    try {
        const dbdata = await TODO.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(400).json(error)
    }
})

//edit tasks 
router.put('/edit/:id', async (req, res) => {
    console.log('iddddddddddddd', req.params.id);
    try {
        const dbData = await TODO.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('updateeeeee', dbData);
        res.status(200).json(dbData);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;


