const { User } = require("../models/userSchema");

exports.signIn = async (req, res) => {
  const { username, firstName } = req.body;

  try {
    const userExist = await User.findOne({ username: username });

    console.log(userExist, "???user exist");

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "User does not exist. Please sign up.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: {
        username: userExist.username,
        userId: userExist._id,
        // Other data you want to include
      },
    });
  } catch (error) {
    console.log(error, "Error while signing in");
    return res.status(500).json({
      success: false,
      message: "Error while signing in",
    });
  }
};
