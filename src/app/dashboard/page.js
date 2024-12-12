"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@/components/UI/Cards/Cards";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white", // Change legend text color
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", // Change x-axis text color
      },
    },
    y: {
      ticks: {
        color: "white", // Change y-axis text color
      },
    },
  },
};

const labels = ["Prev Month", "This Month"];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [12343, 14205],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Expense",
      data: [12343, 15250],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full gap-2 p-2 overflow-y-auto bg-zinc-800">
      <div className=" w-full h-[30%] flex gap-2">
        <Card className={`w-full`}>
          <CardBody
            className={`h-full rounded-t-lg w-full p-0 flex justify-center items-center`}
          >
            <Bar options={options} data={data} />
          </CardBody>
        </Card>
      </div>
      <div className="flex w-full gap-2 h-[15%]">
        <Card className={`w-1/2 p-0`}>
          <CardBody
            className={`h-full flex items-center justify-center text-green-400 font-bold p-0 gap-2`}
          >
            <GiReceiveMoney className=" w-[24px] h-[24px]"/>
            <p className="text-2xl md:text-4xl">14,205</p>
          </CardBody>
        </Card>
        <Card className={`w-1/2 p-0`}>
          <CardBody
            className={`h-full flex items-center justify-center text-red-400 font-bold p-0 gap-2`}
          >
            <GiPayMoney  className=" w-[24px] h-[24px]"/>
            <p className="text-2xl md:text-4xl">15,250</p>
          </CardBody>
        </Card>
      </div>
      <div className="flex w-full h-[55%]">
        <Card className={`w-full`}>
          <CardBody className={`p-2 h-[90%] text-lg  overflow-y-auto`}>
            <table className="w-full">
              <thead>
                <tr className="font-bold border-b *:px-2">
                  <th className=" text-start">Category</th>
                  <th className=" text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" *:p-2">
                  <td>Salary</td>
                  <td className="text-green-400 text-end">+12402</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Salary</td>
                  <td className="text-green-400 text-end">+14221</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Food</td>
                  <td className="text-red-400 text-end">-350</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Salary</td>
                  <td className="text-green-400 text-end">+14221</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Personal</td>
                  <td className="text-red-400 text-end">-3150</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Gift</td>
                  <td className="text-red-400 text-end">-3250</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Food</td>
                  <td className="text-red-400 text-end">-350</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Salary</td>
                  <td className="text-green-400 text-end">+14221</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Personal</td>
                  <td className="text-red-400 text-end">-3150</td>
                </tr>
                <tr className=" *:p-2">
                  <td>Gift</td>
                  <td className="text-red-400 text-end">-3250</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
          <CardFooter className={`p-2 text-white/60`}>Transactions</CardFooter>
        </Card>
      </div>
    </div>
  );
}
