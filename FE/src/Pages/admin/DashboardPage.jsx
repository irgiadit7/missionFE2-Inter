// src/Pages/admin/DashboardPage.jsx

import React, { useContext, useState } from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { DarkMode } from '../../context/DarkMode';

// --- ICONS ---
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const CartIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const ArrowUpIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>;
const ArrowDownIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>;
const CalendarIcon = () => <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;

// --- DUMMY DATA ---
const dashboardData = {
    customers: { total: 3782, change: 11.01 },
    orders: { total: 5359, change: -9.05 },
    monthlyTarget: { percentage: 75.55, change: 10, target: 20000, revenue: 16000, today: 1500 },
    monthlySales: [
        { month: 'Jan', sales: 400 }, { month: 'Feb', sales: 300 }, { month: 'Mar', sales: 650 },
        { month: 'Apr', sales: 450 }, { month: 'Mei', sales: 600 }, { month: 'Jun', sales: 350 },
        { month: 'Jul', sales: 550 }, { month: 'Agu', sales: 480 }, { month: 'Sep', sales: 620 },
        { month: 'Okt', sales: 700 }, { month: 'Nov', sales: 750 }, { month: 'Des', sales: 800 },
    ],
    statistics: [ 65, 59, 80, 81, 56, 55, 40, 84, 72, 99, 110, 120 ],
};

// --- COMPONENTS ---

