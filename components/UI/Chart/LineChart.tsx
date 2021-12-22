import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

interface Props {
  height: number;
  width: number | string;
  data: Data[];
}

interface Data {
  name: string;
  value: number;
}

const RLineChart = (props: Props) => {

  const CustomizedDot = (ctx: any) => {
    const { cx, cy, stroke, payload, value } = ctx;
    const index = props.data.findIndex((r: any) => r.label === payload.label)
    const isLast = index === props.data.length-1
    
    if(isLast){
      return (
        <circle cx={cx} cy={cy} r="3" stroke={stroke} stroke-width="1" fill="#fff" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="1670" height="260" className="recharts-dot recharts-line-dot"></circle>
      )
    }

    return <circle/>
  }

  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart data={props.data} margin={{ top: 50 }}>
        <XAxis dataKey="name" stroke="#FFFFFF">
          <Label position="insideBottomLeft" value="FECHA" offset={0} stroke="#FFFFFF" strokeWidth={1} />
        </XAxis>
        <YAxis stroke="#FFFFFF">
          <Label position="insideTopRight" value="VALOR (MDP)" offset={-30} stroke="#FFFFFF" strokeWidth={1} />
        </YAxis>
        <Line 
          dataKey="value"
          stroke="#FFFFFF" 
          dot={CustomizedDot}
        />
      </LineChart>
    </ResponsiveContainer>
  )
};

export default RLineChart