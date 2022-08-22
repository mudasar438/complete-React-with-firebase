import {Component} from 'react'



class State extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Mudassar',
            age: 23
        }
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
            name: 'Iqbal'
        })

    }
    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form> */}
                <p>{this.state.name}</p>
                <button onClick={()=>this.myname()}>Change Name</button>



            </div>
        )
    }
}

export default State