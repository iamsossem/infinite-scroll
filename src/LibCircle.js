import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LibCircle = ({percentage}) => {  
  return (
    <div className="lib-circle">
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({            
        pathColor: `rgba(62, 152, 199)`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7'
      })}
    />;
    </div>
  );
};

export default LibCircle;