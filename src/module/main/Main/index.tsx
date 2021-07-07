import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ObjectUtil } from 'jamyth-web-util';
import { NavigationService } from 'util/NavigationService';
import { ThemeUtil } from 'util/ThemeUtil';

export const Main = React.memo(() => {
    return (
        <ChakraProvider theme={ThemeUtil.getTheme()}>
            <Switch>
                {ObjectUtil.toArray(NavigationService, (path, component) => (
                    <Route exact path={path} component={component} key={path} />
                ))}
                <Redirect to="/lobby" />
            </Switch>
        </ChakraProvider>
    );
});
