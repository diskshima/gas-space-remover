# gas-space-remover

Google App Script to remove whitespaces from Google Spreadsheets.

## Prerequisites
- [Node.js](https://nodejs.org/)
- [google/clasp](https://github.com/google/clasp)

## Getting Started
### Install dependencies
```
cd <project_name>
npm install
```

### Configuration
#### Specifying the Script ID
1. Create a file called `.clasp.json` in the root directory and paste the below.
    ```
    {
      "scriptId": <your_script_id>,
      "rootDir": "dist"
    }
    ```
1. Replace `<your_script_id>` above with your Google App Script ID.
    - What is scriptId ? https://github.com/google/clasp#scriptid-required

#### Open `src/appsscript.json`, change timeZone (optional)
[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)
```
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```

### Development and build project
```
npm run build
```

### Push
```
clasp push
```

## Others
### howdy39/gas-clasp-starter
This project is based on [howdy39/gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter).

## License
This software is released under the MIT License, see LICENSE.txt.
