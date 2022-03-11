import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>

            <figure>
                <Link to="/gallery">
                    <img src="beerBack.png" alt="beer" />
                    <figcaption className="beersCaption"><h2>All Beers</h2></figcaption>
                </Link>
                <p className="mainP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatem commodi mollitia dolores! Culpa, ipsum?</p>
            </figure>


            <figure>
                <Link to="/random">
                    <img src="https://images.unsplash.com/photo-1441985969846-3e7c90531139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="beer" />
                    <figcaption className="beersCaption"><h2>Random Beer</h2></figcaption>
                </Link>
                <p className="mainP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatem commodi mollitia dolores! Culpa, ipsum?</p>
            </figure>
        </div>
    )
}


export default Home