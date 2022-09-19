import React, { Component } from 'react'

export default class Form extends Component {
  state={
    credential:{
        username:"swapnil",
        password:"Swapnil@123"
    },
    errors:{},
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
    //console.log(e.currentTarget.value);
  }
  handleKeyPressPass=(e)=>
  {
    let errors1={} ;
    let regex=/^[A-Z]/ , regex2=/[0-9]/;
    let result1=regex.test(e.currentTarget.value);
    let result2=regex2.test(e.currentTarget.value);
    console.log(result1 , result2);
    if(!result1)
    errors1.startError="Passward should Start with a capital letter"
    if(!result2)
    errors1.numError="Passward should at least contain a number"
    console.log(errors1);
    Object.keys(errors1).length!==0?this.setState({errors:errors1}):this.setState({errors:{}});
    console.log(this.state.errors);
    
    };

    render() {
    return (
        <>
        <form className='from-group container' >
        <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input name='username'  type="text" className="form-control" id="username" value={this.state.credential.username} onChange={this.handleChanger} 
        onKeyPress={this.handleKeyPress} />
        </div> 
        <div className="mb-3">
        <label htmlFor="password" className="form-label">password</label>
        <input name='password' type="password" className="form-control" id="password" value={this.state.credential.password} onChange={this.handleChanger}
        onKeyPress={this.handleKeyPressPass} />
         {(this.state.errors.startError!==undefined || this.state.errors.numError !==undefined) && <div className='alert alert-danger'><ul>{Object.keys(this.state.errors).map(er=>(<li>{this.state.errors[er]}</li>))}</ul></div>}
        </div>
        <button className={this.getClassName()} onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}>submit</button>
        </form>     </>


     
    )
  }
}
