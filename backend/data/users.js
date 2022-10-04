import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'v@gmail.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'j@gmail.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Rocky Doe',
    email: 'r@gmail.com',
    password: bcrypt.hashSync('1234', 10),
  },
];

export default users;
