import axios from 'axios';
import React, { Component } from 'react';

import {GOOGLE_API_KEY, GOOGLE_PLACE_BASE_URL} from '../constants';


async function grabNearbyFromLcation(location_string, radius, extraParamsHash) {
    try {
        return await axios.get(`${GOOGLE_PLACE_BASE_URL}/nearbysearch/json?`, {
            params: {
                key: GOOGLE_API_KEY,
                location: location_string,
                radius,
                type: 'restaurant'
            }
        })
    } catch(error) {
        console.log(error);
    }
}


async function unlockPlaceInformation(place_id) {
    try {
        return await axios.get(`${GOOGLE_PLACE_BASE_URL}/details/json?`, {
                params: {
                    key: GOOGLE_API_KEY,
                    placeid: place_id,
                }
            });
    } catch(error) {
        console.log(error)
    }
}

async function grabResterauntsFromLatLng(lat, lng) {
    try {
        return await axios.get(`http://localhost:8000/resteraunts`, {
            params: {
                lat: lat,
                lng: lng,
            }
        }).data;
    } catch(error) {
        console.log(error)
    }
}


module.export = {
    grabNearbyFromLcation: grabNearbyFromLcation,
    unlockPlaceInformation: unlockPlaceInformation
};


let helper7 = grabResterauntsFromLatLng(32.072454, 34.778935);