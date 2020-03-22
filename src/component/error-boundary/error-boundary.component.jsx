import React, { Component } from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

// whenever using getDerivedStateFromError() or/and componentDidCatch, this component becomes an ErrorBoundary
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        // process the error

        return { hasErrored: true }; // the return object must be able to use in setState() to update the state in the class.
    }

    // what this function does is to give us access to both the error and the info related to the error, and how it got through. info: tell us which component thow the error/broken.
    componentDidCatch(error, info) {
        // do some side-effects, like log the error
        console.error(error, info);
        
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry, this page is gone.</ErrorImageText>
                </ErrorImageOverlay>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
