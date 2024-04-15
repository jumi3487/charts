import styles from './PieChart.module.css';
import { Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data:[10,30,14,15,5,12],
                    borderColor: [
                        'rgb(3, 62, 35 )',
                        'rgb(153, 62, 135 )',
                        'rgb(3, 2, 255 )',
                        'rgb(13, 112, 111 )',
                        'rgb(40, 120, 105 )',
                        'rgb(153, 62, 5 )'
                    ],
                    backgroundColor: [
                        'rgba(73, 162, 25, 0.4)',
                        'rgba(43, 12, 205, 0.4)',
                        'rgba(53, 102, 95, 0.4)',
                        'rgba(243, 152, 35, 0.4)',
                        'rgba(23, 162, 165, 0.4)',
                        'rgba(174, 12, 85, 0.4)',
                    ],
                    borderWidth: 1
                }
            ]
        })
        
        setChartOptions({
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    dispaly: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: false,
                reponsive: true
            }
        })
    }, [])
    
    return(
        <>
            <div>
                <Pie data={chartData} options={chartOptions} style={{ width: "900px", height: "900px"}}/>
            </div>
        </>
    )
}