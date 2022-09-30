export interface item {
    id: number,
    name: string,
    details: string,
    price: number,
    quant: number,
    image: string
}


export interface cart {
    id: number,
    name: string,
    details: string,
    price: number,
    quant: number,
    image: string
}


export const AllItems: item[] = [
    {
        id: 1,
        name: 'Shoes',
        details: 'Summer shoes for comfort',
        price: 500,
        quant: 1,
        image: ''
    },
    {
        id: 2,
        name: 'Shirts',
        details: 'Summer shirts for cooling yourself',
        price: 300,
        quant: 1,
        image: ''

    },
    {
        id: 3,
        name: 'Bracelets',
        details: 'Handling that engagement party well',
        price: 640,
        quant: 1,
        image: ''

    },
    {
        id: 4,

        name: 'Belts',
        details: 'Summer shoes for comfort',
        price: 206,
        quant: 1,
        image: ''

    },
    {
        id: 5,
        name: 'Caps',
        details: 'Shield yourself from the sun',
        price: 500,
        quant: 1,
        image: '',
    },

    {
        id: 6,
        name: 'Bags',
        details: 'Add bagging to your collection',
        price: 340,
        quant: 1,
        image: ''

    },
    {
        id: 7,
        name: 'Sports',
        details: 'Summer shoes for comfort',
        price: 90,
        quant: 1,
        image: ''

    },
    {
        id: 8,
        name: 'Work',
        details: 'Summer shoes for comfort',
        price: 100,
        quant: 1,
        image: ''

    },
    {
        id: 9,
        name: 'Hiking',
        details: 'Summer shoes for comfort',
        quant: 1,
        price: 100,
        image: ''

    },
]


export const AllCarts: cart[] = [
    {
        id: 1,
        name: 'Cloth',
        details: 'warm summer coat',
        price: 200,
        quant: 1,
        image: ''
    },
    {
        id: 2,
        name: 'Shoe',
        details: 'warm shoes for hiking',
        price: 250,
        quant: 1,
        image: ''
    },
    {
        id: 3,
        name: 'Trainers',
        details: 'sprinters for jogging',
        price: 105,
        quant: 1,
        image: ''
    },

]