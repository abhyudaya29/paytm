const { z } = require("zod");

// Define the signUpSchema using zod
const signUpSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .max(30, "Username must be less than 30 characters long.")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain alphanumeric characters and underscores.")
        .toLowerCase()
        .trim(),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long."),
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters long.")
        .max(50, "First name must be less than 50 characters long."),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters long.")
        .max(50, "Last name must be less than 50 characters long."),
});

// Export the schema
module.exports = signUpSchema;
