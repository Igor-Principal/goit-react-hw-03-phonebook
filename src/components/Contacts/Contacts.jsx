import { Component } from 'react';
import css from './contacts.module.css';

class Contacts extends Component {
  state = {};

  handleClick = e => {
    this.props.handleDelete(e.target.id);
  };
  render() {
    const elements = this.props.data.map(({ name, number, id }) => (
      <li className={css.item} key={id}>
        {name} : {number}
        <button
          className={css.button}
          id={id}
          type="button"
          onClick={this.handleClick}
        >
          Delete
        </button>
      </li>
    ));
    return (
      <>
        <ul className={css.list}> {elements}</ul>
      </>
    );
  }
}

export default Contacts;
