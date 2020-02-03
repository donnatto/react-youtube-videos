import React, { Component } from 'react';

import SearchBar from './SearchBar';
import VideList from './VideoList';
import youtube from '../apis/youtube';

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideList videos={this.state.videos} />
      </div>
    );
  }
}
