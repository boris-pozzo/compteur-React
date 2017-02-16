import React from 'react';
import './style.css';



class Chrono extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      value: '2017-06-14'
    };

  this.handleChange= this.handleChange.bind(this);
    
}
    //new Date()

    decrementChrono= function(){
      var dateEnd = new Date(this.state.value);
      var dateNew = new Date();
      

      var gap = dateEnd.getTime() - dateNew.getTime();
      
      this.setState({ millisecondes: gap });
      
      this.seconds();
      this.minutes();
      this.hours();
      this.days();

    }

    seconds= function(){
      const secondes = Math.floor(this.state.millisecondes / 1000 %60);
      this.setState({ counterSeconds: secondes});
    }

    minutes= function(){
      const minute = Math.floor(this.state.millisecondes / (60*1000)%60);
      this.setState({ counterMinutes: minute}); 
    }

    hours= function(){
      const heure = Math.floor(this.state.millisecondes / (60*60 *1000) %24);
      this.setState({ counterHours: heure}); 
    }    
    
    days= function(){
      const jours = Math.floor(this.state.millisecondes / (60*60 *1000*24));
      this.setState({ counterDays: jours}); 
    }

  
    handleChange= function(e){ 

      this.setState({value: e.target.value});
    }

 
  
   componentDidMount = () => {
    setInterval(this.decrementChrono.bind(this), 1000);
    

  };
  

  render() {
    return (
      <div className="chrono-container" >
        <h1>Count down</h1>
        <div className="chrono-card">
          <div className="chrono days">{this.state.counterDays}</div>
          <p> : </p>
          <div className="chrono hours">{this.state.counterHours}</div>
          <p>:</p>
          <div className="chrono minutes">{this.state.counterMinutes}</div>
          <p>:</p>
          <div className="chrono seconds">{this.state.counterSeconds}</div>
        </div>
        
        
       
      
        <input type="date" value={this.state.value} onChange={this.handleChange} />

       


      

      </div>
    );
  }
}

export default Chrono;