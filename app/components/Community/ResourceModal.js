// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component

var ResourceModal = React.createClass({
  
  render: function() {
    return (
      <div className="container">
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Resources</h4>
                    </div>
                    <div className="modal-body">
                        <h2>Java</h2>
                        <ul>
                            <li><a href="https://www.java.com/en/"></a></li>
                            <li><a href="https://go.java/index.html"></a></li>
                            <li><a href="http://www.w3schools.in/java-tutorial/intro/"></a></li>
                            <li><a href="https://www.javatpoint.com/java-oops-concepts"></a></li>
                            <li><a href="https://stackify.com/oops-concepts-in-java/"></a></li>
                            <li><a href="http://howtodoinjava.com/object-oriented/object-oriented-principles/"></a></li>

            
                        </ul>
                        <h2>JavaScript</h2>
                        <ul>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"></a></li>
                            <li><a href="https://www.javascript.com/"></a></li>
                            <li><a href="https://javascript.info/"></a></li>
                            <li><a href="https://github.com/getify/You-Dont-Know-JS"></a></li>
                            <li><a href="https://www.w3schools.com/js/js_intro.asp"></a></li>
                            <li><a href="https://www.w3.org/community/webed/wiki/What_can_you_do_with_JavaScript"></a></li>
                            <li><a href="https://www.ecma-international.org/ecma-262/6.0/"></a></li>
                            <li><a href="https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond#you-dont-know-js-es6--beyond"></a></li>
                            <li><a href="https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c"></a></li>
                            <li><a href="http://eloquentjavascript.net/"></a></li>
                             <li><a href="https://hackernoon.com/why-functional-programming-matters-c647f56a7691"></a></li>
                        </ul>


                        <h2>Phython</h2>
                        <ul>
                            <li><a href="https://www.python.org/about/gettingstarted/"></a></li>
                            <li><a href="https://pythonprogramming.net/introduction-to-python-programming/"></a></li>
                            <li><a href="https://www.codecademy.com/learn/python"></a></li>
                            <li><a href="https://www.tutorialspoint.com/python/"></a></li>
                        </ul>

                         <h2>C++</h2>
                        <ul>
                            <li><a href="http://www.geeksforgeeks.org/c-plus-plus/"></a></li>
                            <li><a href="https://www.tutorialspoint.com/cplusplus/"></a></li>
                            <li><a href="http://www.learncpp.com/"></a></li>
                            <li><a href="http://www.cprogramming.com/tutorial.html"></a></li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = ResourceModal;
