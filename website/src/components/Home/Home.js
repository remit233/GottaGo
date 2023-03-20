import './Home.css'

export default function Home() {
    return (
        <div className="home section">
            <div>Find a bathroom</div>
            <h3>Search Nearby:</h3>
            <form>
              <input type="text" name="search"/>
            </form>
            <iframe width="600" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=New%20York%2C%20NY%2C%20USA&key=AIzaSyDt0NalJz9Lv430qO-uLwX5mziKD28tUjE"></iframe>
        </div>
    )
}