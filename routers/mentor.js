const express = require("express");
const router = express.Router();
const _ = require("lodash");

const Mentor = require("../models/mentor");
const Pass = require("../models/pass");

const bcrypt = require("bcryptjs");
const keys = require("../config/keys");

const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/test", (req, res) => {
	res.json({ msg: "mentor test works" });
});
//get current user

//Register of Mentor
router.post("/register", (req, res) => {
	async function createMentor() {
		Mentor.findOne({ employeeId: req.body.employeeId }).then(user => {
			if (user) {
				return res.json({ error: "Employee ID already present" });
			} else {
				const body = {
					name: req.body.name,
					employeeId: req.body.employeeId,
					email: req.body.email,
					phoneNo: req.body.phoneNo,
					password: req.body.password,
					type: req.body.type
				};
				const mentor = new Mentor(body);
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(mentor.password, salt, (err, hash) => {
						if (err) throw err;
						mentor.password = hash;
						mentor
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		});
	}
	createMentor();
});

//Get all applied pass
router.get(
	"/pass",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		async function getPass() {
			const pass = await Pass.find({
				parentApproval: true,
				mentorApporval: false
			}).populate("studentDetail");
			// const result = pass.filter(
			// 	pass => `${pass.studentDetail.mentor}` === `${req.user._id}`
			// );
			res.send(pass);
			// console.log(`${pass[0].studentDetail.parent}` === `${req.user._id}`);
		}
		getPass();
	}
);

router.get("/pass/yes/:id", (req, res) => {
	async function updatePass() {
		const pass = await Pass.findById(req.params.id).populate("studentDetail");
		pass.mentorApporval = true;
		pass.mentorReplied = true;
		const result = await pass.save();
		res.json(result);
	}
	updatePass();
});

router.get("/pass/no/:id", (req, res) => {
	async function updatePass() {
		const pass = await Pass.findById(req.params.id).populate("studentDetail");
		pass.mentorApporval = false;
		pass.mentorReplied = true;
		const result = await pass.save();
		res.json(result);
	}
	updatePass();
});

router.get("/pass/:id", (req, res) => {
	async function updatePass() {
		const pass = await Pass.findById(req.params.id);
		pass.mentorApporval = req.body.mentorApporval;
		pass.mentorText = req.body.mentorText;
		pass.mentorReplied = true;
		const result = await pass.save();
		res.json(result);
	}
	updatePass();
});

router.post("/login", (req, res) => {
	const employeeId = req.body.employeeId;
	const password = req.body.password;

	Mentor.findOne({ employeeId: employeeId }).then(user => {
		if (!user) {
			return res.status(404).json({ employeeId: "employeeId  not found" });
		}

		//Check Password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				//Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name,
					employeeId: user.employeeId,
					type: user.type
				};

				//Sign Token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn: 3600 },
					(err, token) => {
						res.json({ success: true, token: `Bearer ${token}` });
					}
				);
			} else {
				return res.status(400).json({ password: "Password Incorrect" });
			}
		});
	});
});

router.get(
	"/current",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.json(req.user);
	}
);

module.exports = router;
