import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import Routers from '../Routers';

export const renderPage = (req)=> {
    const App = () => {
        return (
          <StaticRouter location={req.path} context={{}}>
            {Routers}
          </StaticRouter>
        );
      };
    
      const content = renderToString (<App />);
    
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
            <script src='/index.js'></script>
        </body>
        </html>
        `
      ;
}