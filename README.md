# NodeJS Stac Validator

Validates a spatial temporal catalog asset based on the specs laid out by [Radiant Earth](https://github.com/radiantearth/stac-spec/tree/v0.6.0).

## Versions

In order to denote compatability with the Stac specification, the first stable version will match the first stable version of STAC

## Usage

## Intended Usage

### CLI

`stac-validator -l <location> -s <source> -v <version> -t <type>`

```sh
stac-validator -l https://cbers-stac.s3.amazonaws.com/CBERS4/catalog.json  -s url -t catalog -v v0.6.0
```

If you're trying this locally, use the following:

```sh
node ./src/index.js -l https://cbers-stac.s3.amazonaws.com/CBERS4/catalog.json  -s url -t catalog -v v0.6.0
```

Similarly, if you're trying to get a file, use the following:

```sh
node ./src/index.js -l ./sample/test.json  -s file -t catalog -v v0.6.0
```

There will be deep nested searching, to be released at a later date.

## Example Responses

### Success

A successful response returns an object with a `success` boolean, as well as a `verified_files`, which provides a series of responses.

```js
  {
    success: true,
    responses: [
      {
        valid: true,
        location: '<location of file>',
        errors: []
      }
    ]
  }
```

### Failure

A failure response shares the `success` and `verified_files` attributes. In addition, it adds a new attribute called `errors`. The errors object is flat, meaning that there should be no nester arrays of objects present.

The errors object is subject to change until the first stable release, v0.7.0.

```js
  {
    success: false,
    responses: [
      {
        valid: false,
        location: '<location of file>',
        errors: [
          {
            keyword: '',
            message: '',
          }
        ]
      }
    ]
  }
```

## Sample Catalog

https://cbers-stac.s3.amazonaws.com/CBERS4/catalog.json
