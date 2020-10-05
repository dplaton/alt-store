import React from 'react';
import logo from './logo.svg';
import {
    CommerceApp,
    Portal,
    ConfigContextProvider,
    Cart,
    CartTrigger,
    AccountContainer,
} from '@adobe/aem-core-cif-react-components';
import '../node_modules/@adobe/aem-core-cif-react-components/dist/main.css';
import './App.css';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import partialConfig from './config';

function App() {
    const {storeView, graphqlEndpoint} = document.querySelector('body').dataset;
    const {mountingPoints, pagePaths} = partialConfig;
    const config = {
        ...partialConfig,
        storeView,
        graphqlEndpoint,
    };

    return (
        <I18nextProvider i18n={i18n} defaultNS="common">
            <ConfigContextProvider config={config}>
                <div className="App">
                    <header className="App-header">
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                    </header>
                    <CommerceApp>
                        <Portal selector={mountingPoints.minicart}>
                            <Cart />
                        </Portal>
                        <Portal selector={mountingPoints.cartTrigger}>
                            <CartTrigger />
                        </Portal>
                        <Portal selector={mountingPoints.accountContainer}>
                            <AccountContainer />
                        </Portal>
                    </CommerceApp>
                </div>
            </ConfigContextProvider>
        </I18nextProvider>
    );
}

export default App;
