import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayDonation = ({ donation }) => {
    const {id, title, picture, category, category_bg, card_bg, text } = donation;

    return (
        <Link to={`/details/${id}`} className='mx-2'>
            <div className={`card`} style={{ backgroundColor: card_bg }}>
                <figure><img src={picture} alt="donation" /></figure>
                <div className="card-body">
                    <div className='w-fit  rounded' style={{ backgroundColor: category_bg }}>
                        <p className='text-sm font-medium py-1 px-2' style={{ color: text }}>{category}</p>
                    </div>
                    <h2 className="text-lg font-medium mt-2" style={{ color: text }}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

DisplayDonation.propTypes = {
    donation: PropTypes.object.isRequired,
}

export default DisplayDonation;