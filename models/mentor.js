const mongoose = require("mongoose");
let MentorSchema = new mongoose.Schema({
	name: String,
	type: String,
	employeeId: Number,
	phoneNo: Number,
	email: String,
	password: String,
	menteeList: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Student"
		}
	]
});

module.exports = Mentor = mongoose.model("mentors", MentorSchema);
