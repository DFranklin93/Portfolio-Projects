import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {

    var {listingsData} = this.props

    if( listingsData == undefined || listingsData.length == 0){
      return "Sorry. No matched listings found"
    }
    return listingsData.map((listing, index) => {
      if (this.props.globalState.view == 'box') {
        // console.log(this.props.globalState.view)
        // THIS IS BOX VIEW
        return (
          <div className="col-md-3" key={index} style={{padding: `20px 5px`, display: `block`}}>
          <div className="listing">
              <div className="listing-img" style={{backgroundImage: `url("${listing.image}")`, backgroundSize: `cover`}}>
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-md-3">
                    <div className="user-img" style={{backgroundImage: `url("${listing.userImage}")`, backgroundSize: `contain`}}> </div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">{listing.user}</span>
                      <span className="post-date">{listing.postDate}</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fas fa-home"></i><span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fas fa-bed"></i><span>{listing.bedrooms} bedroom(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price}</span>
                <span className="location"><i className="fas fa-map-marker"></i>{listing.city}, {listing.state}</span>
              </div>
            </div>
          </div>
        )
      } else {
        // THIS IS LIST VIEW
        return (
          <div className="col-md-12 col-lg-6" key={index} style={{padding: `10px`}}>
          <div className="listing">
              <div className="listing-img" style={{backgroundImage: `url("${listing.image}")`, backgroundSize: `cover`}}>
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-md-3">
                    <div className="user-img" style={{backgroundImage: `url("${listing.userImage}")`, backgroundSize: `contain`}}> </div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">{listing.user}</span>
                      <span className="post-date">{listing.postDate}</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fas fa-home"></i><span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fas fa-bed"></i><span>{listing.bedrooms} bedroom(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price}</span>
                <span className="location"><i className="fas fa-map-marker"></i>{listing.city}, {listing.state}</span>
              </div>
            </div>
          </div>
        )
      }


    })
  }
  render () {

    return(
      <section id="listings">
        <section className="search-area" onChange={this.props.change}>
        <input type="text" name="search"  />
        </section>

        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-list" onClick={this.props.changeView.bind(null, "list")}></i>
              <i className="fas fa-th" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>
          </div>
        </section>

        <section className="listings-results" >
          {this.loopListings()}
        </section>



        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li>30</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}
