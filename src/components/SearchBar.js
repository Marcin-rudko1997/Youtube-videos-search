import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    }

    onSubmitChange = (e) => {
        e.preventDefault();

        // FUTURE Callback Function to call and pass state info
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmitChange} className="ui form">
                    <div className="field">
                        <label>Videos search</label>
                        <input onChange={this.onInputChange} type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;