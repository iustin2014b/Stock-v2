import React from "react";
export default function getDates(data) {
    let datesArray = [];
    const nameMeta=Object.keys(data) [0];           
    let result= nameMeta.localeCompare("Meta Data")
    if (result==-1){
        return [];
    }
    const nameArrayTimes=Object.keys(data) [1];
    const arrayOfTimes=Object.keys(data[nameArrayTimes]);
    for(let i = 0; i <= 98; i++) {
        datesArray.push(arrayOfTimes[i]);
    }	  
    return  datesArray
}

