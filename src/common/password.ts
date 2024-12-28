import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, await bcrypt.genSalt(10));
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(password, hashedPassword);
};
