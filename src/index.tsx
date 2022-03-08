import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/system'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'

import { persistor, store } from './redux/store'
import theme from './muiConfig'
import './scss/index.scss'



ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)