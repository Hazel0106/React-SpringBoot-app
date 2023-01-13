export const oktaConfig = {
    clientId: '0oa7vsmeg7xOtvgGq5d7',
    issuer: 'https://dev-82384738.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}