import './Landing.css'

export default function Landing() {
    return(
        <div className="landing">
            <h1>Find a bathroom</h1>
            <h3>Search Nearby:</h3>
            <form>
              <input type="text" name="search"/>
            </form>
        </div>
    )
}