import React, { Component } from 'react';
import client from './feathers';

class Shoppinglist extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  addItem(ev) {
    const inputDescription = ev.target.querySelector('[id="description"]');
    const inputQuantity = ev.target.querySelector('[id="quantity"]');
    const description = inputDescription.value.trim();
    const quantity = parseInt(inputQuantity.value.trim());

    console.log( "Description: " + description );
    console.log( "Quantity: " + quantity );

    this.state.items.create({
      description,
      quantity
    })
    .then(() => {
      inputDescription.value = '';
      inputQuantity.value = '1';
    });

    ev.preventDefault();
  }

  componentDidMount() {
    const items = client.service('items');

    this.setState({items})
  }
  render() {
    return(
    <div>
      <div className="py-5 text-center">
        <h2>Shopping List</h2>
      </div>

      <div className="row">
        <div className="col-md-12 order-md-1">
          <h4 className="mb-3">Items</h4>
          <form onSubmit={this.addItem.bind(this)} className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" defaultValue="" required />
                <div className="invalid-feedback">
                    A description is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className="form-control" id="quantity" defaultValue="1" required />
                <div className="invalid-feedback">
                    A valid quantity is required.
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Add item</button>
          </form>
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2020 CPSC 2650</p>
      </footer>
    </div>
    );
  }
}

export default Shoppinglist;
