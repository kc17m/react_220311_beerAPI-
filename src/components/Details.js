import Nav from "./Navigation"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "../arrow-left-circle.svg";
import { Link } from "react-router-dom";

const Details = () => {
    let apiId = useParams("_id");
    console.log(apiId)

    const [beerdetail, setBeerdetail] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBeerdetail(data)
            })
    }, [apiId])



    return (
        <>
            <Nav />
            <section className="mainLayout">
                <figure className="beerDetailImg">
                    <img src={beerdetail.image_url} alt="beer" />
                </figure>
                <h2 className="name">{beerdetail.name}</h2>
                <h4 className="tagline">{beerdetail.tagline}</h4>
                <article className="flex"><h5>First brewed:</h5><h5>{beerdetail.first_brewed}</h5></article>
                <article className="flex"><h5>Attentuation Level: </h5> <h5> {beerdetail.attenuation_level}</h5></article>
                <h5>{beerdetail.description}</h5>

                <Link to="/gallery"><img className="arrow" src={arrow} alt="arrow" /></Link>
            </section>
        </>


    );
}

export default Details;
