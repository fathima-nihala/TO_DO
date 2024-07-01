const router = require('express').Router()
const CompletedTodo = require('../Model/CompletedSchema')

//completed data post
router.post('/cpost', async (req, res) => {
    const newData = new CompletedTodo({
        task: req.body.task
    })
    console.log('completedpost:', newData);
    try {
        const savedDatas = await newData.save();
        res.status(200).json(savedDatas);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get all completed data
router.get('/allget',async(req,res)=>{
    try {
        const dbdata = await CompletedTodo.find();
        console.log('get completed all',dbdata);
        res.status(200).json(dbdata)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;
