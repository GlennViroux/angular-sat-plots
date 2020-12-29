import { svg } from "d3";


export interface Employee {
    company: string;
    frequency: number;
}

export const StatsBarChart: Employee[] = [
    {company: 'Apple', frequency: 100000},
    {company: 'IBM', frequency: 80000},
    {company: 'HP', frequency: 20000},
    {company: 'Facebook', frequency: 70000},
    {company: 'TCS', frequency: 12000},
    {company: 'Google', frequency: 110000},
    {company: 'Wipro', frequency: 5000},
    {company: 'EMC', frequency: 4000}
];

export interface StockData {
    date:number;
    price:number;
}

export const ConstStockData:StockData[] = [
    {date: 1, price:100},
    {date: 2, price:200},
    {date: 3, price:300},
    {date: 5, price:200},
    {date: 7, price:500}
]
