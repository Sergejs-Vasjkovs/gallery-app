import { Component, ErrorInfo, ReactNode } from "react";
import ErrorMessagePage from "../components/Pages/ErrorMessagePage/ErrorMessagePage";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error: ", error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <ErrorMessagePage title="Oops something went wrong" />;
        }

        return children;
    }
}

export default ErrorBoundary;
