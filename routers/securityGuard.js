const express = require("express");
const router = express.Router();
const _ = require("lodash");

const SecurityGuard = require("../models/securityGuard");
const Pass = require("../models/pass");

const bcrypt = require("bcryptjs");
const keys = require("../config/keys");

const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/all", (req, res) => {
	res.json({ msg: "securityGuard test works" });
});
//get current user

//Register of securityGuard
router.post("/register", (req, res) => {
	async function createsecurityGuard() {
		SecurityGuard.findOne({ employeeId: req.body.employeeId }).then(user => {
			if (user) {
				return res.json({ error: "Employee ID already present" });
			} else {
				const body = {
					name: req.body.name,
					employeeId: req.body.employeeId,
					password: req.body.password,
					type: req.body.type,
					phoneNo: req.body.phoneNo
				};

				const securityGuard = new SecurityGuard(body);

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(securityGuard.password, salt, (err, hash) => {
						if (err) throw err;
						securityGuard.password = hash;

						securityGuard
							.save()
							.then(users => res.json(users))
							.catch(err => console.log(err));
					});
				});
			}
		});
	}

	createsecurityGuard();
});

//Get all applied pass
router.get(
	"/pass",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		async function getPass() {
			const pass = await Pass.find({
				mentorApporval: true,
				wardenApproval: true,
				parentApproval: true
			}).populate("studentDetail");

			res.send(pass);
			// console.log(`${pass[0].studentDetail.parent}` === `${req.user._id}`);
		}
		getPass();
	}
);

router.post("/login", (req, res) => {
	const employeeId = req.body.employeeId;
	const password = req.body.password;

	SecurityGuard.findOne({ employeeId: employeeId }).then(user => {
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
