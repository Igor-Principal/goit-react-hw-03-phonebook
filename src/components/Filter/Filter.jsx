import { Component } from 'react';
import css from "./filter.module.css"

class Filter extends Component {
  state = {};
  render() {
    return (
      <div className={css.inputContainer}>
        <input
          type="text"
          name="filter"
          className={css.input}
          value={this.props.filter}
          onChange={this.props.onChange}
          placeholder="Write name"
        />
      </div>
    );
  }
}

export default Filter;
