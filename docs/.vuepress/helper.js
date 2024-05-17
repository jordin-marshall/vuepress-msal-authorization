export const STORAGE_KEY = "employee-auth";
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './config/msalConfig.js';

export async function login() {
    const msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
    try {
        const loginResponse = await msalInstance.loginPopup({});
        createToken(loginResponse)
        return true
    } catch (e) {
        throw new Error("Error logging in: ", e);
    }
}

// Do user authorization verify
export function checkAuth() {
  const now = new Date();
  const auth = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (auth && now.getTime() > auth.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
  return auth && Object.keys(auth).length;
}


export function createToken(loginResponse) {
    const data = JSON.stringify({
        username: loginResponse.account.username,
        name: loginResponse.account.name,
        expiry: new Date().getTime() + 1000 * 60 * 60 * 24, // 24 hours
      });
      window.localStorage.setItem(STORAGE_KEY, data);
}