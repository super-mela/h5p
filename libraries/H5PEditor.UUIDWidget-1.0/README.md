# h5p-editor-uuid

An H5P widget that sets the value of a field to a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
The widget does not render the input field.

## How to use

This widget can be added to any field of type `text`.
It will use `H5P.createUUID` to generate a new UUID and set it as the field's value if the field does not already have a value.

`semantics.json`:

```json
{
  "label": "ID",
  "name": "id",
  "type": "text",
  "widget": "uuid"
}
```

It is not part of the H5P core, therefore it must be added as an editor dependency.

`library.json`:

```json
{
  "editorDependencies": [
    {
      "machineName": "H5PEditor.UUIDWidget",
      "majorVersion": 1,
      "minorVersion": 0
    },
  ]
}
```
