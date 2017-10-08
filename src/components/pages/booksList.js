import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Carousel,Grid, Col, Row, Button} from 'react-bootstrap';

import {getBooks} from '../../actions/booksActions';
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';
class BooksList extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const booksList = this.props.books.map(function(booksArr) {
            return (
                <Col xs={12} sm={6} md={4} key={booksArr._id}>
                    <BookItem
                    _id={booksArr._id}
                    title={booksArr.title}
                    description={booksArr.description}
                    images={booksArr.images}
                    price={booksArr.price}/>
                </Col>
            )
        })
        return (
            <Grid>
            <row>
            <Carousel>
    <Carousel.Item>
      <img width={900} height={300} alt="900x300" src="images/suru1.jpeg"/>
      <Carousel.Caption>
        <h3>Suruchi Keshri</h3>
        <p>ye lo you asked about having your name on the website see i posted yoy pics also hihihihihi....</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={300} alt="900x300" src="images/suru.jpeg"/>
      <Carousel.Caption>
        <h3>Sorry</h3>
        <p>Agar pics acchi nahi hai to jo aasani se mili wo laga diya...</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
            </row>

                <Row style={{marginTop:'15px'}}>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}
function mapStateToProps(state) {
    return {books: state.books.books}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