const StatsCard = ({ title, value, change, icon, isDarkMode }) => {
    const isPositive = change >= 0;
    return (
        <div className={`p-6 rounded-lg shadow-md flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold">{value.toLocaleString()}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{title}</p>
            <div className={`flex items-center text-xs font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <span className="ml-1">{Math.abs(change)}%</span>
            </div>
        </div>
    );
};

const MonthlySalesChart = ({ data, isDarkMode }) => {
    const maxSales = Math.max(...data.map(d => d.sales)) || 1;
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const currentMonthIndex = new Date().getMonth();
    const currentMonthAbbr = monthAbbreviations[currentMonthIndex];

    return (
        <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-lg font-bold mb-4">Penjualan Bulanan</h3>
            <div className="h-64 flex items-end gap-2 sm:gap-4">
                {data.map(item => {
                    const isCurrentMonth = item.month === currentMonthAbbr;
                    return (
                        <div key={item.month} className="flex-1 h-full flex flex-col justify-end items-center">
                            <div 
                                className={`w-full rounded-t-md transition-all duration-300 ${isCurrentMonth ? 'bg-green-500' : (isDarkMode ? 'bg-gray-600' : 'bg-gray-200')}`}
                                style={{ height: `${(item.sales / maxSales) * 100}%` }}
                            ></div>
                            <span className="text-xs mt-2 text-gray-500 dark:text-gray-400">{item.month}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const MonthlyTargetChart = ({ data, isDarkMode }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (data.percentage / 100) * circumference;
    const trackColor = isDarkMode ? "#4A5568" : "#E2E8F0";
    const progressColor = "#22C55E";

    return (
        <div className={`p-6 rounded-lg shadow-md h-full flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-lg font-bold mb-4">Target Bulanan</h3>
            <div className="flex-grow flex flex-col items-center justify-center">
                 <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle stroke={trackColor} strokeWidth="10" cx="50" cy="50" r="45" fill="transparent" />
                        <circle
                            stroke={progressColor}
                            strokeWidth="10"
                            strokeLinecap="round"
                            cx="50"
                            cy="50"
                            r="45"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">{data.percentage}%</span>
                        <div className="text-xs font-semibold text-green-500 flex items-center">
                            <ArrowUpIcon />
                            <span>{data.change}%</span>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm mt-4 text-gray-500 dark:text-gray-400">Anda menghasilkan Rp {data.today.toLocaleString()} hari ini, lebih tinggi dari bulan lalu.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-sm mt-6">
                <div>
                    <p className="text-gray-500 dark:text-gray-400">Target</p>
                    <p className="font-bold">Rp {data.target / 1000}k</p>
                </div>
                 <div>
                    <p className="text-gray-500 dark:text-gray-400">Pendapatan</p>
                    <p className="font-bold text-green-500">Rp {data.revenue / 1000}k</p>
                </div>
                 <div>
                    <p className="text-gray-500 dark:text-gray-400">Hari ini</p>
                    <p className="font-bold">Rp {data.today / 1000}k</p>
                </div>
            </div>
        </div>
    );
};


const StatisticsChart = ({ data, isDarkMode }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    
    const getFormattedDateForInput = (date) => date.toISOString().split('T')[0];

    const today = new Date();
    const oneMonthAgo = new Date(new Date().setMonth(today.getMonth() - 1));

    const [startDate, setStartDate] = useState(oneMonthAgo);
    const [endDate, setEndDate] = useState(today);

    // Komponen kecil untuk menampilkan tanggal dan menjadi trigger input
    const DatePickerButton = ({ date, onChange }) => (
        <label className="relative cursor-pointer">
            <span className="font-semibold">{date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
            <input
                type="date"
                value={getFormattedDateForInput(date)}
                onChange={onChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
        </label>
    );

    const svgWidth = 500, svgHeight = 200, padding = 20, chartHeight = svgHeight - padding * 2;
    const maxValue = Math.max(...data) || 1;
    const pointGap = svgWidth / (data.length - 1);
    
    const linePath = data.map((point, i) => {
        const x = i * pointGap;
        const y = chartHeight - (point / maxValue * chartHeight) + padding;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
    const areaPath = `${linePath} V ${svgHeight} H 0 Z`;

    return (
        <div className={`p-4 sm:p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                    <h3 className="text-lg font-bold">Statistik</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Target yang telah Anda tetapkan untuk setiap bulan</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 text-sm w-full md:w-auto">
                    <div className={`flex items-center gap-1 p-1 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        {['Overview', 'Sales', 'Revenue'].map(tab => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1 rounded-md font-semibold transition-colors text-xs sm:text-sm ${
                                    activeTab === tab 
                                    ? 'bg-green-500 text-white'
                                    : 'text-gray-500 hover:text-black dark:hover:text-white'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className={`flex items-center justify-center gap-2 p-2 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <CalendarIcon />
                        <DatePickerButton date={startDate} onChange={(e) => setStartDate(new Date(e.target.value))} />
                        <span className="text-gray-400">-</span>
                        <DatePickerButton date={endDate} onChange={(e) => setEndDate(new Date(e.target.value))} />
                    </div>
                </div>
            </div>

            <div className="h-72 w-full">
                <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgba(34, 197, 94, 0.4)' }} />
                            <stop offset="100%" style={{ stopColor: 'rgba(34, 197, 94, 0)' }} />
                        </linearGradient>
                    </defs>
                    <path d={linePath} fill="none" stroke="#22C55E" strokeWidth="2" />
                    <path d={areaPath} fill="url(#gradient)" />
                </svg>
            </div>
        </div>
    );
};


const DashboardPage = () => {
    const { isDarkMode } = useContext(DarkMode);

    return (
        <AdminLayout>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <StatsCard title="Total Pelanggan" value={dashboardData.customers.total} change={dashboardData.customers.change} icon={<UsersIcon />} isDarkMode={isDarkMode} />
                        <StatsCard title="Total Pesanan" value={dashboardData.orders.total} change={dashboardData.orders.change} icon={<CartIcon />} isDarkMode={isDarkMode} />
                    </div>
                    <MonthlySalesChart data={dashboardData.monthlySales} isDarkMode={isDarkMode} />
                </div>
                
                <div className="lg:col-span-1">
                    <MonthlyTargetChart data={dashboardData.monthlyTarget} isDarkMode={isDarkMode} />
                </div>

                <div className="lg:col-span-3">
                    <StatisticsChart data={dashboardData.statistics} isDarkMode={isDarkMode}/>
                </div>
            </div>
        </AdminLayout>
    );
};

export default DashboardPage;