import React , {Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {
  state = {
     showInfo: false
  };

  handleInfo = () =>{
  this.setState({
        showInfo: !this.state.showInfo
     });
  };


  render(){
    
    const id    = this.props.tour.id;
    const  city = this.props.tour.city;
    const image = this.props.tour.image;
    const name = this.props.tour.name;
    const info = this.props.tour.info;
    const {removeTour} = this.props;
       
       return (
        
        <article className="tour">           
          <div className="img-container">
            <img src={ image }  alt="this is the picture" />   

              <span className="close-btn"
               onClick={() => {removeTour(id)}}>
                <i className="fas fa-window-close" />
              </span>
              
            </div>
            <div className="tour-info"> 
              <h3>{ city }</h3>   
              <h4>{ name }</h4>   
              <h5>
                info{" "} 
                <span onClick={this.handleInfo}  >
                <i className="fas fa-caret-square-down" />
                </span>   
               </h5>
            {this.state.showInfo  &&  <p>{info}</p>}
              
            </div>
            </article>
   
      );
  }
}