import React, { Component } from 'react'

const withCounter = (WrappedComponent,incrementNumber=1) => {

    class WithCounter extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          countHandler = () => {
              this.setState( prevState => {
                  return { count : prevState.count + incrementNumber }
              })
          }
      
    render() {
        return <WrappedComponent count={this.state.count} countHandler={this.countHandler} {...this.props} />
    }
    }
    return WithCounter;

}

export default withCounter