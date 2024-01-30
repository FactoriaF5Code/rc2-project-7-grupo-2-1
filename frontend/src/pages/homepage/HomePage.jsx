import { Navbar } from "../../components/Navbar/Navbar"
import { Header } from "../../components/header/Header"
import { ResourceContainer } from "../../components/resourceContainer/ResourceContainer"
import './HomePage.css'

export const HomePage = () => {
  return (
    <>
      <Header />
      <section className="containerHome">
      <Navbar />
      <ResourceContainer />
      </section>
    </>
  )
}
