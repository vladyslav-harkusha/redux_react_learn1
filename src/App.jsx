import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashR.cash);

  const addCash = (cashToAdd) => {
    dispatch({ type: 'ADD_CASH', payload: cashToAdd })
  };

  const getCash = (cashToGet) => {
    dispatch({ type: 'GET_CASH', payload: cashToGet })
  };

  return (
    <div className='app'>
      <div className='buttons'>
        <p className="buttons__cash">{cash}</p>

        <button onClick={() => addCash(+prompt())} className='buttons__button'>Add cash</button>
        
        <button onClick={() => getCash(+prompt())} className='buttons__button'>Get cash</button>
      </div>
    </div>
  );
}

export default App;
