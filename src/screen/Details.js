import React from 'react';
import { WebView } from 'react-native-webview';

const runFirst = `
      document.body.style.backgroundColor = 'red';
      true; // note: this is required, or you'll sometimes get silent failures
    `;

const Details = ({ route }) => {
    return(
        <WebView
            source={{ uri: route.params.website}}
            injectedJavaScript={runFirst}
        />
    );
};

export default Details;