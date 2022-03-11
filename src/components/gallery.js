import { useState, useEffect } from "react";
import Nav from "./Navigation"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"


const Gallery = () => {

    const [beer, setBeer] = useState([])


    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBeer(data)
            })
    }, [])



    return (
        <>


            {beer.map((el, ind) => {
                return (
                    <section className="mainLayout">
                        <div className="beerDetails" >
                            <div className="beerImg"  >
                                <img src={el.image_url} alt="beer" />
                            </div>
                            <div className="beerDescr" key={ind}>
                                <h2 className="name">{el.name}</h2>
                                <h4 className="tagline">{el.tagline}</h4>
                                <h6 className="contributed">{el.contributed_by.replace(/<.*>/, "")}</h6>
                                <Link to={`/gallery/${el._id} `}><button className="button">Details</button></Link>
                                <Outlet />
                            </div>
                        </div>
                    </section>)


            })}

            <Nav />
        </>
    )
}

export default Gallery