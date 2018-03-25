import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import * as viewActions from '../../redux/actions/home/index';

import { Link } from 'react-router-dom';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        const { product, authen } = this.state;
        return (
            <Card>
                <CardImg top src={product.image} />
                <CardBody>
                    <CardTitle>{product.title}</CardTitle>
                    <CardSubtitle>{product.price} ฿</CardSubtitle>
                    <CardText>{product.detail}</CardText>
                    <Link to={authen ? '#' : '/register'} className='btn btn-outline-primary btn-sm'>{authen ? 'ใส่ตะกร้า' : 'สมัครสมาชิก'}</Link>
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)