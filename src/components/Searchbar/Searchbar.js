import { SearchBar, SearchForm, Button, Input } from './Searchbar.styled';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  state = {
    searchName: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  handleChange = event => {
    this.setState({
      searchName: event.currentTarget.value.toLowerCase(),
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchName);
    console.log(this.state.searchName);
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <Button type="submit">
            <RxMagnifyingGlass size={24} />
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchName}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
