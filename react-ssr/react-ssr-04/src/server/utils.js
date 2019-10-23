import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Route} from 'react-router-dom';

import {Provider} from 'react-redux';

export const renderPage = (store, routes, req) => {
  const App = () => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {routes.map (route => {
              return <Route key={route.key} {...route} />;
            })}
          </div>
        </StaticRouter>
      </Provider>
    );
  };

  const content = renderToString (<App />);
  const stateData = JSON.stringify (store.getState ());

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${stateData}
          };
        </script>
        <script src='/index.js'></script>
    </body>
    </html>
  `;
};
