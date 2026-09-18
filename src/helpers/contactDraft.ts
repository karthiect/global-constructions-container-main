export interface ContactDraftInput {
  fullName: string;
  email: string;
  sector: string;
  message: string;
}

export function buildContactDraft(data: ContactDraftInput) {
  const email = {
    to: 'info@theglobalinfra.co',
    subject: `Project Enquiry – ${data.sector} – ${data.fullName}`,
    body: [
      'Hello Global Infra Projects,', '',
      'I would like to enquire about a project.', '',
      `Full Name: ${data.fullName}`, `Email Address: ${data.email}`,
      `Project Sector: ${data.sector}`, '', 'Message:', data.message, '',
      'Regards,', data.fullName,
    ].join('\r\n'),
  };
  const query = (values: Record<string, string>) =>
    new URLSearchParams(values).toString().replace(/\+/g, '%20');

  return {
    mailto: `mailto:${email.to}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`,
    gmail: `https://mail.google.com/mail/?${query({ view: 'cm', fs: '1', to: email.to, su: email.subject, body: email.body })}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?${query(email)}`,
  };
}
