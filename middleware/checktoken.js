import jwt from "jsonwebtoken";

const checkToken = (role) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(403).json({ message: "you are not authorized" });
      }
      const ogToken = token.split(" ")[1];

      const secretkey = process.env.DOCTOR_SECRET_KEY;
      const isValid = jwt.verify(ogToken, secretkey);
      if (!role.includes(isValid.role)) {
        return res.status(403).json({ message: "you are not authorized" });
      }

      next();
    } catch (e) {
      return res.status(403).json({ message: "you are not authorized" });
    }
  };
};

export default checkToken;
