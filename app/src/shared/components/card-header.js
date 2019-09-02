import React from 'react';
import {
    CardHeader, Title,
    Button, Bullseye
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons'

import logo from '../utils/logo/logo-only.svg';

export default ({
    isUserLoggedIn,
    title,
    addTitle,
    setWizardVisible
}) => {
    
    return (
        <Bullseye>
            <img alt='logo' src={logo} style={{ height: "40px" }} />
            <Title headingLevel="h1" size="4xl">
                {title}
            </Title>
            <Button isDisabled={!isUserLoggedIn} variant="link" icon={<PlusCircleIcon />} onClick={() => setWizardVisible(true)}>
                {addTitle}
            </Button>
        </Bullseye>
    )
}