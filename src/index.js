import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// Add our style
import './assets/style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
