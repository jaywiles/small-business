import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class Add extends Component {
  state = {
    name: '',
    address: '',
    hours: '',
    description: '',
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newListing = { ...this.state }
    // last part of next line changed from carTotal
    newListing.id = this.props.listingTotal + 1
    delete newListing.open
    console.log("LISTING: ", newListing)
    // last part of next line changed from addCar
    this.props.addListing(newListing)
  }

  componentDidUpdate = (prevProps, prevState) => {
    // if (prevState.open !== this.state.open) {
      this.setState({
        name: '',
        address: '',
        hours: '',
        description: ''
      })
    // }
  }

  render() {
    return (
      <div>
        <form 
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
          <TextField 
              id="name" 
              placeholder="Name" 
              value={this.state.name} 
              onChange={this.handleTextChange} 
              required />
          <TextField 
              id="address" 
              placeholder="Address" 
              value={this.state.address} 
              onChange={this.handleTextChange}
              required />
          <TextField 
              id="hours" 
              placeholder="Hours (ex. 8AM - 9PM)" 
              value={this.state.hours} 
              onChange={this.handleTextChange} 
              required />
          <TextField 
              id="description" 
              placeholder="Description" 
              value={this.state.description} 
              onChange={this.handleTextChange} 
              required />
          <br />
          <Button variant="contained" color="primary" type="submit">Add Listing</Button>
        </form>
        </div>
    )
  }
}

export default Add