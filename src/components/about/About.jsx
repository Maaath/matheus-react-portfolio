import "./about.css"
import Matheus from "../../img/matheus.jpg"
import Furg from "../../img/furg.png"
import Nvidia from "../../img/nvidia.png"

const About = (props) => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg">
                
            </div>
            <div className="a-card">
                <img src={Matheus} alt="" className="a-img" />
            </div>

        </div>
        <div className="i-right">
            <h1 className="a-title"> About Me</h1>
            <p className="a-sub">
                &emsp;Hi, my name is Matheus, I am from São Paulo-SP, currently in Rio Grande-RS, completing my last year of graduation (however, I have no obstacles for a possible change of city), I am 24 years old, charismatic, responsible, empathetic and punctual are some of my notable characteristics.
                I have a great interpersonal relationship and I am comfortable with group projects, even taking on coordinating roles.
            </p>
            <p className="a-desc">
                My interest areas are: Artificial Intelligence, Front-end Web and Mobile Development, and I.T. Management.
            </p>
            <div className="a-education">
                <img src={Furg} alt="" className="a-education-img" />
                <div className="a-education-texts">
                    <h4 className="a-education-title">Computer Engineering (2017 - Feb 2023)</h4>
                    <p className="a-education-desc">
                    Federal University of Rio Grande - <a className="a-education-link furg" href="http://furg.br" target="_blank" rel="noreferrer">FURG</a>
                    </p>
                </div>
            </div>
            <div className="a-education">
                <img src={Nvidia} alt="" className="a-education-img" />
                <div className="a-education-texts">
                    <h4 className="a-education-title">Fundamentals of Deep Learning for Computer Vision (2019)</h4>
                    <p className="a-education-desc">
                    <a className="a-education-link nvidia" href="https://courses.nvidia.com/certificates/ef5a0c3c40b9494eb40864be8cd3b972/" target="_blank" rel="noreferrer">NVIDIA</a>
                    </p>
                </div>
            </div>
            <div className="a-education">
                <div className="a-education-texts">
                    <h4 className="a-education-title">See more in my <a className="a-education-link linkedin" href="https://www.linkedin.com/in/math-macedo" target="_blank" rel="noreferrer">LinkedIn</a></h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About