import React from 'react';
import App from './App/comp.App';

let rootInstance = React.render(<App />, document.getElementById('app'));

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
