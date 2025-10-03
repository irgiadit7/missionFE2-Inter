import axios from 'axios';

export const getProducts =  (callback) => {
    axios.get('https://fakestoreapi.com/products')
    .then((ress) => {
        callback(ress.data);
    })
    .catch((err) => {
        console.error('There was an error fetching the products!', err);
    });
}

export const getDetailProduct =  (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((ress) => {
        callback(ress.data);
    })
    .catch((err) => {
        console.error('There was an error fetching the products!', err);
    });
}