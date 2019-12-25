import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      result: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const text = event.target.value;

    const myArr = this.props.array && this.props.array.filter((item) => {
      console.log(item, text)
      return text && item.includes(text.toLowerCase());
    });

    this.setState({ result: myArr });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}/>
        {
          this.state.result.length ?
            this.state.result.map(res => <p key={res}>{res}</p>)
            :
            <p>No result</p>
        }
      </div>
    );
  }
}

export default Search;
