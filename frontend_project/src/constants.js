const GOOGLE_API_KEY = 'AIzaSyCj-lLX40s-RViJpOPEhEb2iwN5tPyjWDs';
const GOOGLE_PLACE_BASE_URL = 'https://maps.googleapis.com/maps/api/place/';

const SAMPLE_RESTERAUNT_LIST = [
    {
        lat: 32.072454,
        lng:34.778935,
        name:'Beer Garden'
    }
];

const DISTANCE_MARKS = {
    0: '0km',
    5: '5km',
    10: '10km',
    15: '15km',
    20: '20km',
    25: '25km',
    30: '30km',
};

const PRICE_FILTER_MARKS = {
    0: '$',
    1: '$$',
    2: '$$$',
    3: '$$$$',
};

const RATING_FILTER_MARKS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
};


const ELEMENTS_TO_RENDER = [
        {
            lat: 32.072454,
            lng:34.778945,
            name:'Beer'
        },
        {
            lat: 32.072454,
            lng:34.768947,
            name:'Beer Garden'
        },
        {
            lat: 32.072456,
            lng:34.778242,
            name:'MORE Garden'
        }
    ];


module.exports = {
    GOOGLE_API_KEY: GOOGLE_API_KEY,
    GOOGLE_PLACE_BASE_URL: GOOGLE_PLACE_BASE_URL,
    ELEMENTS_TO_RENDER: ELEMENTS_TO_RENDER,
    DISTANCE_MARKS: DISTANCE_MARKS,
    RATING_FILTER_MARKS: RATING_FILTER_MARKS,
    PRICE_FILTER_MARKS: PRICE_FILTER_MARKS,
};
