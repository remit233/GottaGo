import './Home.css'

export default function Home() {
    return (
        <div className="home section">
            <h1 className='home-header1'>let's go weewee :3</h1>
            <h2 className='home-header2'>search nearby:</h2>
            
            <form className='search-bar'>
                <input type="text" name="search" placeholder='where da bathroom at...'/>
            </form>
        
            <iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDt0NalJz9Lv430qO-uLwX5mziKD28tUjE&center=40.76930565282415,-73.96456718034894&zoom=13"></iframe>
        </div>
    )
}