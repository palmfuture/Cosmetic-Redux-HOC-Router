import moment from 'moment';

const initialState = {
    authen: false ,
    products: [
        {
            id: 1,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product1',
            detail: 'product 1',
            price: 50,
        },
        {
            id: 2,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product2',
            detail: 'product 2',
            price: 150,
        },
        {
            id: 3,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product3',
            detail: 'product 3',
            price: 250,
        },
        {
            id: 4,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product4',
            detail: 'product 4',
            price: 350,
        },
        {
            id: 5,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product5',
            detail: 'product 5',
            price: 450,
        },
        {
            id: 6,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product6',
            detail: 'product 6',
            price: 550,
        },
        {
            id: 7,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product7',
            detail: 'product 7',
            price: 650,
        },
        {
            id: 8,
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            title: 'Product8',
            detail: 'product 8',
            price: 750,
        }
    ],
    cart: []
}

export default function (state = initialState, action) {
    return state;
}