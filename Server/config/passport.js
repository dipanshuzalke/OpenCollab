const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const bcrypt = require("bcrypt");
const userModel = require("../models/user");

// GitHub credentials (move these to environment variables for production)
const GITHUB_CLIENT_ID = "4b1018f34e5bed6d7ed1";
const GITHUB_CLIENT_SECRET = "1f7e9d23e4e8b85e9f3c3f5e8b4d7c6a9b8c7d6e";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Find or create user
        let user = await userModel.findOne({ githubId: profile.id });

        if (!user) {
          // Hash the access token before storing it as password
          const hashedToken = await bcrypt.hash(accessToken, 10);

          user = await userModel.create({
            name: profile.displayName || profile.username,
            emailId:
              profile.emails?.[0]?.value || `${profile.username}@github.com`,
            password: hashedToken, // Store hashed token as password
            githubProfile: profile.profileUrl,
            githubId: profile.id,
            profileImage:
              profile.photos?.[0]?.value ||
              "https://geographyandyou.com/images/user-profile.png",
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("GitHub authentication error:", err);
        return done(err, null);
      }
    }
  )
);
