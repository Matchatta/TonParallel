import React, {Component} from 'react';


class App extends Component{
  constructor(){
    super()
    this.state ={
      apiResponse : []
    }
  }
  componentWillMount(){
    fetch("https://parallel-api.appspot.com/concert/all") 
    .then(res => res.json())
    .then(data => this.setState({apiResponse : data}))
    .then(d => console.log(this.state.apiResponse))
  }
  render(){
    
    return (
      <div className="App-header">
        <p style={{marginTop: "10px"}}>All show</p>
        <div className="container">
          <div className="row">
          {
                    this.state.apiResponse.map((data, index)=>{
                      var date = new Date(data.datetime)
                        return(<div className="col mr-3" style={{backgroundColor:"gray", borderRadius:"4px", fontSize:"16px"}}>
                                <div className ="container">
                                    <div className="mt-2 mb-2"><img src={data.pic} style={{width:"200px"}}></img></div>
                                    <div className="row text-center mb-2">Title: {data.title}</div>
                                    <div className="row text-left mb-2">Date: {date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}</div>
                                    <div className="row text-left mb-2">Place: {data.place}</div>
                                    <div className="row text-left mb-2">Price: {data.price} Baht</div>
                                    <div className="row text-left mb-2">Status: {data.status}</div>
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

export default App;
