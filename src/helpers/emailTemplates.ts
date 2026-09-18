/**
 * Generates a professional HTML enquiry email for the admin.
 */
export const generateEnquiryEmail = (name: string, email: string, sector: string, message: string) => {
  return `
    Name: ${name} <br/>
    Email: ${email} <br/>
    Project Type: ${sector} <br/>
    Message: <br/>${message}
  `;
};

/**
 * Generates a friendly auto-reply email for the user.
 */
export const generateReplyEmail = (name: string) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden;">
      <div style="background-color: #1C2E57; color: #ffffff; padding: 32px 24px; text-align: center;">
        <p style="margin: 0; color: #ef7e39; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Global Containers</p>
        <h1 style="margin: 8px 0 0; font-size: 24px;">Thank You for Contacting Us</h1>
      </div>

      <div style="padding: 40px 32px; background-color: #ffffff; text-align: center;">
        <p style="font-size: 16px; color: #333333; line-height: 1.6; margin-bottom: 24px;">
          Hello <strong>${name}</strong>,<br><br>
          We've received your message regarding a new project enquiry. Our team is currently reviewing your details and will get back to you shortly.
        </p>
        
        <div style="display: inline-block; padding: 12px 24px; background-color: #ef7e39; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
          We'll Be In Touch Soon
        </div>

        <p style="font-size: 14px; color: #666666; margin-top: 32px;">
          In the meantime, feel free to explore our <a href="https://globalconstructions.com/portfolio" style="color: #1C2E57; font-weight: 600;">latest portfolio</a> to see our global landmarks.
        </p>
      </div>

      <div style="background-color: #fcfcfc; color: #999999; padding: 20px; text-align: center; font-size: 12px; border-top: 1px solid #f0f0f0;">
        <p style="margin: 0;">Global Containers Team</p>
        <p style="margin: 4px 0 0;">3/610, Nadhegoundanpudhur Road,
Manickampalayam, Kunnathur Pudhur (PO),
Kovilpalayam, Coimbatore – 641107</p>
      </div>
    </div>
  `;
};
