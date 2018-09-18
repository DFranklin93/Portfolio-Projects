import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.cities = this.cities.bind(this)
    this.extrasThis = this.extrasThis.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  cities(){
    if(this.props.globalState.populateFormsData.cities != undefined){
      var { cities } = this.props.globalState.populateFormsData

      return cities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }

  }
  extrasThis(){
    if(this.props.globalState.populateFormsData.extras != undefined){
      var { extras } = this.props.globalState.populateFormsData

      return extras.map((item) => {
        return (
          <label htmlFor="extras" key={item}>
            <span>{item}</span>
            <input name={item} value={item} type="checkbox" onChange={this.props.change} />
          </label>
        )
      })
    }
  }
  homeTypes(){
    if(this.props.globalState.populateFormsData.homeTypes != undefined){
      var { homeTypes } = this.props.globalState.populateFormsData

      return homeTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  bedrooms(){
    if(this.props.globalState.populateFormsData.bedrooms != undefined){
      var { bedrooms } = this.props.globalState.populateFormsData

      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }
  render () {
    return(
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="neighbourhood">City</label>
            <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
              <option value="All">All Cities</option>
              {this.cities()}
            </select>
          <label htmlFor="homeType">Home Types</label>
            <select name="homeType" className="filters housetype" onChange={this.props.change}>
              <option value="All">All</option>
              {this.homeTypes()}
            </select>
          <label htmlFor="bedrooms">Rooms</label>
            <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
              <option value="0">Any Amount</option>
              {this.bedrooms()}
            </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>
          <div className="filters extras">
            <span className="title">
              Extras
            </span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Fire Place</span>
              <input name="fire_place" value="fire_place" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Garage</span>
              <input name="garage" value="garage" type="checkbox" onChange={this.props.change} />
            </label>
          </div>
        </div>
      </section>
    )
  }
}
