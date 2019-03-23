const mongoose = require("mongoose");
let SecurityGuardSchema = new mongoose.Schema({
	name: String,
	type: String,
	employeeId: Number,
	phoneNo: Number,
	email: String,
	password: String
});

module.exports = SecurityGuard = mongoose.model(
	"securityguard",
	SecurityGuardSchema
);
