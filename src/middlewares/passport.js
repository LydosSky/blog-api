import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import 'dotenv/config';
import models from '../models';

/**
 * Middleware to use authentication
 *
 *
 * This the the guide
 * https://www.passportjs.org/packages/passport-jwt/
 * */

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
      return models.user
        .getUserById(jwtPayload.userId)
        .then((user) => (!user ? done(null, false) : done(null, user)))
        .catch((error) => done(error, false));
    },
  ),
);

export default passport;
