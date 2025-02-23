import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

function App() {
    return (
        <>
            <ErrorBoundary>
                <Main></Main>
            </ErrorBoundary>
        </>
    );
}

export default App;
