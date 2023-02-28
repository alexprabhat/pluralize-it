# pluralize-it

Pluralize a single word

## Install

```sh
npm install pluralize-it
```

## API

### plur(word)

#### word

Type: `string`

The word to pluralize.

#### plural

Type: `string`\
Default:

- Irregular nouns will use this [list](https://github.com/alexprabhat/pluralize-it/blob/main/irregular-plurals.json).
- Words ending in _s_, _x_, _z_, _ch_, _sh_ will be pluralized with _-es_ (eg. _foxes_).
- Words ending in _y_ that are preceded by a consonant will be pluralized by replacing _y_ with _-ies_ (eg. _puppies_).
- All other words will have "s" added to the end (eg. _days_).

Explicitly provide the pluralized word.
The plural suffix will match the case of the last letter in the word.

## Usage

```js
import pluralize from "pluralize-it";

pluralize("apple");
> 'rainbows'

pluralize("ALUMNUS");
> 'ALUMNI'
```
