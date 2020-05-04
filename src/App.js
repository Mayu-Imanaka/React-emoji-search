import React, { PureComponent } from 'react';
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <EmojiResults emojiData={this.state.filteredEmoji}></EmojiResults>
      </div>
    );
  }
}