import React, { Component } from 'react';
import Car from './Car/Car.js' 
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {name: 'Audi', year: 2020},
        // {name: 'Mazda', year: 2018},
        // {name: 'Ford', year: 2019}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler = (index) => {
    const cars = [...this.state.cars]
    cars.splice(index, 1)

    this.setState({cars})
  }


  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <Counter />

        <button 
          onClick={this.toggleCarsHandler}>
            Toggle show
        </button>

        { this.state.showCars ?
            this.state.cars.map((car, index) => {
              return (
                <ErrorBoundary key={index}>
                  <Car 
                    name={car.name}
                    year={car.year}
                    onDelete={this.deleteHandler}
                    onChangeName={(e) => this.onChangeName(e.target.value, index)}
                  />
                </ErrorBoundary>
              )
            })
          : null
        }
      </div>
    );
  }
}

export default App;
