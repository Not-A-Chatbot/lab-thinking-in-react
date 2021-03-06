import React, { Component } from 'react';
// IMPORT COMPONENTS
import ProductRow from './ProductRow';
//

export class ProductTable extends Component {
  render() {
    //SETUP
    //var { products } = this.props.products;
    //DISPLAY
    return (
      <div>
        <table >
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td>Price</td>
              <td> Stock </td>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <ProductRow product={product} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
