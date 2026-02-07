interface Info {
  title: string;
  paragraph: string;
  mount: number;
  value: number;
  color:string;
};

export const info: Info[] = [
  {
    title: 'Total Income',
    paragraph: 'During last month',
    mount: 1200,
    value: 0,
    color: "border-purple-400"
  },
  {
    title: 'Total Expense', 
    paragraph: 'During last 2 months',
    mount: 4500,
    value: 0,
    color: "border-red-500"
  },
  {
    title: 'Total Bonus',
    paragraph: 'During last 6 months',
    mount: 6100,
    value: 0,
    color: "border-green-400"
  }
];