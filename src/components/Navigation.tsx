import * as React from 'react';

interface NavState {
  activePage?: string;
}

export class Navigation extends React.Component<object, NavState> {

  constructor(props: object) {
    super(props);
    this.state = {
      activePage: '' + window.location.hash.replace('#', '').toLowerCase()
    };
  }

  pageState(val: string) {
    this.setState({
      activePage: val
    });
  }

  render() {
    return (
      <div id='navbar'>
        <a className={(this.state.activePage == '' || this.state.activePage == 'home') ? 'active' : ''} onClick={() => this.pageState('home')} href='#'>Home</a>
        <a className={(this.state.activePage == 'about') ? 'active' : ''} onClick={() => this.pageState('about')} href='#about'>About</a>
        <a className={(this.state.activePage == 'projects') ? 'active' : ''} onClick={() => this.pageState('projects')} href='#projects'>Projects</a>
        <a className={(this.state.activePage == 'contact') ? 'active' : ''} onClick={() => this.pageState('contact')} href='#contact'>Contact</a>
      </div>
    );
  }
}
