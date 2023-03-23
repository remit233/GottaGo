import './Home.css'

export default function Home() {
    return (
        <div className="home section">
            <h1 className='text-align-center'>Gotta Go?</h1>
            <h2>Search Nearby:</h2>
            <form>
              <input type="text" name="search"/>
            </form>
            <iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDt0NalJz9Lv430qO-uLwX5mziKD28tUjE&center=40.76930565282415,-73.96456718034894&zoom=13"></iframe>
        </div>
    )
}