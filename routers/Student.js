const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcryptjs");

const keys = require("../config/keys");
const Student = require("../models/student");
const Pass = require("../models/pass");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const Warden = require("../models/warden");
const Parent = require("../models/parents");
const Mentor = require("../models/mentor");
const SecurityGuard = require("../models/securityGuard");
const Attendacnce = require("../models/Attendance");

//Profile Routes
router.get(
	"/pass",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Pass.findOne({ studentDetail: req.user.id })
			.populate("studentDetail")
			.then(result => res.json(result))
			.catch(err => console.log(err));
	}
);

router.post("/register", (req, res) => {
	async function createCourse() {
		Student.findOne({ registrationNumber: req.body.registrationNumber }).then(
			user => {
				if (user) {
					return res.json({ error: " Registration Number already present" });
				} else {
					const body = {
						name: req.body.name,
						password: req.body.password,
						registrationNumber: req.body.registrationNumber,
						rollNumber: req.body.rollNumber,
						branch: req.body.branch,
						year: req.body.year,
						course: req.body.course,
						group: req.body.group,
						section: req.body.section,
						type: req.body.type,
						contactNumber: req.body.contactNumber
					};

					const student = new Student(body);

					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(student.password, salt, (err, hash) => {
							if (err) throw err;
							student.password = hash;
							student
								.save()
								// newUser.password = hash;
								// 	newUser
								// 		.save()
								.then(user => res.json(user))
								.catch(err => console.log(err));
						});
					});

					// const result = await student.save();
					// res.json(result);
				}
			}
		);
	}

	createCourse();
});

router.get("/user", (req, res) => {
	async function Get(params) {
		Student.find().then(result => res.json(result));
	}
	Get();
});

router.get(
	"/pass",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		async function Get() {
			pass
				.findOne({ studentDetail: req.user._id })
				.populate("studentDetail")
				.then(result => res.json(result));
		}
		Get();
	}
);

router.post(
	"/pass",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		async function createCourse() {
			const body = {
				outDate: req.body.outdate,
				inDate: req.body.indate,
				purpose: req.body.purpose,
				studentDetail: req.user._id
			};
			const pass = new Pass(body);

			const result = await pass.save();
			res.json(result);
		}
		createCourse();
	}
);

router.post("/login", (req, res) => {
	const email = req.body.registrationNumber;
	const password = req.body.password;
	console.log(req.body);

	Student.findOne({ registrationNumber: email }).then(user => {
		if (!user) {
			return res.status(404).json({ email: "User not found" });
		}

		//Check Password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				//Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name,
					email: user.registrationNumber,
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

router.post(
	"/addParent",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Student.findById(req.user._id).then(user => {
			if (user) {
				Parent.findOne({ parentId: req.body.parentId }).then(parent => {
					user.parent = parent._id;
					user
						.save()
						.then(user => res.status(200).json(user))
						.catch(err => console.log(err));
				});
			} else {
				res.status(400).json({ err: "parent not found" });
			}
		});
	}
);
router.post(
	"/addMentor",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Student.findById(req.user._id).then(user => {
			if (user) {
				Mentor.findOne({ employeeId: req.body.employeeId }).then(mentor => {
					user.mentor = mentor._id;
					user
						.save()
						.then(user => res.json(mentor))
						.catch(err => console.log(err));
				});
			}
		});
	}
);
router.post(
	"/food",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Student.findById(req.user._id).then(user => {
			if (user) {
				let d = new Date();
				let p = d.getHours();
				if (p < 10) {
					user.brakefastToken = true;
				} else if (p > 12 && p < 15) {
					user.lunchToken = true;
				} else if (p > 19 && p < 11) {
					user.dinnerToken = true;
				}
				user.save().then(result => res.send(result));
			}
		});
	}
);

router.post(
	"/attendance",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		async function creatAttendance() {
			var d = new Date();
			const body = {
				studentDetail: req.user._id,
				checking: {
					type: "req.body.type"
				}
			};
			const attendacnce = new Attendacnce(body);

			const result = await attendacnce.save();
			res.json(result);
		}
		creatAttendance();

		// Student.findById(req.user._id).then(user => {
		// 	if (user) {

		// 	}
		// });
	}
);

router.post(
	"/addWarden",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Student.findById(req.user._id).then(user => {
			if (user) {
				Warden.findOne({ employeeId: req.body.employeeId }).then(warden => {
					user.warden = warden._id;
					user
						.save()
						.then(user => res.json(warden))
						.catch(err => console.log(err));
				});
			}
		});
	}
);

router.post(
	"/addSecurityGuard",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Student.findById(req.user._id).then(user => {
			if (user) {
				SecurityGuard.findOne({ employeeId: req.body.employeeId }).then(
					SecurityGuard => {
						user.securityGuard = SecurityGuard._id;
						user
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					}
				);
			}
		});
	}
);

module.exports = router;
