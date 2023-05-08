import { Component } from "react";
import { Link } from "react-router-dom";

//Caso o programa esteja com algum erro ele dá a opção de voltar para a página principal
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if(this.state.hasError) {
            return(
                <h2>
                    There was an error with this listing. <Link to="/">Click here</Link>{" "}to back to the home page.
                </h2>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;