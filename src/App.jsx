import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { About, Cocktail, Error, HomeLayout, Landing, NewsLetter,LocalError } from './pages/index.js'
import { loader as landingLoader } from './pages/Landing.jsx'
import { loader as cocktailLoader } from './pages/Cocktail.jsx'
import { action as newsLetterAction } from './pages/NewsLetter.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import { action as searchAction } from './Components/searchForm.jsx'

const client = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000*60*5,
    }
  }
});

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>
      }, {
        path:"/newsLetter",
        element:<NewsLetter/>,
        action: newsLetterAction
      }, {
        index:true,
        loader:landingLoader(client),
        errorElement:<LocalError/>,
        element:<Landing/>,
        // action: searchAction
      },{
        path:'cocktail/:id',
        loader:cocktailLoader(client),
        errorElement:<LocalError/>,
        element:<Cocktail/>
      }
      
    ]
  },
    
])

  return (
    <>
    <QueryClientProvider client={client}>
    
      <ReactQueryDevtools initialIsOpen={false}/>
      <RouterProvider router={router} />
     
    </QueryClientProvider>
    
    </>
    
  )
}

export default App
