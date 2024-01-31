import { Navbar } from "../../components/Navbar/Navbar"
import { Header } from "../../components/header/Header"
import { ResourceContainer } from "../../components/resourceContainer/ResourceContainer"
import './HomePage.css'

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="containerHome">
      <Navbar />
      <ResourceContainer />
      </div>
    </>
  )
}
