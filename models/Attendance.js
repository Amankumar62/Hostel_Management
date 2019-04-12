const mongoose = require("mongoose");
let attendanceSchema = new mongoose.Schema({
	date: { type: Date, default: Date.now },
	students: [
		{
			studentDetail: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Student"
			},
			checking: [
				{
					type: String,
					timing: { type: Date, default: Date.now }
				}
			]
		}
	]
});

module.exports = Attendance = mongoose.model("attendance", attendanceSchema);
