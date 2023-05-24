import {HashRouter as Router} from "react-router-dom"
import RouterView from "./router";
import 'antd/dist/reset.css';
function App() {
  return (
    <Router>
      <RouterView></RouterView>
    </Router>
  );
}

export default App;
