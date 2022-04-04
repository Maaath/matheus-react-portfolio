import "./contact.css"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"
import Letter from "../../img/letter.jpg"
import { useContext, useRef } from "react"
import emailjs from '@emailjs/browser'
import { ThemeContext } from "../../context"

const Contact = () => {

    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_leubw4n', 'template_0d394v8', formRef.current, 'Yoe-jaasdKNHz9izO')
        .then((result) => {
            console.log(result.text);
            alert("Email sent, thank you!");
            formRef.current.reset();
        }, 
        (error) => {
          console.log(error.text);
        });
    }

    return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Interested in my work?
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        <a href="mailto:macedo.matheus81@gmail.com" className="c-link" target="_blank" rel="noreferrer">macedo.matheus81@gmail.com</a>    
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Linkedin} alt="" className="c-icon" />
                        <a href="https://www.linkedin.com/in/math-macedo/" className="c-link" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Github} alt="" className="c-icon" />
                        <a href="https://github.com/Maaath" className="c-link" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        <p style={{color:"#0073b1"}}>Rio Grande - RS</p>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="c-desc-right">
                    <a href="https://www.vecteezy.com/vector-art/124291-free-hogwarts-2-vectors" target="_blank" rel="noreferrer"><img src={Letter} alt="" className="c-desc-icon" /></a>
                    <p className="c-desc">
                        <b>Contact me !</b> Even if it's not my Hogwarts letter, I will be happy with your contact.
                    </p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
                    <textarea style={{resize: "none", backgroundColor: darkMode && "#333"}} name="message" rows="5" placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
