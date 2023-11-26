export interface Email {
  subject: string;
  from: string;
  to: string;
  body: string;
}

export const Emails = {
  send: sendEmail,
};

export function sendEmail(email: Email) {
  throw Error("sendEmail shouldn't be called in tests");
}
