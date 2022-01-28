import React from 'react';
import {Button} from '@skynexui/components';
import appConfig from '../../../config.json';

export function ButtonChat(props) {

    return (
        <Button iconName={props.icon} styleSheet={{
            display: 'flex',
            maxWidth: '100px',
            margin: '0 6px 8px 0',
            backgroundColor: appConfig.theme.colors.secondary['02'],
            hover: {
                backgroundColor: appConfig.theme.colors.secondary['02'],
                filter: 'brightness(0.9)'
            },
            focus: {
                backgroundColor: appConfig.theme.colors.secondary['03']
            },
        }}/>
    );
}