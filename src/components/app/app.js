import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    state = {
        randomCharVisible: true
    }

    onToggleChar = () => {
        this.setState((state) => {
            return {randomCharVisible: !state.randomCharVisible}
        })
    }
    
    render() {
        const randomChar = this.state.randomCharVisible ?  <RandomChar/> : null;
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};