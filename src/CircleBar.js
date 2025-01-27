
const CircleBar = ({percentage}) => {
  console.log( percentage );
  const style={
    backgroundImage : `conic-gradient(#ff0 0% ${percentage}%, #267a13 ${percentage}% 100%)`
  };
  return (
    <div className="circlebar">
      <div className="progress" style={style}>
        <div className="inner">
          <span>{Math.floor(percentage)}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircleBar;