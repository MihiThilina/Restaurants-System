import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import '../src/style/backgrond.css'
import '../src/style/main.css'
import '../src/style/navBar.css'
import 'vuesax/dist/vuesax.css'


const app = createApp(App)
app.use(createVuestic())
app.mount('#app')

