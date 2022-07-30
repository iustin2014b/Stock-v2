import React from "react";

export  default function getAPI (dT,sym) {
   let API_Call;
   const API_Key = '04QJXW0ZW0IVIQOK'
   let dTime=dT
   let companySymbol=sym;
    if (dTime =="hour")
        API_Call = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+companySymbol+"&interval=60min&apikey="+API_Key;
   if (dTime =="day")
           API_Call = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+companySymbol+"&apikey="+API_Key;
    if (dTime =="week")  
        API_Call = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol="+companySymbol+"&apikey="+API_Key;         
    return(API_Call)   ;
}

