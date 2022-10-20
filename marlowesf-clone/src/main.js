import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import '../src/style/backgrond.css'
import '../src/style/main.css'
import '../src/style/navBar.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)

const app = createApp(App)
app.use(createVuestic())
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)