import { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mudassar",
      person: [
        {
          name: "Ahamad",
          age: 20,
        },
        {
          name: "Munib",
          age: 30,
        },
        {
          name: "Bilal",
          age: 40,
        },
      ],
    };
  }
  // handleChange = (e) => {
  //     this.setState({
  //         [e.target.name]: e.target.value
  //     })
  // }
  // handleSubmit = (e) => {
  //     e.preventDefault()
  //     console.log(this.state)
  // }

  myname = () => {
    this.setState({
      name: "Iqbal",
    });
  };
handleChange = (e) => {
    console.log(e.target.value)
   
        const search = this.state.person.filter((item)=>{
            console.log(item.name)
            return(item.name.includes(e.target.value)
           
            
            )

        })
        this.setState(
        {
            person:search
        })
        
        }

 
  render() {
    return (
      <div>
        
        <p>{this.state.name}</p>
        <button onClick={() => this.myname()}>Change Name</button>

        <p>Using Map Methord in class base Component </p>
        <input type="search" placeholder="search name" className="search-box"onChange={(e)=>this.handleChange(e)} />
        <button>Click</button>
  
    {
        this.state.person.map((item, index) => {
            return(
                <h1 key={index}>{item.name}</h1>
                
                )
        })
    }
      </div>
    );
  }
}

export default State;
