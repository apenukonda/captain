import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import RegisterTournamentEmail from './templates';
import Invite from './Invite';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendRegisterTournamentEmail(email: string) {
  const emailHtml = await render(RegisterTournamentEmail());

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Successfully registered',
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
}
export async function sendInvitationEmail(
  email: string,
  teamName: string,
  captainName: string,
  tournamentName: string
) {
  const emailHtml = await render(Invite(teamName, captainName, tournamentName));

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Successfully invited',
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
}