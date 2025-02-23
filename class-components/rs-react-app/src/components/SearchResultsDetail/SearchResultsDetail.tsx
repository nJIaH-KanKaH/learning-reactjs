import { Component } from 'react';

class SearchResultDetail extends Component<{
    item: {
        name: string;
        birth_year: string;
        eye_color: string;
        gender: string;
        hair_color: string;
        height: string;
        homeworld: string;
        mass: string;
        skin_color: string;
        url: string;
    };
    kk: number;
}> {
    render() {
        const { kk, item } = this.props;
        return (
            <tr>
                <td width="10%">{kk}</td>
                <td width="30%">{item.name}</td>
                <td width="60%">
                    Date Birth: {item.birth_year}, 
                    Eye color: {item.gender}
                    <br />
                    Gender: {item.eye_color},
                    Hair: {item.hair_color}
                    <br />
                    Height: {item.height},
                    Mass: {item.mass}
                    <br />
                    Skin color: {item.skin_color},
                    <a href={item.url}>Go to detail</a>
                </td>
            </tr>
        );
    }
}

export default SearchResultDetail;
