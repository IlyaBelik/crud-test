const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnnouncementSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    announcementDate: {
        type: Date,
        require: true
    }
})

module.exports={
    Announcement:mongoose.model("announcements", AnnouncementSchema ),
}