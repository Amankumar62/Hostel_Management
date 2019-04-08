const mongoose = require("mongoose");
let ParentSchema = new mongoose.Schema({
	name: String,
	email: String,
	phoneNo: Number,
	type: String,
	parentId: String,
	password: String,
	childList: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Student"
		}
	]
});

module.exports = Parents = mongoose.model("parents", ParentSchema);
