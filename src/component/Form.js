import React, { Component } from 'react'

export default class Form extends Component {
  state={
    credential:{
        username:"",
        password:""
    },
    errorUser:"",
    errorPass:{},
    bt_color:"btn btn-primary"
  };
  getClassName=()=>
  {
    return this.state.bt_color;
  };
  handleEnter=()=>{
    this.setState({bt_color:"btn btn-success"});
  };
  handleLeave=()=>
  {
    this.setState({bt_color:"btn btn-primary"});
  };
  handleChanger=(e)=>
  {
    this.state.credential[e.currentTarget.name]=e.currentTarget.value;
    this.setState({credential:this.state.credential});
    console.log("in onChange"+e.currentTarget.value);
  }
  handleKeyPressPass=(e)=>
  {

    let errors1={} ;
    let regex=/^[A-Z]/ , regex2=/[0-9]/ ;
    let result1=regex.test(e.currentTarget.value);
    let result2=regex2.test(e.currentTarget.value);
    let result3=(e.currentTarget.value.length+1)<6?true:false;
    console.log(result1 , result2);
    if(!result1)
    errors1.startError="Passward should Start with a capital letter"
    if(!result2)
    errors1.numError="Passward should at least contain a number"
    if(result3)
    errors1.lenError="Passward length should be 6"
    console.log(errors1);
    Object.keys(errors1).length!==0?this.setState({errorPass:errors1}):this.setState({errorPass:{}});
    console.log(this.state.errorUser);
    //console.log(e.currentTarget.value.length+1);
    
    };
    handleKeyPressUser=(e)=>
    {
      let errors="";
      let regex=/^[A-za-z]/,regex2=/([a-zA-Z0-9@_]){9}/;
      let result1=regex.test(e.currentTarget.value);
      let result2=regex2.test(e.currentTarget.value);
      if(!result1)
      errors=errors+"Password should only start with an Alphabet";
      if(!result2)
      errors=errors+"Password should not contain symbol other than @ and _ and the whole length should be maximum 10";
      errors!==""? this.setState({errorUser:errors}):this.setState({errorUser:""});

    };
    handleSubmit=(e)=>
    {
        e.preventDefault();
    }
    render() {
    return (
        <>
        <form className='from-group container' onSubmit={this.handleSubmit} >
        <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input name='username'  type="text" className="form-control" id="username" value={this.state.credential.username} onChange={this.handleChanger} 
        onKeyPress={this.handleKeyPressUser} placeholder="Its length should be 10 should start with an alphabet,characters allowed are @ and _  "/>
        {(this.state.errorUser!=="") && <div className='alert alert-danger'>{this.state.errorUser}</div>}
        </div> 
        <div className="mb-3">
        <label htmlFor="password" className="form-label">password</label>
        <input name='password' type="password" className="form-control" id="password" value={this.state.credential.password} onChange={this.handleChanger}
        onKeyPress={this.handleKeyPressPass} placeholder="Should start with capital alphabet,its length should be min 6 and must contain a number"/>
         {(this.state.errorPass.startError!==undefined || this.state.errorPass.numError !==undefined || this.state.errorPass.numError) && <div className='alert alert-danger'><ul  >{Object.keys(this.state.errorPass).map(er=>(<li style={{ listStyleType:"none" }} key={er} >{this.state.errorPass[er]}</li>))}</ul></div>}
        </div>
        <button className={this.getClassName()} onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}>submit</button>
     
        </form>     </>


     
    )
  }
}
