import Header from "../Header/Header";


const Banner = () => {
    return (
        <div className={`bg-[url('https://i.ibb.co/V209g14/banner.jpg')] bg-cover bg-center bg-no-repeat h-screen relative`}>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90">
                <div className="z-20 container mx-auto pt-7">
                    <Header></Header>
                </div>
            </div>

            <div className="top-1/2 left-1/2 absolute -translate-y-2/4 -translate-x-2/4 text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-10">I Grow By Helping People In Need</h1>
                <div className="flex justify-center">
                    <input className="border border-gray-200 p-[8px] md:p-[17px] rounded-l-lg text-sm " type="text" name="" id="" placeholder="Search here...."/>

                    <input className="bg-[#FF444A] md:py-4 md:px-7 px-4 rounded-r-lg text-white font-semibold cursor-pointer" type="submit" value="Search" />
                </div>
            </div>

        </div>
    );
};

export default Banner;