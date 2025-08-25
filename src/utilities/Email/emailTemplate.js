import jwt from 'jsonwebtoken';

export const emailTemplate = (email) => {
  const token = jwt.sign({ email }, (process.env.JWT_SECRET || 'secret') + '_MAIL', {
    expiresIn: '3d'
  });
  const verifyUrl = `${process.env.CLIENT_VERIFY_URL}/${token}`;
  return `<!DOCTYPE html><html><body>
    <h2>Please verify your email</h2>
    <p>Click the button below to verify your account.</p>
    <p><a href="${verifyUrl}" style="padding:10px 16px; background:#0057FF; color:#fff; text-decoration:none; border-radius:6px;">Verify my account</a></p>
  </body></html>`;
};
