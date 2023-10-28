import Recepi from './Recepi';

const RecepiList = ({ recepies }) => {
  return (
    <ul>
      {recepies.map(recepie => (
        <li>
          <Recepi recepie={recepie} />
        </li>
      ))}
    </ul>
  );
};

export default RecepiList;
