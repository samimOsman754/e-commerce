import { Outlet } from "react-router-dom"
import Header from "../Componets/Shared/Header/Header"
import Footer from "../Componets/Shared/Footer/Footer"


const MainLayout = () => {
  return (
    <div className="container mx-auto">
        <Header/>
        <div>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout