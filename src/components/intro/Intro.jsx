import "./intro.css"
import Me from "../../img/me.png"
import Melikebatman from "../../img/melikebatman.png"
import Ballon from "../../img/ballon.png"
import Hi from "../../img/hi.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Matheus Macedo</h1>
                <div className="i-tittle">
                    <div className="i-tittle-wrapper">

                        <div className="i-tittle-item">Front-End Web/Mobile</div>
                        <div className="i-tittle-item">UI/UX Design</div>
                        <div className="i-tittle-item">Machine Learning</div>
                        <div className="i-tittle-item">React and React Native</div>
                        <div className="i-tittle-item">Python</div>

                    </div>
                </div>
                <p className="i-desc">
                    I wanted to be <b>The Batman</b> but i have not his billions, so I became <span style={{color: "blue"}}><b>Computer Engineer</b></span>.
                </p>
            </div>
            <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                stroke="red"
                className="i-scroll"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g id="scroll">
                    <path
                    id="Vector"
                    d="M40.5 15L34.5 9L28.5 15"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path
                    id="Vector_2"
                    d="M28.5 24L34.5 30L40.5 24"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <g id="Group">
                    <path
                        id="Vector_3"
                        d="M9 37.5H60"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </g>
                    <path
                    id="Vector_4"
                    d="M34.5 27V9"
                    stroke-width="2.9895"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <g id="Group_2">
                    <path
                        id="Vector_5"
                        d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </g>
                </g>
            </svg>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="My pic" className="i-img-me" />
            <img src={Melikebatman} alt="My pic" className="i-img-bat" />
            <img src={Ballon} alt="My pic" className="i-img-ballon" />
            <img src={Hi} alt="My pic" className="i-img-hi" />
        </div>
    </div>
  )
}

export default Intro