import React from "react";
import { Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function ChartLine (props) {
    const datesReveresed = (props.dates).reverse();
    const renderIt =props.render; 
    if (props.render==false) 
        return(false);
    else 
      return (
        <div>
            {renderIt &&  
            <Line 
                data={
                    {
                        labels: datesReveresed,
                        datasets: [{
                            label: 'open day',
                            data: props.values,
                            borderColor:'blue',
                            borderWidth: 2,
                            pointRadius:3,
                            
                            fill :true 
                        },{
                            label: 'min',
                            data: props.valuesMin,
                            borderColor:'yellow',
                            pointRadius:1,
                        
                            borderWidth: 0.5
                        },{
                        label: 'max',
                        data: props.valuesMax,
                        borderColor:'pink',
                        pointRadius:1,
                        borderWidth: 0.5
                    }]
                    }
                }
                height={800}
                width={1500}
            />}
        </div>);
}