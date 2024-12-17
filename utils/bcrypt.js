import bcrypt from "bcrypt";

const generateHashedPassword = async (passsword) => {
  return await bcrypt.hash(passsword, 1);
  // return hashedPassword
};

const comparePassword = async (passsword, userpassword) => {
  return await bcrypt.compare(passsword, userpassword);
};

export { generateHashedPassword, comparePassword };
