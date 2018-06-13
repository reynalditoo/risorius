const JwtStrategy = require('passport-jwt').Strategy; //www.npmjs.com/package/passport
const ExtractJwt = require('passport-jwt').ExtractJwt; // https://www.npmjs.com/package/passport, for login strategies that allow web tokens
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport) {
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt'); // ou fromAuthHeaderAsBearerToken()
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		console.log(jwt_payload.data);
		User.getUserById(jwt_payload.data._id, (err, user) => {
			if(err) {
				return done(err, false);
			}

			if(user) {        
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));
}