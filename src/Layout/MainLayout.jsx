import { Outlet } from "react-router-dom"
import Header from "../Componets/Shared/Header/Header"
import Footer from "../Componets/Shared/Footer/Footer"


const MainLayout = () => {
  return (
    <>
        <Header/>
        <div>
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout