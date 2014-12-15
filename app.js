var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes/index');
routes.publicFolderNm = 'public';
routes.combineJs = true;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, routes.publicFolderNm));
app.set('view engine', 'ejs');

// trust proxy
app.set('trust proxy', true);

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

//CORS and Referer validation
var validClients = [".*"];
try {
    validClients = JSON.parse(fs.readFileSync(path.join(__dirname, 'client-whitelist.json')).toString()).validClients;
}
catch (err) {}
validClients = validClients.map(function(v) {
    return new RegExp(v);
});

app.use(function(req, res, next) {
    // Referer
    if (req.headers.referer) {
        if (!validClients.some(function(v) {
                return v.test(req.headers.referer);
            })) {
            return res.status(403).end();
        }
    }

    if (req.headers.origin) {
        if (validClients.some(function(v) {
                return v.test(req.headers.origin);
            })) {
            res.header('Access-Control-Allow-Origin', req.headers.origin);
            if (req.headers['access-control-request-method']) {
                res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
            }
            if (req.headers['access-control-request-headers']) {
                res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
            }
            // preflight caching age set to 1 day
            res.header('Access-Control-Max-Age', 86400);
            // intercept preflight OPTIONS method
            if (req.method === 'OPTIONS') {
                return res.status(200).end();
            }
        }
        else {
            return res.status(403).end();
        }
    }
    next();
});

app.use(express.static(path.join(__dirname, routes.publicFolderNm, 'assets')));

app.use('/', routes);

app.use(function(req, res, next) {
    require('fs').exists(path.join(__dirname, routes.publicFolderNm, 'assets', req.path + '.ejs'), function(exists) {
        if (exists) {
            res.type(path.extname(req.path));
            res.render(path.join('assets', req.path + '.ejs'), {
                unippearHost: req.protocol + "://" + req.host
            });

        }
        else {
            next();
        }
    });
});


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('api/error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('api/error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;
