import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props)=>{
    const datePointValues = props.datePoints.map(data => data.value);
    const totalMax= Math.max(...datePointValues)
    
    return <div className="chart">
        {props.datePoints.map((datePoint)=>{
            return(
            <ChartBar 
            key={datePoint.label}
            dateValue={datePoint.value} 
            maxVal={totalMax}
            label={datePoint.label}
            />
            )})}
    </div>


}

export default Chart;