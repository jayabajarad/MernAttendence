const mongoose = require('mongoose');
const Standard = require('./Standard');
const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    unique: true
  },
  attendanceRecords: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
      },
      subjectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
      },
      StandardId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Standard',
        required: true
      },
     TeacherId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
      },
      attendance: {
        type: String,
        enum: ['present', 'absent'],
        required: true
      }
    }
  ]
});

// Create the Attendance model
const Attendance2 = mongoose.model('Attendance2', attendanceSchema);

module.exports = Attendance2;