const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD
    }
})

const sendWelcomeMail = (email, name) => {
    transporter.sendMail({
        from: "Task-Manager API <grv.devmail@gmail.com>",
        to: email,
        subject: `Welcome to Task-Manager, ${name}!`,
        text: `Welcome to the app, ${name}. We hope we can serve you in the best way possible. If you have any queries about our services, feel free to reply to this email.`
    })
}

const sendLeavingMail = (email, name) => {
    transporter.sendMail({
        from: "Task-Manager API <grv.devmail@gmail.com>",
        to: email,
        subject: `We are sorry to see you go, ${name}.`,
        text: `Goodbye, ${name}. We would like to get your feedback about our services. Feel free to reply to this email and let us know what didn't work out.`    
    }) 
}

module.exports = {
    sendWelcomeMail,
    sendLeavingMail
}