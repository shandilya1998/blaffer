import React from "react";
import {fetchPlacePending, fetchPlaceSuccess, fetchPlaceError} from '../actions/actions_v1';

class fetchService {

    constructor(){
    	this.getData = this.getData.bind(this);
    }

    parseRequest(params){ 
        delete params.endpoint;
        method = params.defaultMethod
        params['method'] = params['method'] ? params['methods'] : method;
        return params;
    }
	
    async  getData(params) {
        let response = await fetch('https://127:0.0.1:5000/' + params['endpoint'], this.parseRequest(params)).then((response)=>response.json()).catch((error)=>{console.log(error);});
        return response;
    }
}

export const backendService = new fetchService();

export function loadBatch(page){
	return backendService.getData({'endpoint' : 'load', 'method' : 'POST', 'body' : JSON.stringify({'page' : page, 'per_page' : 15, 'city' : 'New York'})})
}

export default fetchService;
