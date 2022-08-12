import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashR.cash);
  const customers = useSelector(state => state.customersR.customers);

  const addCash = (cashToAdd) => {
    dispatch(addCashAction(cashToAdd))
  };

  const getCash = (cashToGet) => {
    dispatch(getCashAction(cashToGet))
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className='app'>
      <div className='buttons'>
        <p className="buttons__cash">Balance: {cash}</p>

        <div className="buttons__container">
          <button onClick={() => addCash(+prompt())} className='buttons__button'>Add cash</button>
          <button onClick={() => getCash(+prompt())} className='buttons__button'>Get cash</button>
          <button onClick={() => addCustomer(prompt())} className='buttons__button'>Add customer</button>
          <button onClick={() => dispatch(fetchCustomers())} className='buttons__button'>Get customers</button>
        </div>

        <div className="customers">
          {customers.length > 0 ?
            <div className="customers__list">
              {customers.map(customer =>
                <div 
                  key={customer.id} 
                  className="customers__item"
                  onClick={() => removeCustomer(customer)}
                >
                  {customer.name}
                </div>
              )}
            </div>
            :
            <div className="customers__list">
              There are no customers
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
