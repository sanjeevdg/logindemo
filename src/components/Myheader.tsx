const Myheader = () => {
  return (
		<>
      <header className="App-header">
      <img src={require('../assets/images/wr-logo.png')} className="App-logo" alt="logo" />
	  	<h3 className="headcopya">Sign in to your account</h3>
      </header>
 	    <span style={{color:'white',fontSize:15,fontFamily:'OpenSansSemiBold'}}>Or&nbsp;&nbsp;</span> 
      <span style={{color:'#81bc27',fontSize:15,fontFamily:'OpenSansSemiBold',marginTop:5}}>Register your profile</span>
  	</>
);
}

export default Myheader;