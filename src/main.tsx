import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ConutryContext } from './context/Context.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ConutryContext>
            <App />
        </ConutryContext>
    </Provider>
)
