import './Landing.css'
import Home from '../Home/Home'
import Download from '../Download/Download'
import AboutUs from '../AboutUs/AboutUs'
import Login from '../Login/Login'

export default function Landing() {
    return(
        <div className="landing">
            <Home />
            <Download />
            <AboutUs />
        </div>
    )
}