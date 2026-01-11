# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{first_name}} {{last_name}}

From: {{email}}
Phone: {{phone_number}}

Message:
{{message}}

---
Sent from Udantha Wanasingha's Portfolio
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Update Your Code
Replace the placeholder values in `script.js`:

```javascript
// Line 253: Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 271: Replace with your Service ID and Template ID
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
```

## 📧 Current Configuration

The code is currently set up with these placeholder values:
- **Service ID**: `service_3p1bvpq`
- **Template ID**: `template_6ef04xn`
- **Public Key**: `YfY6GLcqiWQiL-EIL`

**⚠️ Important**: These are placeholder values from your React example. You need to replace them with your own EmailJS credentials.

## 🔧 Template Variables

The contact form sends these variables:
- `{{first_name}}` - First Name
- `{{last_name}}` - Last Name  
- `{{email}}` - Email Address
- `{{phone_number}}` - Phone Number (optional)
- `{{message}}` - Message Content

## 🎨 Customization

### Form Fields
You can modify the form fields in `index.html`:
```html
<input type="text" name="first_name" placeholder="First Name" required>
<input type="text" name="last_name" placeholder="Last Name" required>
<input type="email" name="email" placeholder="Email Address" required>
<input type="tel" name="phone_number" placeholder="Phone Number">
<textarea name="message" rows="6" placeholder="Your Message" required></textarea>
```

### Success/Error Messages
Customize messages in `script.js`:
```javascript
// Success message
statusDiv.textContent = 'Message sent successfully! I\'ll get back to you soon.';

// Error message  
statusDiv.textContent = 'Failed to send message. Please try again or contact me directly.';
```

## 🛡️ Security Notes

1. **Public Key**: The public key is safe to use in frontend code
2. **Rate Limiting**: EmailJS has built-in rate limiting
3. **Domain Restrictions**: You can restrict usage to specific domains in EmailJS settings
4. **Spam Protection**: EmailJS includes basic spam protection

## 🧪 Testing

1. Set up your EmailJS account with the steps above
2. Update the configuration in `script.js`
3. Open your portfolio in a browser
4. Fill out and submit the contact form
5. Check your email for the message

## 📱 Features Included

- ✅ Form validation (required fields, email format, phone format)
- ✅ Loading states with spinner animation
- ✅ Success/error message display
- ✅ Form reset after successful submission
- ✅ Responsive design for mobile devices
- ✅ Smooth animations and transitions
- ✅ Auto-hide success messages after 5 seconds

## 🆘 Troubleshooting

### Common Issues:

1. **"Failed to send message"**
   - Check your EmailJS credentials are correct
   - Verify your email service is active
   - Check browser console for detailed error messages

2. **Form not submitting**
   - Ensure all required fields are filled
   - Check that JavaScript is enabled
   - Verify EmailJS script is loaded

3. **Emails not received**
   - Check spam/junk folder
   - Verify email template variables match form field names
   - Test with a simple template first

### Debug Mode:
Add this to see detailed logs:
```javascript
emailjs.sendForm('service_3p1bvpq', 'template_6ef04xn', form)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // ... rest of success handling
    }, function(error) {
        console.log('FAILED...', error);
        console.error('Error details:', error);
        // ... rest of error handling
    });
```

## 📞 Support

If you need help:
1. Check EmailJS documentation: [EmailJS Docs](https://www.emailjs.com/docs/)
2. EmailJS Community: [EmailJS Discord](https://discord.gg/8w4F7hV)
3. Check browser console for error messages

---

**Note**: This setup allows visitors to send you emails directly through your portfolio without exposing your email address publicly.
