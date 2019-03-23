const mongoose = require("mongoose");
let studentSchema = new mongoose.Schema({
	name: String,
	password: String,
	type: String,
	registrationNumber: String,
	rollNumber: String,
	branch: String,
	year: Number,
	course: String,
	group: String,
	section: String,
	contactNumber: Number,
	hostel: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Hostel"
	},
	mentor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Mentor"
	},
	parent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Parent"
	},
	localGuardian: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Parent"
	},
	warden: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Warden"
	},
	securityGuard: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "SecurityGuard"
	},
	photo: {
		type: String,
		default:
			"https://res.cloudinary.com/sushantgupta33/image/upload/v1541162026/Profile_avatar_placeholder_large.png"
	},
	email: String
});

module.exports = Student = mongoose.model("Student", studentSchema);
