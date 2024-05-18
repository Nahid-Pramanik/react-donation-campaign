import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { getFromLocalStorage } from "../../Utilitis/fakeDb";
import { Cell, Pie, PieChart } from "recharts";


const Statistics = () => {
    const allDonations = useLoaderData();
    const savedDonation = getFromLocalStorage();
    const percentage = savedDonation.length / allDonations.length * 100;
    const remaining = 100 - percentage;

    const data = [
        { name: 'Group A', value: remaining },
        { name: 'Group B', value: percentage },
    ];
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className="text-2xl font-bold" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className="container mx-auto">
            <div className="z-20  pt-7 mb-20 sticky top-0">
                <Header></Header>
            </div>

            <div className="flex justify-center">
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={140}
                        fill="#FF444A"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

            <div className="flex justify-center items-center flex-col md:flex-row gap-14 mt-12 mb-20">
                <small className="flex items-center gap-4">
                    <p className="text-lg">Your Donation</p> <small className="border-4 border-[#00C49F] w-20 h-0 rounded-sm"></small>
                </small>
                <small className="flex items-center gap-4">
                    <p className="text-lg">Total Donation</p> <small className="border-4 border-[#FF444A] w-20 h-0 rounded-sm"></small>
                </small>

            </div>

        </div>
    );
};

export default Statistics;