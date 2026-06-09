# Priyansu Travels — Web3Forms Contact Integration

This repository uses Web3Forms to submit the contact form on `src/pages/Contact.jsx`.

## What is Web3Forms?
Web3Forms is a hosted form backend that accepts form submissions via `POST` and forwards them to email, Slack, Discord, or custom webhooks.

## How this project uses Web3Forms
The contact form sends form data to `https://api.web3forms.com/submit` using `fetch()`.

The current implementation is in:
- `src/pages/Contact.jsx`

It builds a `FormData` payload with:
- `access_key` — your Web3Forms API key
- `subject`
- `redirect` set to `false`
- `botcheck`
- all form input fields: `name`, `phone`, `email`, `service`, `travelDate`, `passengers`, `message`

## Setup
1. Create a Web3Forms account at [https://web3forms.com](https://web3forms.com).
2. Add a new form and get your `access_key`.
3. Open `src/pages/Contact.jsx`.
4. Replace the placeholder value in `WEB3FORMS_KEY` with your actual key:

```js
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_KEY_HERE';
```

## Optional: use environment variables
For better security, replace the hardcoded key with an environment variable.

1. Create a `.env` file in the project root.
2. Add:

```env
VITE_WEB3FORMS_KEY=your_actual_web3forms_key
```

3. Update `src/pages/Contact.jsx`:

```js
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
```

4. Restart the Vite development server.

## Run locally
```bash
npm install
npm run dev
```

## Notes
- The form has built-in validation for name, phone, and service selection.
- The form currently sends success/error state directly to the UI.
- If you want email delivery, configure your form settings inside the Web3Forms dashboard.

## Troubleshooting
- If submissions fail, verify your API key and check browser console/network logs.
- Confirm that `https://api.web3forms.com/submit` is reachable from your environment.
- Ensure `redirect` is set to `false` if you do not want automatic page redirects.
