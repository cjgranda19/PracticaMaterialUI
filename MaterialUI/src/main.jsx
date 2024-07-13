import React from 'react'
import ReactDOM from 'react-dom/client'
import AppBar from './AppBar'
import Card from './Card'
import ImageList from './ImageList'
import Footer from './Footers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppBar />
    <Card/>
    <ImageList/>
    <Footer/>
  </React.StrictMode>,
)
