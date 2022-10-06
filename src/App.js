import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Counter from './Counter';
import { increment, decrement, incrementByAmountAsync } from './store/features/counter/counterState';

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  return (
    <Counter
      value={count}
      onIncrement={() => dispatch(increment())}
      onDecrement={() => dispatch(decrement())}
      onIncrementAsync={() => dispatch(incrementByAmountAsync())} />
  );

}

export default App;
