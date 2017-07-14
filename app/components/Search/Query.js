// Include React as a dependency
var React = require("react");

// Query Component Declaration
var Query = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      search: ""
    };
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("SELECT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log("newState", newState);
  },

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    this.props.updateSearch(this.state.search);
  },

  // Here we render the Query component
  render: function() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-github" aria-hidden="true"></i> Project Finder
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
               <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Search</strong></h4>
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      id="search"
                      onChange={this.handleChange}
                      required
                    />

                  
                </div>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
               
              
                
             
          
       
              
                

            

                

                

              
            

        
      
    
    );
  }
});

// Export the module back to the route
module.exports = Query;
