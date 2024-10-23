import template from './email.html?raw';

const a1 = atob('YXBpLWtleQ==');
const b1 = atob(
  'eGtleXNpYi0xZTVlNGViYjBhOGYyZjUyMDlmYzQ3MWY5MzZmYjY5NzkyMWRiNzViZjQzN2FlOWVmNjAxYmIxZmJlNmRkNDY1LW5ITWZlbWFkbTl2RXJXNnI='
);

const sendEmail = async (name, mail, content) => {
  let html = template.replace('[NAME]', name.trim());
  html = html.replace('[MAIL]', mail.trim());
  if (content.trim() !== '') {
    let info = `<tr><td><strong>Wiadomość:<br></strong> <i>${content}</i></td></tr><tr><td height="10">&nbsp;</td></tr>`;
    html = html.replace('[INFO]', info);
  } else {
    html = html.replace('[INFO]', '');
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      [a1]: b1
    },
    body: JSON.stringify({
      sender: {
        email: 'kontakt@wojciechpatro.eu'
      },
      to: [{ email: "wojtek.patro@gmail.com" }],
      replyTo: { email: mail },
      subject: 'Wojciech Patro - kontakt',
      htmlContent: html
    })
  });

  console.group("mail")
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.groupEnd();
  return response.status <= 299;
};

export default sendEmail;
