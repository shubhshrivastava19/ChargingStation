import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'

// Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Theme setup (optional)
const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)

// ✅ Then apply plugins
app.use(router)
app.use(vuetify)
app.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your key
  },
})

app.mount('#app')
