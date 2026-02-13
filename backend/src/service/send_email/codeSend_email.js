import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({
    path: '../../.env'
})

console.log(process.env.HOST_EMAIL);

const transport = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: Number(process.env.PORT_EMAIL),
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    },
    tls: {
    rejectUnauthorized: false
}
});

export async function SendEmail(email) {

    transport.sendMail({
    from: process.env.USER,
    to: email, //
    subject: 'teste de envio',
    html: `<h1>Olá mundo ${email} </h1>`,
    text: 'Olá mundo'
})
.then(info => {
    console.log('Email enviado:', info.messageId);
})
.catch(err => {
    console.error('Erro ao enviar email:', err);
});
  
}
const gmail = "railanrailan080@gmail.com"
SendEmail(gmail)