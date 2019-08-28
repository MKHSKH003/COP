import React from 'react';
import {
    CardHeader, Title,
    Button
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons'

import logo from '../utils/logo/logo-only.svg';

export default ({
    title,
    addTitle,
    setIsModalVisible
}) => {
    
    return (
        <CardHeader>
            <img src={logo} style={{ height: "40px" }} />
            <Title headingLevel="h1" size="4xl">
                {title}
            </Title>
            <Button variant="link" icon={<PlusCircleIcon />} onClick={() => setIsModalVisible(true)}>
                {addTitle}
            </Button>
        </CardHeader>
    )
}