import RecepiList from "./RecepiList"
import recepies  from "../recepis.json"

export const App = () => {
  return (
    <div>
      <RecepiList recepies={recepies} />
    </div>
  );
};
