const mongoose = require("mongoose");
let hostelSchema = new mongoose.Schema({
	name: String,
	roomNumbers: Number,
	bedNumbers: Number,
	warden: [
		{
			name: String,
			employeeId: Number,
			email: String,
			contactNumber: Number
		}
	],
	chiefWarden: [
		{
			name: String,
			email: String,
			employeeId: Number,
			contactNumber: Number
		}
	]
});

module.exports = mongoose.model("Hostel", hostelSchema);
