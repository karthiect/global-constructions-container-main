import sendEmail from '../helpers/sendEmail';
import { generateEnquiryEmail, generateReplyEmail } from '../helpers/emailTemplates';

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
  sector: string;
}

export const contactService = {
  /**
   * Handles the complete contact form submission process:
   * 1. Sends enquiry to admin(s)
   * 2. Sends auto-reply to the user
   */
  async sendContactEnquiry(data: ContactFormData) {
    const { fullName, email, message, sector } = data;

    // 1. Send Enquiry Email to Admins
    const adminEmails = [
      import.meta.env?.VITE_SENDER_EMAIL_ONE ?? "",
      import.meta.env?.VITE_SENDER_EMAIL_TWO ?? ""
    ].filter(Boolean);

    const enquiryParams = {
      username: import.meta.env?.VITE_USERNAME ?? "",
      password: import.meta.env?.VITE_PASSWORD ?? "",
      templateCode: import.meta.env?.VITE_TEMPLATE_CODE ?? "",
      to: adminEmails,
      placeholders: {
        from_name: fullName,
        to_name: import.meta.env?.VITE_SENDER_NAME ?? "Admin",
        message: generateEnquiryEmail(fullName, email, sector, message),
      },
    };

    const adminResponse = await sendEmail(enquiryParams);

    if (adminResponse.status !== 'success' || adminResponse.data?.status === 'failed') {
      throw new Error(adminResponse.message || 'Failed to send enquiry to admin');
    }

    // 2. Send Auto-Reply to User
    const replyParams = {
      username: import.meta.env?.VITE_USERNAME ?? "",
      password: import.meta.env?.VITE_PASSWORD ?? "",
      templateCode: import.meta.env?.VITE_REPLY_TEMPLATE_CODE ?? "",
      to: [email],
      placeholders: {
        to_name: fullName,
        message: generateReplyEmail(fullName),
      },
    };

    await sendEmail(replyParams);

    return adminResponse;
  }
};
