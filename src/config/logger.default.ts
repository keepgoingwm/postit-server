export default {
  "appenders": {
    "access": {
      "type": "dateFile",
      "pattern": "-yyyy-MM-dd.log",
      "filename": "log/access.log"
    },
    "application": {
      "type": "dateFile",
      "pattern": "-yyyy-MM-dd.log",
      "filename": "log/app.log"
    },
    "console": {
      "type": "console"
    }
  },
  "categories": {
    "default": {
      "appenders": [
        "console"
      ],
      "level": "WARN"
    },
    "access": {
      "appenders": [
        "access"
      ],
      "level": "INFO"
    },
    "application": {
      "appenders": [
        "application"
      ],
      "level": "WARN"
    },
    "server": {
      "appenders": [
        "application",
        "console"
      ],
      "level": "WARN"
    }
  }
}