import React, { Component } from 'react';
import menu from './menu.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    
        var menu = document.querySelector('ul'),
        menuLink = document.querySelector('img');

        menuLink.addEventListener(
          'click', function(e){
            menu.classList.toggle('active');
            e.preventDefault();
          }
        );
    
    }
  

  render() {

    return (
      <React.Fragment>

        <aside>
          <figure>
            <div id="avatar"></div>
            <figcaption>Pradeep Ghimire</figcaption>
          </figure>
          <img src={menu} alt={"menu"}/>
          <nav>
            <ul className="active">
              <li><a href="#">HOME</a></li>
              <li><a href="#">SKILLS</a></li>
              <li><a href="#">PROJECTS</a></li>
              <li><a href="#">CONTACT</a></li>

            </ul>
          </nav> 
        </aside>
        <main>
          <h1>“True knowledge exists in knowing that you know nothing.”
          <i>- Socrates</i>
          </h1>
        </main>

       


      </React.Fragment>
    );
  }
}

export default App;
