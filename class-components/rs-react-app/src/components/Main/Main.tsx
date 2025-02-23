import { Component } from 'react';
import Search from './../Search/Search';
import { fetchData } from '../../services/FetchData/FetchData';
import SearchResults from './../SearchResults/SearchResults';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

class Main extends Component {
    state = {
        searchString: '',
        serverUrl: 'https://swapi.dev/api/people/',
        results: [],
        count: 0,
        error: null,
        isLoading: true,
        previous: null,
        page: 1,
        next: null,
        elementPerPage: 10,
    };

    shouldComponentUpdate(nextState: { searchString: string, isLoading: boolean }) {
        if (nextState.searchString === this.state.searchString) {
            return false;
        }
        if (nextState.isLoading === this.state.isLoading) {
            return false;
        }
        return true;
    }
    handleSearchChange = async (searchString: string) => {
        await this.selectPeopleBySearch(
            this.state.serverUrl,
            searchString,
            1
        );
    };
    selectPeopleBySearch = async (
        url: string,
        searchString: string,
        page: number
    ) => {
        this.setState({ isLoading: true });
        try {
            const data = await fetchData(url, {
                search: searchString,
                page: page,
            });
            if (data) {
                const tmpprev = data.previous ? new URL(data.previous) : null;
                const tmpnext = data.next ? new URL(data.next) : null;
                this.setState({
                    searchString,
                    count: data.count,
                    results: data.results,
                    isLoading: false,
                    page: page,
                    previous: tmpprev?.searchParams.get('page') ?? null,
                    next: tmpnext?.searchParams.get('page') ?? null,
                });
            } else {
                throw new Error('The data is Empty');
            }
        } catch (error) {
            this.setState({ error: error, isLoading: false });
        }
    };
    throwErrorMessage = () => {
        this.setState({ error: Error('Error-throwing button clicked') });
    };

    render() {
        const { count, results, error, isLoading, previous, next, page, searchString, serverUrl, elementPerPage } = this.state;
        if (!(error == null)) {
            throw error;
        }
        return (
            <div>
                <Header></Header>
                <Search onSearchChange={this.handleSearchChange} />
                {isLoading && <Preloader></Preloader>}
                <SearchResults results={results} els={elementPerPage} page={page} />
                <button onClick={() => { this.selectPeopleBySearch(serverUrl, searchString, previous ?? 1); }} className="link">
                    previous
                </button>
                <div>Total elements count:{count}</div>
                <button onClick={() => { this.selectPeopleBySearch(serverUrl, searchString, next ?? page); }} className="link">
                    next
                </button>
                <button onClick={this.throwErrorMessage} className="btn">
                    Throw an Error
                </button>
            </div>
        );
    }
}

export default Main;
