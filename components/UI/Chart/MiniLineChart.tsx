import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface Props {
  height: number | string;
  width: number | string;
  data: Data[];
}

interface Data {
  name: string;
  value: number;
}

const MiniLineChart = (props: Props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart data={props.data}>
        <Line 
          dataKey="value" 
          stroke="#FFFFFF" 
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
};

export default MiniLineChart