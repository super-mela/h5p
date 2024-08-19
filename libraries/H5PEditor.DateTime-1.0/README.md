H5P Editor DateTime
===================

## Usage
Editor widget for H5P that allows to use a date picker in text fields
(https://h5p.org/semantics#type-text). All that is needed it to set the
`widget` property of the semantics fields to `datetime`.

The widget uses the Zebra date picker (https://github.com/stefangabos/Zebra_Datepicker)
that is provided by H5P core. Customization options can be passed in a
`datetime`. Currently, the widget only supports to override the options for the
Zebra date picker in a `zebraOptions` property.

Example:
```
{
  "name": "date",
  "type": "text",
  "label": "Date",
  "widget": "datetime",
  "datetime": {
    "zebraOptions": {
      "days": ["1", "2", "3", "4", "5", "6", "7"]
    }
  }
}
```

## Getting started with development
Clone this repository with git and check out the branch that you are interested
in (or choose the branch first and then download the archive, but learning
how to use git really makes sense).

Change to the repository directory and run
```bash
npm install
```

to install required modules. Afterwards, you can build the project using
```bash
npm run build
```

or, if you want to let everything be built continuously while you are making
changes to the code, run
```bash
npm run watch
```
Before putting the code in production, you should always run `npm run build`.

The build process will transpile ES6 to earlier versions in order to improve
compatibility to older browsers. If you want to use particular functions that
some browsers don't support, you'll have to add a polyfill.

The build process will also move the source files into one distribution file and
minify the code.

For more information on how to use those distribution files in H5P, please have a look at https://youtu.be/xEgBJaRUBGg and the H5P developer guide at https://h5p.org/library-development.
