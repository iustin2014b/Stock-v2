import React from "react";
export default function getValues (data) {
    let datesArray = [];
    let valuesArray = [];
    let valuesMinArray = [];
    let valuesMaxArray = [];
  
                const nameMeta=Object.keys(data) [0];           
                let result= nameMeta.localeCompare("Meta Data")
                if (result==-1){
                    return [];
                }
                const nameArrayTimes=Object.keys(data) [1];
                const arrayOfTimes=Object.keys(data[nameArrayTimes]);
                for(let i = 0; i <= 98; i++) {
                    valuesArray.push(parseFloat(data[nameArrayTimes][ arrayOfTimes[i]]['1. open']));
                    valuesMinArray.push(parseFloat(data[nameArrayTimes][ arrayOfTimes[i]]['3. low']));
                    valuesMaxArray.push(parseFloat(data[nameArrayTimes][ arrayOfTimes[i]]['2. high']));		      
                    datesArray.push(arrayOfTimes[i]);
                }	  
            //    setRenderIt(true);      
       // setValues(valuesArray);
       // setValuesMin(valuesMinArray);
       // setValuesMax(valuesMaxArray);
       // setDates(datesArray);
        return  valuesArray
}

