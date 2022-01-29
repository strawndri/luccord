import React from 'react';
import { Button, Box } from '@skynexui/components';
import appConfig from '../../../config.json';

export function ButtonChat(props) {

    return (
        <Box
            styleSheet={{
                position: 'relative',
            }}
        >
            <Button
                iconName={props.icon}
                styleSheet={{
                    borderRadius: '2%',
                    fontSize: '20px',
                    margin: '0 2px 8px 2px',
                    backgroundColor: appConfig.theme.colors.secondary['02'],
                    hover: {
                        backgroundColor: appConfig.theme.colors.secondary['02'],
                        filter: 'brightness(0.9)'
                    },
                    focus: {
                        backgroundColor: appConfig.theme.colors.secondary['03']
                    },
                }}
            />
        </Box>
    );
}