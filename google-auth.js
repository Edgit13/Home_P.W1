// ...new file...
// Replace with your OAuth 2.0 Web Client ID from Google Cloud Console
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

window.onload = () => {
  if (window.google && GOOGLE_CLIENT_ID) {
    // initialize automatic rendering of the sign-in button
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse
    });

    // standard button
    google.accounts.id.renderButton(
      document.querySelector('.container') || document.body,
      { theme: 'outline', size: 'large', type: 'standard', text: 'continue_with' } // options
    );

    // optional: prompt One Tap (comment out if unwanted)
    // google.accounts.id.prompt();
  }
};

function parseJwt (token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

function handleCredentialResponse(response) {
  const payload = parseJwt(response.credential);
  if (!payload) {
    alert('Google sign-in failed (invalid token).');
    return;
  }

  // payload contains: email, name, picture, sub (user id), etc.
  console.log('Google user:', payload);
  // Example: show email and redirect to index.html
  alert('Signed in as: ' + (payload.email || payload.name));
  // TODO: send response.credential (ID token) to your server for verification / session creation
  window.location.href = 'index.html';
}