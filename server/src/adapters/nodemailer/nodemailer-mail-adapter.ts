import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

//Para o envio de e-mails, utilizaremos a dependência Nodemailer e o Mailtrap para ambiente de produção
//npm install nodemailer
//npm install @types/nodemailer -D
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "82692821aaf8d5",
        pass: "8eeab088c3b6ab"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <gunascsouza@gmail.com>',
            to: 'Gustavo Nascimento <gunascsouza@gmail.com>',
            subject,
            html: body,
        })
    }
}