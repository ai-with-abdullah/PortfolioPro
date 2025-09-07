export function openWhatsApp(source: string, formData?: Record<string, string>) {
  const phoneNumber = '+923194124382';
  let message = '';
  
  switch(source) {
    case 'portfolio_hero':
      message = 'Hi Muhammad! I visited your portfolio and I\'m interested in discussing a project.';
      break;
    case 'buy_code':
      message = 'Hi Muhammad! I\'m interested in purchasing the source code for one of your projects. Can you provide more details?';
      break;
    case 'view_more_projects':
      message = 'Hi Muhammad! I\'d like to see more of your projects. Can you share additional work samples?';
      break;
    case 'direct_contact':
      message = 'Hi Muhammad! I found your portfolio and would like to connect.';
      break;
    case 'contact_form':
      if (formData) {
        message = `Hi Muhammad! I filled out your contact form:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;
      } else {
        message = 'Hi Muhammad! I\'m interested in your services.';
      }
      break;
    default:
      message = 'Hi Muhammad! I\'m interested in your services.';
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
