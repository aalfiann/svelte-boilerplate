import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    appName: 'Svelte',
    appVersion: '1.0.0'
  }
})

export default app
