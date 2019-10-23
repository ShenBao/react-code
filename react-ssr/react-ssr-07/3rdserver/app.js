const express = require ('express');
const cookieParser = require ('cookie-parser');
const utils = require ('./utils');

const app = express ();

app.use (express.static ('3rdserver'));
app.use (cookieParser ());

const secret = '3rdservertestabc123';
const homeList = [
  {
    id: 0,
    title: 'home',
  },
  {
    id: 1,
    title: 'React',
  },
  {
    id: 12,
    title: 'React Router',
  },
  {
    id: 123,
    title: 'React Redux',
  },
];
const list = [
  {
    id: 0,
    title: 'list',
  },
  {
    id: 1,
    title: 'React',
  },
  {
    id: 12,
    title: 'React Router',
  },
  {
    id: 123,
    title: 'React Redux',
  },
];

app.get ('/t3rd/api/homeList.json', function (req, res) {
  const currentTime = utils.dateFormat ('YYYY-mm-dd HH:MM:SS', new Date ());
  console.log ('\x1b[91m', '============ 3rd server: ' + currentTime);
  console.log ('\x1b[37m', 'current path:', req.path);
  res.send ({
    success: true,
    data: homeList,
  });
});

app.all ('*', function (req, res, next) {
  const currentTime = utils.dateFormat ('YYYY-mm-dd HH:MM:SS', new Date ());
  console.log ('\x1b[91m', '============ 3rd server: ' + currentTime);
  console.log ('\x1b[37m', 'current path:', req.path);
  console.log ('current secret:', req.query.secret);
  console.log ('current request source:', req.query.requestSource || 'client');
  console.log (
    'current userName:',
    req.cookies.userName || 'the user is not login'
  );

  if (req.query.secret === secret) {
    next ();
  } else {
    res.send ({
      success: false,
      message: 'secret is error',
    });
  }
});

app.get ('/t3rd/api/login.json', function (req, res) {
  const loginTime = utils.dateFormat ('YYYY-mm-dd--HH.MM.SS', new Date ());
  const data = {
    userName: 'ShenBao',
    loginTime: loginTime,
  };
  for (const key in data) {
    res.cookie (key, data[key], {maxAge: 100000000, httpOnly: true});
  }
  res.send ({
    success: true,
    data: {
      login: true,
    },
  });
});

app.get ('/t3rd/api/logout.json', function (req, res) {
  const data = {
    userName: '',
    loginTime: '',
  };
  for (const key in data) {
    res.cookie (key, data[key], {expires: new Date (0), httpOnly: true});
  }
  res.send ({
    success: true,
    data: {
      logout: true,
    },
  });
});

app.get ('/t3rd/api/isLogin.json', function (req, res) {
  const hasLogin = Boolean (req.cookies.userName);
  res.send ({
    success: true,
    data: {
      login: hasLogin,
    },
  });
});

app.get ('/t3rd/api/list.json', function (req, res) {
  const isLogin = Boolean (req.cookies.userName);
  const resData = {
    success: isLogin,
  };
  if(isLogin) {
    resData.data = list;
  }

  res.send (resData);
});

app.all ('*', function (req, res, next) {
  res.send ({
    success: false,
    message: 'the path is not find',
  });
});

const server = app.listen (3500, function () {
  console.log ('mock 3rd server url: http://localhost:3500/');
});
