import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, HousesPage, BooksPage, BooksItem} from '../pages';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    gotService = new GotService();


    state = {
        randomCharVisible: true,
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onToggleChar = () => {
        this.setState((state) => {
            return {randomCharVisible: !state.randomCharVisible}
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    
    render() {
        const randomChar = this.state.randomCharVisible ?  <RandomChar interval={15000}/> : null;

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomChar}
                                <button 
                                className="btn btn-primary"
                                onClick={this.onToggleChar}
                                >Toggle char</button>
                            </Col>
                        </Row>
                        <Route path='/' component={() => <h1>Welcome to GOT DB</h1>} exact/>
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} exact/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                        return <BooksItem bookId={id}/>}}/>
                        <Route path='/houses' component={HousesPage} />
                    </Container>
                </div>
            </Router>
        );
    }
};