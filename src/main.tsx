import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme'
import { CategoryProvider } from './components/category/category-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <CategoryProvider defaultCategory='topik1' storageKey='vite-ui-category'>
        <App />
      </CategoryProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
