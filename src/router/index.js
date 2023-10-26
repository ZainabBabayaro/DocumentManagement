import { createRouter, createWebHistory } from "vue-router";
import LandingPage from '../components/pages/LandingPage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
     
        {
            path: '/', 
            name: 'landing-page',
            component: LandingPage,
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
              import(
                '../components/pages/Login.vue'
              ),
        },
        {
          path: '/register',
          name: 'register',
          component: () =>
            import(
              '../components/pages/Register.vue'
            ),
        },
        {
          path: '/home',
          name: 'home',
          component: () =>
            import(
              '../components/pages/Home.vue'
            ),
        },
        {
          path: '/account-setting',
          name: 'account-setting',
          component: () =>
            import(
              '../components/pages/AccountSetting.vue'
            ),
        },
        // {
        //   path: "/manager/members",
        //   name: "members",
        //   component: () =>
        //     import(
        //      "../components/pages/DocumentManager/Members.vue"
        //     ),
        // },
        {
          path: '/secure-folder',
          name: 'secure-folder',
          component: () =>
            import(
              '../components/pages/SecureFolder.vue'
            ),
        },
        // {
        //   path: "/manager/secretariat",
        //   name: "secretariat",
        //   component: () =>
        //     import("../components/pages/DocumentManager/Secretariat.vue"),
        //   children: [
            {
              path: "/manager/members",
              name: "members",
              component: () =>
                import(
                 "../components/pages/DocumentManager/Members.vue"
                ),
            },
            {
              path: "/manager/sent",
              name: "sent",
              component: () =>
                import(
                   "../components/pages/DocumentManager/Sent.vue"
                ),
            },
            {
              path: "/manager/signed",
              name: "signed",
              component: () =>
                import(
                   "../components/pages/DocumentManager/Signed.vue"
                ),
            },
            
          // ],
        // },
      ]
  })
  
  
  export default router
  