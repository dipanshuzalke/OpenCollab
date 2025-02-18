// should be removed after testing

const users = [
  {
    _id: "1",
    name: "Admin User",
    emailId: "admin@example.com",
    password: "admin123",
    isAdmin: true,
    skills: ["JavaScript", "React", "Node.js"],
    profileImage: "https://geographyandyou.com/images/user-profile.png",
    githubProfile: "https://github.com/admin",
  },
  {
    _id: "2",
    name: "Regular User",
    emailId: "user@example.com",
    password: "user123",
    isAdmin: false,
    skills: ["HTML", "CSS"],
    profileImage: "https://geographyandyou.com/images/user-profile.png",
    githubProfile: "https://github.com/user",
  },
];

module.exports = { users };
