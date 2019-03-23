const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

const Student = require("../models/student");
const warden = require("../models/warden");
const Parent = require("../models/parents");
const Mentor = require("../models/mentor");
const SecurityGuard = require("../models/securityGuard");

const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			if (jwt_payload.type == "student") {
				Student.findById(jwt_payload.id)
					.then(user => {
						if (user) {
							return done(null, user);
						}
						return done(null, false);
					})
					.catch(err => console.log(err));
			}
			if (jwt_payload.type == "warden") {
				warden
					.findById(jwt_payload.id)
					.then(user => {
						if (user) {
							return done(null, user);
						}
						return done(null, false);
					})
					.catch(err => console.log(err));
			}
			if (jwt_payload.type == "parent") {
				Parent.findById(jwt_payload.id)
					.then(user => {
						if (user) {
							return done(null, user);
						}
						return done(null, false);
					})
					.catch(err => console.log(err));
			}
			if (jwt_payload.type == "mentor") {
				Mentor.findById(jwt_payload.id)
					.then(user => {
						if (user) {
							return done(null, user);
						}
						return done(null, false);
					})
					.catch(err => console.log(err));
			}
			if (jwt_payload.type == "securityGuard") {
				SecurityGuard.findById(jwt_payload.id)
					.then(user => {
						if (user) {
							return done(null, user);
						}
						return done(null, false);
					})
					.catch(err => console.log(err));
			}
		})
	);
};
