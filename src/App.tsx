import './App.css';
import Myheader from './components/Myheader';
import LoginBox from './components/LoginBox';

function App() {

  return (
      
<div style={{backgroundColor:'#202938',textAlign:'center',height:'100vh'}}>
    	         <Myheader />
    <div>     
          <div className="loginbox">
                <LoginBox />


          </div>
    </div>
</div>  
  );
}

export default App;
