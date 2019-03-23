const mongoose = require("mongoose");
let WardenSchema = new mongoose.Schema({
	name: String,
	employeeId: Number,
	email: String,
	phoneNo: Number,
	type: String,
	password: String,
	studentList: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Student"
		}
	],
	hostel: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Hostel"
		}
	]
});

module.exports = Warden = mongoose.model("warden", WardenSchema);
