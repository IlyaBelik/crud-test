const router = require('express').Router()
const {Announcement} = require('../models/Announcement')

router.post('/add', (req, res) => {
    const announcement = new Announcement(req.body)
    announcement.save(err => {
        if(err) return res.status(400).json({success: false, err})
        return res.status(200).json({success: true})
    })
})

router.get('/', (req, res) => {
    Announcement.find().exec((err, announcements) => {
        if(err) return res.status(400).json({success: false, error:err})
        return res.status(200).json({success: true, announcements: announcements})
    } )
})

router.get('/detail/:id', (req, res) => {
    let id = req.params.id
    Announcement.findById(id, function (err, announcements){
        if(err) return res.json({success: false, error:err})
        return res.json({success: true, announcements})
    })
})

router.put('/update/:id', (req, res) => {
    Announcement.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
    },
        (err) => {
            if(err) return res.status(400).json({success: false, error:err})
            return res.status(200).json({success: true})
        }
    )
})

router.delete('/delete/:id', (req, res) => {
    Announcement.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if(err){
            res.send(err)
        }
        return res.json(deleteItem)
    })
})

module.exports = router