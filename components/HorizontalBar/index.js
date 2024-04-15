import styles from './HorizontalBar.module.css';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBar(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data:[10,30,14,15,5,22,5,17],
                    borderClor: 'rgb(53, 162, 235 )',
                    backgroundColor: 'rgba(10, 62, 235, 0.4)'
                },
                {
                    label: 'data 2',
                    data:[10,30,1,15,5,12,25,7],
                    borderClor: 'rgb(53, 162, 235 )',
                    backgroundColor: 'rgba(120, 200, 205, 0.4)'
                },
                { 
                    label: 'data 3',
                    data:[10,30,14,15,20,12,25,17],
                    borderClor: 'rgb(53, 162, 235 )',
                    backgroundColor: 'rgba(255, 100, 40, 0.4)'
                }
            ]
        })
        
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    dispaly: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: true,
                reponsive: true
            }
        })
    }, [])
    
    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{ width: "800px", height: "600px"}}/>
            </div>
        </>
    )
}