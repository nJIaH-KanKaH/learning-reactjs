import { Component } from 'react';
import SearchResultsDetail from '../SearchResultsDetail/SearchResultsDetail';

class SearchResults extends Component<{
    results: [],
    els: number,
    page: number,
}> {
    render() {
        const { results, els, page } = this.props;
        const offset = els * (page - 1);
        return (
            <>
                <table>
                    <tbody>
                        {results.map((item, index) => (
                            <SearchResultsDetail key={item?.name} kk={offset + index + 1} item={item} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}
export default SearchResults;
