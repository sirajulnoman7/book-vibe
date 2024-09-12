import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import BookList from './Components/BookList/BookList.jsx'
import PageToBook from './Components/PageToBook/PageToBook.jsx'
import BookInfo from './Components/BookInfo/BookInfo.jsx'
import Book from './Components/Book/Book.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/list_books',
        element:<BookList></BookList>
      },
      {
        path:'/pages_to_book',
        element:<PageToBook></PageToBook>
      },
      {
        path:'/book/:id',
        loader:()=> fetch('../public/books.json'),
        element:<BookInfo></BookInfo>,
      }

    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
