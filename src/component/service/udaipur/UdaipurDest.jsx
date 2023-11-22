import Card from "./UdaipurCard"
import './udaipur.css';

function Tours({tours, removeTour}) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Wedding Destinations In Udaipur</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;
