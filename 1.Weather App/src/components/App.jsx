import './App.css'
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import Body from './Body.jsx'

const Applayout=()=>{
  return(
    <div>
      <Outlet/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      }
    ]
  }

])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};
  

export default App
