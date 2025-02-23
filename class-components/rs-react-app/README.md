
It is a first task from course, the main goal was to touch some class component approach in React development

The task was:
<br>
React project setup. Class components. Error boundary.
Application Requirements

<ul>
    <li>
        Divide your page into at least two sections/components. The smaller section should be at the top, and the larger section should be at the bottom.
    </li>
    <li>
        In the top section, place a Search input and a "Search" button. The Search component should look for a previously saved search term in the local storage (LS). If there isn't any, leave the input empty.
    </li>
        <li>
        The bottom section should be used for displaying search results (name and a small description).
    </li>
    <li>
        By default, the application makes a call to the selected API to get a list of items using the search term from the input (only the first page). If the input is empty, make a call to get all items.
    </li>
    <li>
        When the user modifies the Search input and clicks the "Search" button, the application makes a call to the API with the newly provided search term (the search term should not have any trailing spaces; process the input) to get the results (only the first page).
    </li>
    <li>
        The provided search term should be saved to the LS. If the value exists, overwrite it.
    </li>
    <li>
        If your application makes a request to the server API, this should be visible to the user. Implement a Spinner, Skeleton, Loading Bar, Blurring Content, or any other appropriate method in your UI to indicate this.
    </li>
    <li>
        If the request didn't succeed (status code 4xx or 5xx), show the meaningful message. You can use ModResponse or similar, to test this functionality.
    </li>
    <li>
        Wrap the application in an error boundary to catch errors. Report an error to the console and show a fallback UI (use respective methods for this). Create a button that will throw an error on click to test the functionality.
    </li>
</ul>
    
    

Template

This template represents the possible layout for your app, but you can create your app based on your own preferences.

Successful response.

+-------------------------------------------------------+<br>
|                                                       |<br>
|  +------------------ Top controls ------------------+ |<br>
|  | +--------------------------+ +-----------------+ | |<br>
|  | | [Search Input Field]     | | [Search Button] | | |<br>
|  | +--------------------------+ +-----------------+ | |<br>
|  +--------------------------------------------------+ |<br>
|                                                       |<br>
|  +-------------------- Results ---------------------+ |<br>
|  | +----------------------------------------------+ | |<br>
|  | | Item Name  | Item Description                | | |<br>
|  | +----------------------------------------------+ | |<br>
|  | | [Item 1]   | [Description 1]                 | | |<br>
|  | | [Item 2]   | [Description 2]                 | | |<br>
|  | | ...        | ...                             | | |<br>
|  +--------------------------------------------------+ |<br>
|                                       [Error Button]  |<br>
+-------------------------------------------------------+<br>

Non-successful response.

+-------------------------------------------------------+<br>
|                                                       |<br>
|  +------------------ Top controls ------------------+ |<br>
|  | +--------------------------+ +-----------------+ | |<br>
|  | | [Search Input Field]     | | [Search Button] | | |<br>
|  | +--------------------------+ +-----------------+ | |<br>
|  +--------------------------------------------------+ |<br>
|                                                       |<br>
|  +-------------------- Results ---------------------+ |<br>
|  |                                                  | |<br>
|  |                 Error description                | |<br>
|  |                                                  | |<br>
|  +--------------------------------------------------+ |<br>
|                                       [Error Button]  |<br>
+-------------------------------------------------------+<br>

Technical Requirements
<ul>
    <li>Create a separate branch for this task. Branch name: "class-components".</li>
    <li>Follow the requirements for the project setup listed here</li>
    <li>Pick a RESTfull api which supports search and pagination (pagination might be referred as offset and limit params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.</li>
    <li>All logical parts should be set into separate components such as CardList, Card, Search, Header, Main etc.</li>
    <li>Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.</li>
    <li>You can use CSS frameworks (e.g. Tailwind CSS).</li>
</ul>   



What tasks i tried to do and i hope i've done:
<ul>
    <li>
        :heavy_check_mark: Eslint is set up, when lint command is run it doesn't produce any errors (if there are warnings score might be less)
    </li>
    <li>
        :heavy_check_mark: Prettier is set up, format:fix command fixes issues
    </li>
    <li>
        :heavy_check_mark: Husky is set up, linting is run on pre-commit
    </li>
    <li>
        :heavy_check_mark: Page is split into at least two sections, top one has Search input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api)
    </li>
    <li>
        :heavy_check_mark: When user types something to the Search input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term
    </li>
    <li>
        :heavy_check_mark: The search term typed into the Search input is saved in the LS when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term)
    </li>
    <li>
        :ballot_box: Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error (i have added ErrorBoundary class component and it catches and prints an error, looks like i didn't make any cool fallback UI and there is no way to remove an error from page without reloading page)
    </li>
</ul>
  i took some preloader from internet.
  i have created search input and search button that raises event to parent component, and handler for that event loads 10 elements from list, i added some variables for pagination and some pagination using provided next|previous links by SWapi service, maybe i should have also added disabled attribute or d-none class for next|previous buttons according to parsed next|previous link(if it is empty), and there were some places in code that require some work on adding typization (for example "results: []" almost everywhere, i was not sure about properties of detail element until i created the detail element) and i didn't use interfaces.
