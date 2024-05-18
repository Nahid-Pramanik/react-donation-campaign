
const getFromLocalStorage = () => {
    const storedDonation = localStorage.getItem('donation-cart');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveToLocalStorage = (id) => {
    const savedDonation = getFromLocalStorage();
    if(!savedDonation.includes(id)){
        savedDonation.push(id);
        localStorage.setItem('donation-cart', JSON.stringify(savedDonation));
    }

}

export {getFromLocalStorage, saveToLocalStorage}