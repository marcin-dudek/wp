import template from './email.html?raw';
import axios from 'axios';

const a1 = atob('YXBpLWtleQ==');
const b1 = atob(
  'eGtleXNpYi0xZTVlNGViYjBhOGYyZjUyMDlmYzQ3MWY5MzZmYjY5NzkyMWRiNzViZjQzN2FlOWVmNjAxYmIxZmJlNmRkNDY1LW5ITWZlbWFkbTl2RXJXNnI='
);

const sendEmail = async (name, mail, content) => {
  let html = template.replace('[NAME]', name);
  if (content.trim() !== '') {
    let info = `<tr><td><strong>Your message:<br></strong> <i>${content}</i></td></tr><tr><td height="10">&nbsp;</td></tr>`;
    html = html.replace('[INFO]', info);
  } else {
    html = html.replace('[INFO]', '');
  }

  // @ts-ignore
  let r = await axios.post(
    'https://api.brevo.com/v3/smtp/email',
    {
      sender: {
        name: 'wojciechpatro.eu'
      },
      to: [{ email: "wojtek.patro@gmail.com" }],
      replyTo: { email: mail },
      subject: 'Wojciech Patro - kontact',
      htmlContent: html
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        [a1]: b1
      }
    }
  );

  return r.status <= 299;
};

export default sendEmail;
