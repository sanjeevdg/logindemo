import useForm from '../hooks/useForm';
import './loginbox.css';

const LoginBox = () => {

const {handleChange, errors, handleSubmit } = useForm(()=>{});


  return (
    <>
<div className="loginboxinner" style={{backgroundColor:'white',width:440,height:250,borderRadius:10}}>
      
      <form  name="form1" onSubmit={handleSubmit}>       
	    
      <div className="groupa" style={{marginTop:5,marginLeft:-10}}>
      <p className="mobLabel">Mobile Number</p>
      <input type="number" id="phone" name="phone" required onChange={handleChange} className="phoneInput"/>
      {
        errors['phone' as keyof typeof errors] && <p style={{color:'red',marginLeft:10,fontSize:12,fontFamily:'OpenSansRegular'}}>{errors['phone' as keyof typeof errors]}</p>
      }
      </div>
      
      <div className="groupb">
      <div className="checkboxdiv"><input type="checkbox" id="remember" name="remember" value={'yes'}/></div>
      <div className="rememberdiv"><label htmlFor="remember" className="rememberlabel"> Remember me</label></div>
      <div className="forgotpassdiv"><a className="forgotpasslink" href="/">Forgot your password?</a></div>
      </div>

      <div> 
      <input type="submit" name="submit" id="submit" value="Send OTP" className="form-submit-button"/> 
      </div>
      </form>
      </div>
        </>
);
}

export default LoginBox;