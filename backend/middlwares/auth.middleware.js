const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // Attempt to retrieve the token from various sources
    let authHeader = req.header("Authorization");
    if (authHeader) {
        authHeader = authHeader.replace("Bearer ", "");
    }
    const token = authHeader || req.cookies?.token || req.body?.token;

    if (!token) {
        return res.status(403).json({
            success: false,
            message: "No token found"
        });
    }

    console.log(token, ">> token");

    try {
        // Verify the token and set the userId in the request object
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;

        // Pass the request to the next middleware function
        next();
    } catch (err) {
        // Handle the case of token verification failure
        console.log(err, ">> error during token verification");
        return res.status(403).json({
            success: false,
            message: "Invalid token"
        });
    }
};

module.exports = {
    authMiddleware
};
