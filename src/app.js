const express = require("express");

const app = express();
const cors = require("cors");
const compress = require("compression");
const methodOverride = require("method-override");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require("morgan");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const { notFoundHandler, errorHandler } = require("./utils/exceptions");
const { MORGAN_FORMAT } = require("./utils/constant");
const routing = require("./routes");
require("dotenv").config();

app.use(compress());
app.use(methodOverride());
app.use(helmet());
app.use(cors());
app.options("*", cors());
app.use(express.json({ limit: "200kb" }));

const morganFormat = MORGAN_FORMAT;
app.use(morgan(morganFormat, { stream: process.stderr }));
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({
      app,
    }),
  ],

  tracesSampleRate: Number(process.env.SENTRY_TRACE_RATE),
});

if (process.env.NODE_ENV !== "test") {
  app.use(Sentry.Handlers.requestHandler());
}

app.use(Sentry.Handlers.tracingHandler());

app.get("/favicon.ico", (_req, res) => {
  res.status(204);
  res.end();
});
app.use(xss());
app.use(routing);
app.use(notFoundHandler);
app.use(errorHandler);

app.use(Sentry.Handlers.errorHandler());

module.exports = app;
