import ReactDOM from 'react-dom';
import Helpfulxx from './helpers';
import Dog from './Dog';

Helpfulxx();

const App = () => {
  return (
    <div>
      I'm an App
      <Dog />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));