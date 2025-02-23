export async function fetchData(
    serverUrl: string,
    queryObject: { search: string; page: number }
) {
    const url = new URL(serverUrl);
    if (queryObject) {
        const searchParams = new URLSearchParams();
        Object.entries(queryObject).forEach(([key, value]) => {
            searchParams.append(key, value.toString());
        });
        url.search = searchParams.toString();
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
