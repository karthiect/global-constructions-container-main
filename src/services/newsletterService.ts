import sendEmail from '../helpers/sendEmail';

export const newsletterService = {
  /**
   * Handles newsletter subscription
   */
  async subscribeNewsletter(email: string) {
    const adminEmails = [
      import.meta.env?.VITE_SENDER_EMAIL_ONE ?? "",
      import.meta.env?.VITE_SENDER_EMAIL_TWO ?? ""
    ].filter(Boolean);

    const newsletterParams = {
      username: import.meta.env?.VITE_USERNAME ?? "",
      password: import.meta.env?.VITE_PASSWORD ?? "",
      templateCode: import.meta.env?.VITE_NEWSLETTER_TEMPLATE_CODE || import.meta.env?.VITE_TEMPLATE_CODE,
      to: adminEmails,
      placeholders: {
        from_name: 'Newsletter Subscriber',
        to_name: import.meta.env?.VITE_SENDER_NAME ?? "Admin",
        message: `<p>New newsletter subscription from: <strong>${email}</strong></p>`,
      },
    };

    const response = await sendEmail(newsletterParams);

    // Send auto-reply if template exists, or fallback to newsletter-specific message
    const replyParams = {
      username: import.meta.env?.VITE_USERNAME ?? "",
      password: import.meta.env?.VITE_PASSWORD ?? "",
      templateCode: import.meta.env?.VITE_NEWSLETTER_REPLY_TEMPLATE_CODE || import.meta.env?.VITE_REPLY_TEMPLATE_CODE || "",
      to: [email],
      placeholders: {
        to_name: 'Subscriber',
        message: `
          <div style="text-align: center;">
            <h1 style="color: #0AD2C9; font-size: 24px;">Successfully Subscribed!</h1>
            <p style="color: #777777; font-size: 16px;">Check your email for product details</p>
          </div>
        `,
      },
    };

    if (replyParams.templateCode) {
      await sendEmail(replyParams);
    }

    return response;
  }
};
