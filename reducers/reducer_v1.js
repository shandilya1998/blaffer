import React, {Component} from 'react';
import {FETCH_PLACES_PENDING, FETCH_PLACES_SUCCESS, FETCH_PLACES_ERROR, ADD_PLACE_TO_ITINERARY} from '../actions/actions_v1';
import {initialState} from './initialState';

const placesReducer = (state = initialState, action) => {
	switch(action.type){
		case  ADD_PLACE_TO_ITINERARY:
			return {
				...state,
				itinerary : action.payload
			};
		case FETCH_PLACES_PENDING:
			return {
				...state,
				pending : true
			};
		case FETCH_PLACES_SUCCESS:
			return {
				...state, 
				pending : false,
				places : action.payload
			};
		case FETCH_PLACES_ERROR:
			return {
				...state,
				pending : false,
				error : action.error
			};
		default:
			return {state};
	}
}

export default placesReducer;

export const getPlaces = state => state.places;
export const getPlacesPending = state => state.pending;
export const getPlacesError = state => state.error;


