const mongoose = require("mongoose");
let attendanceSchema = new mongoose.Schema({
	date: { type: String, default: Date.now },
	students: [
		{
			studentDetail: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Student"
			},
			checking: [
				{
					types: String,
					timing: { type: Date, default: Date.now }
				}
			]
		}
	]
});

module.exports = Attendance = mongoose.model("attendance", attendanceSchema);
