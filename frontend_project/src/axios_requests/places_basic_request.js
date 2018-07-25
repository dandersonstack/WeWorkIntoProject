import axios from 'axios';
import React, { Component } from 'react';

import {GOOGLE_API_KEY, GOOGLE_PLACE_BASE_URL} from '../constants';


async function grabNearbyFromLcation(location_string, radius, extraParamsHash) {
    try {
        return await axios.get(`${GOOGLE_PLACE_BASE_URL}/nearbysearch/json?`, {
            params: {
                key: GOOGLE_API_KEY,
                location: location_string,
                radius: radius,
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

module.export = {
    grabNearbyFromLcation: grabNearbyFromLcation,
    unlockPlaceInformation: unlockPlaceInformation
};
