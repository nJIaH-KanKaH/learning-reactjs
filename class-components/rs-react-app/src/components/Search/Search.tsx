import { Component, ChangeEvent } from 'react';

class Search extends Component<{
    onSearchChange: (searchString: string) => void;
}> {
    state = {
        localString: '',
    };
    componentDidMount() {
        const str = localStorage.getItem('prevSearch')?.toString() || '';
        this.setState({ localString: str });
        this.props.onSearchChange(str);
    }
    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const localString = event.target.value;
        this.setState({ localString });
    };
    handleSearchClick = () => {
        localStorage.setItem('prevSearch', this.state.localString);
        this.props.onSearchChange(this.state.localString);
    };
    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.localString}
                    onChange={this.handleInputChange}
                    placeholder="Search..."
                />
                <button onClick={this.handleSearchClick}>Search</button>
            </>
        );
    }
}
export default Search;
