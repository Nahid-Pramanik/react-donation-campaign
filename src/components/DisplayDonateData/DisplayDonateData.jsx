import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayDonateData = ({ donateData }) => {
    
    const {id, picture, title, price, category, card_bg, category_bg, text } = donateData;
    return (
        <div className='rounded-lg' style={{ backgroundColor: card_bg }}>
            <div className="card card-side gap-6">
                <div className='max-w-56 max-h-fit'>
                    <img src={picture} alt="donation" className='h-full w-full rounded-l-lg' />
                </div>
                <div className="flex flex-col justify-center py-6">
                    <div className='w-fit  rounded mb-2' style={{ backgroundColor: category_bg }}>
                        <p className='text-sm  py-1 px-2' style={{ color: text }}>{category}</p>
                    </div>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className='font-semibold mt-2 mb-5' style={{color: text}}>{price}</p>
                    <Link to={`/details/${id}`} className="">
                        <button className="text-lg font-semibold text-white py-2 px-4 rounded" style={{backgroundColor: text}}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DisplayDonateData.propTypes = {
    donateData: PropTypes.object.isRequired,
}

export default DisplayDonateData;