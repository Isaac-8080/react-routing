import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider } from "react-router-dom"
  
  import Home from "../Pages/Home"
  import About from "../Pages/About"
  import Contact from "../Pages/Contact"
  import Services from "../Pages/Services"
  import Layout from "../PageLayouts/Layout"
  import ServiceDetails from "../Pages/ServiceDetails"

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<ServiceDetails />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router
