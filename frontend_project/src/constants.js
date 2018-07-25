const GOOGLE_API_KEY = 'AIzaSyCj-lLX40s-RViJpOPEhEb2iwN5tPyjWDs';
const GOOGLE_PLACE_BASE_URL = 'https://maps.googleapis.com/maps/api/place/';

const SAMPLE_RESTERAUNT_LIST = [
    {
        lat: 32.072454,
        lng:34.778935,
        name:'Beer Garden'
    }
];

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
};
