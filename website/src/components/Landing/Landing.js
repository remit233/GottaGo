import './Landing.css'
import Home from '../Home/Home.js'
import Download from '../Download/Download.js'
import AboutUs from '../AboutUs/AboutUs.js'
import Login from '../Login/Login.js'

export default function Landing() {
    return(
        <div className="landing">
            <Home />
            <AboutUs />
            <Download />
        </div>
    )
}