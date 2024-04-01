import { Container } from "react-bootstrap"
import Doctors from "../components/Doctors"



const Home = () => {
  return (
    <div>
      <Container className="homePage mt-2">
    <div className="homeHeader">
    <h1 className="text-danger mt-5 text-center">CLARUS HOSPITAL</h1>
    <h3 className="text-info mt-3 text-center">Our Doctors</h3>
    </div>
    <div className="doctorsContainer">
    <Doctors/>
    </div>
    <div className="appointmentList">

    </div>
      </Container>
    </div>
  )
}

export default Home
