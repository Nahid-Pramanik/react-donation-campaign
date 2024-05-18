import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../Utilitis/fakeDb";
import DisplayDonateData from "../DisplayDonateData/DisplayDonateData";


const Donations = () => {
    const allDonations = useLoaderData();
    const [donateDatas, setDonateDatas] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(() => {
        const savedDonation = getFromLocalStorage();
        const giveDonations = [];
        for (const id of savedDonation) {
            const donation = allDonations.find(donation => donation.id === parseInt(id));
            giveDonations.push(donation);
        }
        setDonateDatas(giveDonations);
        setDataLength(giveDonations.slice(0,4));

    }, [allDonations])

    return (
        <div className="container mx-auto">
            <div className="z-20  pt-7 mb-20 sticky top-0">
                <Header></Header>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mb-10 mx-2">
                {
                    dataLength.map(donateData => <DisplayDonateData
                        key={donateData.id}
                        donateData={donateData}
                    ></DisplayDonateData>)
                }
            </div>
            <div  className={`mb-28 flex justify-center ${dataLength.length === donateDatas.length ? 'hidden' : ''}`}>
                <button onClick={()=> setDataLength(donateDatas)} className="py-4 px-7 font-semibold bg-[#009444] rounded-lg text-white">See All</button>
            </div>
        </div>
    );
};

export default Donations;