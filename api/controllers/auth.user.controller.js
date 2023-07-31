
const companySchema = require("../models/company.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// ==============================|| Register ||============================== //

const signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(req.body);
    console.log(typeof req.body.password, req.body.password);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    console.log(typeof hashedPass, hashedPass);

  
    //see if user exist or not
    const companyExist = await companySchema.findOne({ email: req.body.email });
    if (companyExist) {
      return res.status(400).send({ msg: "compaany already exists" });
    }

 
   if (req.body.role == "company") {
      const newCompany = new companySchema({
        ...req.body,
        password: hashedPass,
      });
      const company = await newCompany.save();
      return res
        .status(200)
        .json({ msg: "Company successfully created", company });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// ==============================|| Login ||============================== //

const signIn = async (req, res) => {
  try {
    //check if the email exist

    const company = await companySchema.findOne({ email: req.body.email });

    if (!company)
      return res.status(400).json({ error: "email does not exist!" });

    //check if the password is valid
    if (company) {
      const validated = await bcrypt.compareSync(
        req.body.password,
        company.password
      );
      if (!validated)
        return res.status(400).json({ error: "Wrong password or email" });
    }

    const { password, ...info } = company._doc;

    //if the both are valid then
    const token = jwt.sign(
      {
        id: company._id,
        role: company.role,
        email: company.email,
      },
      process.env.passwordToken
    );

    if (company.role === "admin") {
      // Admins are not required to be verified
      res.cookie("accessToken", token, {}).status(200).send(info);
    } else {
      // Regular users need to be verified
      if (!company.verified) {
        return res.status(400).json({ error: "Company not verified" });
      }
      res.cookie("accessToken", token, {}).status(200).send(info);
    }

    console.log(token);
  } catch (error) {
    console.log(error);

    return res.status(500).json(error);
  }
};
// ==============================|| Logout ||============================== //
const logout = async (req, res) => {
  try {
    // Get the token from the request headers
    const blacklistedToken = req.header("Authorization").split(" ")[1];
    // Decode the token to get the user ID
    const decodedToken = jwt.verify(
      blacklistedToken,
      process.env.passwordToken
    );
    console.log(decodedToken);
    //get only the user id
    const userId = decodedToken.id;
    console.log(userId);
    // Fetch the user from the database
    
    return res
      .status(200)
      .send({ msg: "Logout successfully", blacklistedToken, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
// ==============================|| forgetpassword ||============================== //
/*
const forgetpassword = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const resetToken = jwt.sign(
      { userId: user._id },
      process.env.passwordToken,
      {
        expiresIn: "1h",
      }
    );
    user.resetToken = resetToken;
    await user.save();

    // Send email with password reset link
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Password Reset",
      html: `<p>Please click the following link to reset your password:</p><a href="http://localhost:3000/reset-password/${resetToken}">http://localhost:3000/reset-password/${resetToken}</a>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "Password reset email sent" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
*/
// ==============================|| reset password ||============================== //
/*const resetpassword = async (req, res) => {
  try {
    const resetToken = req.body.resetToken;
    const Password = req.body.password;
    const user = await userSchema.findOne({ resetToken: resetToken });
    if (!user) {
      return res.status(404).json({ error: "Invalid reset token" });
    }
    const decoded = jwt.verify(resetToken, process.env.passwordToken);
    if (decoded.userId !== user._id.toString()) {
      return res.status(404).json({ error: "Invalid reset token" });
    }
    user.password = await bcrypt.hash(Password, 10);
    user.resetToken = undefined;
    await user.save();
    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
*/
// ==============================|| signInWithGoogle ||============================== //

module.exports = {
  signUp,
  signIn,
  logout,

};
