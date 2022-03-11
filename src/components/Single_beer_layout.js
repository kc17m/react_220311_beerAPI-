const SingleBeerLayout = (props) => {
    return (
        <>
            <section className="beerlayout">
                <figure><img src={props.img} alt="beer" /></figure>
                <div>
                    <h1>{props.name}</h1>
                    <h3 className="yellowSlogan">{props.slogan}</h3>
                    <h4 className="producer">Created by: {props.producer}</h4>
                    <button>Details</button>
                </div>

            </section>
        </>

    )
}

export default SingleBeerLayout