// import { LineChartDataInterface } from "interfaces/chart";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext
} from "chart.js";

interface LineChartProps {
  labelText?: string;
  labels: string[];
  data: number[];
  isLegend?: boolean;
  displayXGrid?: boolean;
  borderXGrid?: boolean;
  displayYGrid?: boolean;
  tickYGrid?: boolean;
  borderYGrid?: boolean;
  tickXGrid?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  labelText = "",
  isLegend = false,
  displayXGrid = false,
  borderXGrid = true,
  displayYGrid = true,
  borderYGrid = true,
  tickYGrid = true,
  tickXGrid = true,
  labels,
  data
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const chartData = () => {
    return {
      labels,
      datasets: [
        {
          label: labelText,
          data: data,
          borderColor: "rgb(255, 99, 132, 0.8)",
          borderWidth: 2,
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(239, 44, 90, 0.3)");
            gradient.addColorStop(1, "rgba(239, 44, 90, 0.01)");
            return gradient;
          }
        }
      ]
    };
  };

  return (
    <div>
      <Line
        data={chartData()}
        options={{
          plugins: {
            title: {
              display: true,
              text: labelText
            },
            legend: {
              display: isLegend
            }
          },
          scales: {
            x: {
              grid: {
                display: displayXGrid
              },
              border: {
                display: borderXGrid
              },
              ticks: {
                display: tickXGrid
              }
            },
            y: {
              grid: {
                display: displayYGrid
              },
              border: {
                display: borderYGrid
              },
              ticks: {
                display: tickYGrid
              }
            }
          },
          elements: {
            line: {
              tension: 0.1
            },
            point: {
              radius: 0.1
            }
          },
          interaction: {
            intersect: true
          },
          responsive: true
        }}
      />
    </div>
  );
};

export default LineChart;
