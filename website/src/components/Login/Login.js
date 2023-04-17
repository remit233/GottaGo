import LoginButton from "../LoginButton/LoginButton"
import LogoutButton from "../LogoutButton/LogoutButton"
import Profile from "../Profile/Profile"

export default function Login() {
    return(
        <div className="login">
            <LoginButton/>
            <br/>
            <LogoutButton/>
            <br/>
            <Profile/>
        </div>
    )
}