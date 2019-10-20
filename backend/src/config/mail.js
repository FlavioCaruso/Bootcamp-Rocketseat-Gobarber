export default {
  host: process.env.MAIL_HOST,
  port: process.env.PORT,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'Flavio Caruso <noreply@gobarber.com>',
  },
};
