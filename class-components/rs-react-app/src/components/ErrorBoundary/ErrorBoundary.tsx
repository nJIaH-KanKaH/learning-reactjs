import { Component, ErrorInfo, ReactNode } from 'react';

class ErrorBoundary extends Component<{children:ReactNode}> {
    state = {
        errorMessage: '',
        children: this.props.children,
        error:'',
        errorInfo:'',
    };

    static getDerivedStateFromError(error: Error) {
        return { errorMessage: error.toString() };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({error:error,errorInfo:info});
        this.logErrorToServices(error.toString(), info.componentStack);
    }
    logErrorToServices = console.log;
    render() {
        if (this.state.errorMessage) {
            return (
                <>
                    <p>{this.state.errorMessage}</p>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
