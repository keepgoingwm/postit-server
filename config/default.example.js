module.exports = {
  postit: {
    "logger": {
      "appenders": {
        "access": {
          "type": "dateFile",
          "pattern": "-yyyy-MM-dd.log",
          "filename": "access.log"
        },
        "application": {
          "type": "dateFile",
          "pattern": "-yyyy-MM-dd.log",
          "filename": "app.log"
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
        "applicationConsole": {
          "appenders": [
            "application",
            "console"
          ],
          "level": "WARN"
        }
      }
    },
    "core": { plugins: [] },
  }
}