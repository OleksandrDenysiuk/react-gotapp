import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharecterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';

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
        const randomChar = this.state.randomCharVisible ?  <RandomChar/> : null;

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
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
                    <CharecterPage/>
                </Container>
            </>
        );
    }
};