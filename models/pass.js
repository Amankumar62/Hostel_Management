const mongoose = require("mongoose");
let passSchema = new mongoose.Schema({
	mentorApporval: { type: Boolean, default: false },
	wardenApproval: { type: Boolean, default: false },
	parentApproval: { type: Boolean, default: false },
	mentorReplied: { type: Boolean, default: false },
	wardenReplied: { type: Boolean, default: false },
	parentReplied: { type: Boolean, default: false },
	ParentText: String,
	wardenText: String,
	mentorText: String,
	outDate: Date,
	inDate: Date,
	purpose: String,
	studentDetail: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Student"
	}
});

module.exports=Pass = mongoose.model("pass", passSchema);
