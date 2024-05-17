import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();

    const donation = donations.find(donation => donation.id === parseInt(id));
    const { title, description, picture, price } = donation;
    return (
        <div className="container mx-auto">
            <div className="z-20  pt-7 mb-20 sticky top-0">
                <Header></Header>
            </div>
            <div >
                <div className="relative mx-2">
                    <div className="bg-black w-full h-32 absolute bottom-0 left-0 opacity-50">

                    </div>
                    <img src={picture} alt="" className="rounded-lg" />
                    <button className="bg-[#FF444A] py-4 px-6 rounded text-white text-xl font-semibold tracking-wide absolute bottom-9 left-9">Donate {price}</button>
                </div>
                <div className="mx-2">
                    <p className="text-4xl font-bold mt-14">{title}</p>
                    <p className="mt-6 mb-28">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;