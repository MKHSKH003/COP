import './component.css'

import React from 'react';

import LoadingOverlay from 'react-loading-overlay'

export default ({
    isLoading,
    text, 
    children
}) => (
        <LoadingOverlay
            active={isLoading}
            spinner
            text={text}
        >
            {children}
        </LoadingOverlay>
    )