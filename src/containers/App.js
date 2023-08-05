import React  , {Component} from "react";
import {Robots} from "../Robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";



class  App extends Component {
    constructor(){
        super()
        this.state = {
            Robots: Robots,
            searchfield: ''
        }
    }

    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filterdrobots = this.state.Robots.filter( Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            
            <div className="tc ">
                <nav className="sticky">
                    <h1 className="tc f-subheadline lh-title">RoboFriends</h1>
                    < SearchBox searchchange = {this.onsearchchange} />
                </nav>
                <div className="body">
                    < CardList Robots={filterdrobots} />
                </div>
            </div>
        );
    }
    
}

export default App;