import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Line from './container/Line';
import Bar from './container/Bar';
import Heatmap from './container/Heatmap';
import Brush from './container/Brush';

function App() {
    return (
        <>
            <Router>
                <Link to="/line">
                    <button>Line</button>
                </Link>
                <Link to="/bar">
                    <button>Bar</button>
                </Link>
                <Link to="/heatmap">
                    <button>Heatmap</button>
                </Link>
                <Link to="/brush">
                    <button>Brush</button>
                </Link>
                <button><a href="https://apexcharts.com/docs/creating-first-javascript-chart/">차트옵션</a></button>
                
                <Route exact path="/line" component={Line} />
                <Route exact path="/bar" component={Bar} />
                <Route exact path="/heatmap" component={Heatmap} />
                <Route exact path="/brush" component={Brush} />
            </Router>
        </>
    );
}

export default App;