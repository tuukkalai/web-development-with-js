import axios from 'axios';

export default {
    getTussit: function(){
        return axios.get('/api/tussi').then((response) => {
            return response.data;
        });
    }

//    getLastfm: function(){
//        return axios.get('/api/tussi').then((response) => {
//            return response.data;
//        });
//    }
}
//console.log(getTussit());
//const tussit = getTussit();
//tussit.then((data) => console.log(data));
