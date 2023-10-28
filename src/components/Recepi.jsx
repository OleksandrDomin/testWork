import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar  } from "react-icons/hi";

const Recepi = ({ recepie: { name, time, servings, calories, image } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          <p>{time} mins</p>
        </div>
        <div>
          <HiOutlineChartPie />
          <p>{servings} servings</p>
        </div>
        <div>
          <HiOutlineChartBar />
          <p>{calories} calories</p>
        </div>
      </div>
      <div>
        <img src={image} alt={name} width="300px"/>
      </div>
    </div>
  );
};
export default Recepi;
