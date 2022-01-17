import { Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';


const Main = () => {
    return (
        <div>
             <Route exact path="/" component={Welcome} ></Route>  
        </div>
    );
}

export default Main;
