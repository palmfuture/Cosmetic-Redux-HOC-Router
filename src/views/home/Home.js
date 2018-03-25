import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Jumbotron, Button, Row, Col, Fade } from 'reactstrap';
import React, { Component } from 'react';

import { Product } from '../../components';
import * as viewActions from '../../redux/actions/home/index';

class Home extends Component {

    componentDidMount = () => {
        const { products, authen } = this.props;
    }

    renderProducts = () => {
        return this.props.products.map(product => {
            return (
                <Col key={product.id} md={10} lg={4} sm={10}>
                    <Product product={product} authen={this.props.authen} />
                    <br /><br />
                </Col>
            )
        });
    }

    render() {
        return (
            <Container>
                <Fade>
                    <div className='row'>
                        {this.renderProducts()}
                    </div>
                </Fade>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.Home.products,
        authen: state.Home.authen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
