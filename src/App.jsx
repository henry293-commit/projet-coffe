
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Root } from './page/Root'
import { Home } from './page/home/home'
import { Plan } from './page/plan/plan'
import { AboutUS } from './page/About/AboutUS'

function App() {
	const rooter = createBrowserRouter([
		{
			path: '/',
			element: <Root/>,
			children:[
				{
					index: true,
					element: <Home/>
				},
				{
					path:'Aboutus',
					element: <AboutUS/>
				},
				{
					path:'plan',
					element: <Plan/>
				}
			]
		}
	])
  return <RouterProvider router={rooter} />
}

export default App
