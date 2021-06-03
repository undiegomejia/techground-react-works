import React from 'react';
import { QueryState, SearchProps } from './Types'

class SearchBar extends React.Component<SearchProps, QueryState> {
    state: QueryState = { query: '' }

    onInputChange = (e:any) => {
        this.setState({query: e.target.value})
    }

    onFormSubmit = (e:React.FormEvent):void => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.query)
    }

    render() {
      return (
          <div className="search-bar ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                      <label htmlFor="search">Movie Search</label>
                      <input id="search" type="text" onChange={this.onInputChange} value={this.state.query} />
                  </div>
              </form>
        </div>
      )
    }
  }

export default SearchBar;
