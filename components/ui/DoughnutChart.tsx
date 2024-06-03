"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ( { accounts }: DoughnutChartProps) => {

    const data = {
        datasets: [
            {
                label: "Banks",
                data: [10250, 25000, 15400],
                backgroundColor: ["#0747b6", "#2265dB", "#2f91fa"]
            }
        ],
        labels: ["Bank of America", "Chase", "Morgan Stanley"]
    };

  return <Doughnut 
    data={data} 
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
        }}
    />
}

export default DoughnutChart