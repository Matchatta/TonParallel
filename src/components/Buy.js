import React, {Component} from 'react';

class Buy extends Component{
  constructor(){
    super()
    this.state ={
      apiResponse : [],
      ticket: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    fetch("https://parallel-api.appspot.com/concert/all") 
    .then(res => res.json())
    .then(data => this.setState({apiResponse : data}))
    .then(d => console.log(this.state.apiResponse))
  }
  handleSubmit(data) {
    console.log(this.state.ticket)
    if(this.state.ticket==0){
        alert("Please select number of ticket first")
    }
    else{
        fetch("https://parallel-api.appspot.com/concert/buy/"+data,{
            method: "POST",
            body: JSON.stringify({
                num: this.state.ticket
            }),
            headers: {"Content-type": "application/json"}
        })
        .then(ti=> alert("You already buy "+this.state.ticket+" "+ data+" ticket"))

    }
  }
  handleChange(event) {
    this.setState({
        ticket: event.target.value
    })
   
  }
  render(){
    
    return (
        <div className="App-header">
            <div className="container mt-5">
            <div className="row"  style={{fontSize:"16px"}}>
                    {
                    this.state.apiResponse.map((data, index)=>{
                        return(<div className="col mr-3" style={{backgroundColor:"gray", borderRadius:"4px"}}>
                                <div className ="container">
                                    <div className="mt-2 mb-2"><img src={data.pic} style={{width:"200px"}}></img></div>
                                    <div className="row text-center mb-2">Title: {index + data.title}</div>
                                    <div>
                                            <div className ="form-group mb-2 text-center">
                                            <label>
                                                Ticket: 
                                                {/* <input onChange={this.handleChange} type="number" name="name" style={{borderRadius:"5px"}} className="col-sm-4"/> */}
                                            </label>
                                                <select style={{border: "1px solid #FFFFF", borderRadius:"2px", width:"7%"} } className="col-sm-6 mr-2" onChange={this.handleChange}>
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <button className="btn btn-primary btn-sm" onClick={()=>this.handleSubmit(data.title)}>Buy</button>
                                            </div>
                                    </div>
                                    
                                </div>
                               </div>)
                    })
                    }
            </div>
            </div>
        </div>
    );
  }
}

export default Buy;
