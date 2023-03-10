import { Component } from "react";
import SingleBookCard from "./SingleBookCard";
import { Form, Button, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    query: "",
  };

  filterBookList(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    return (
      <Container>
        <Form className="mb-3">
          <Form.Group className="mb-3 ">
            <Form.Label>titolo Libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="inserisci il titolo"
              value={this.state.query}
              onChange={(event) => this.filterBookList(event)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row>
          {this.props.category
            .filter((book) => {
              return book.title
                .toLowerCase()
                .includes(this.state.query.toLowerCase());
            })
            .map((Book) => {
              return (
                <SingleBookCard
                  selected={this.props.selected}
                  selectedCard={this.props.selectedCard}
                  selectedAsin={this.props.selectedAsin}
                  key={Book.asin}
                  title={Book.title}
                  img={Book.img}
                  category={Book.category}
                  price={Book.price}
                  asin={Book.asin}
                />
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
