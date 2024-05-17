import Banner from "../Banner/Banner";
import DisplayDonation from "../DisplayDonation/DisplayDonation";
import { useEffect, useState } from "react";


const Home = () => {

    const [donations, setDonations] = useState([]);

    useEffect( () => {
        fetch('donationData.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-24 container mx-auto">
                {
                    donations.map(donation => <DisplayDonation
                    key={donation.id}
                    donation={donation}
                    ></DisplayDonation>)
                }
            </div>
        </div>
    );
};

export default Home;