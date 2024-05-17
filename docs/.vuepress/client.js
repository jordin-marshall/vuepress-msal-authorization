import { PublicClientApplication } from '@azure/msal-browser';
import { checkAuth, createToken, login } from "./helper.js"
import Login from "../components/Login.vue"


//import { msalConfig } from './config/msalConfig.js';
import { defineClientConfig } from 'vuepress/client';



export default defineClientConfig({

  async enhance({ app, router, siteData }) {
    router.beforeEach(async (to, from, next) => {
      if (to.path == '/unauthorized.html' && checkAuth()) {
        next('/')
      }
      if (to.path !== '/unauthorized.html') {
        if (!checkAuth()) {
          try {
            const tokenCreated = await login()
            if(tokenCreated) next()
          } catch (err) {
            next('/unauthorized.html')
          }
        } else {
          next()
        }
      } else {
        next()
      }
    });
    app.component('Login', Login)
  },
  setup() {},
  rootComponents: [],
})

function unAuthorizedNav(to) {
  return [to.fullPath, to.path].includes('unauthorized') ? true : false
}