import Home from '@/views/Home.vue'
import Store from '@/views/Store.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import ThankYou from '@/views/ThankYou.vue'
import Connexion from '@/views/Connexion.vue'
import Recherche from '@/views/Recherche.vue'
import Register from '@/views/Register.vue'
import Profil from '@/views/Profil.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/store', name: 'store', component: Store },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/checkout', name: 'checkout', component: Checkout },
  { path: '/recherche', name: 'recherche', component: Recherche },
  { path: '/connexion', name: 'connexion', component: Connexion },
  { path: '/inscription', name: 'inscription', component: Register },
  { path: '/profil', name: 'profil', component: Profil },
  { path: '/thank-you', name: 'thankyou', component: ThankYou }
]
