module.exports = {
  app:{
      port: 3000,
      protocal: 'http',
      host: 'localhost',
  },

  email:{
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: 'santhiyaptsm@gmail.com',
          pass: ''
      }
  }
}
