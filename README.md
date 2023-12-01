# nes-db

A database of NES games, with information about their publishers, developers,
release dates, and more.

## Usage

### Installation

```bash
npm install nes-db
```

### Example

```js
import nesdb from 'nes-db';

// Get all games
const games = nesdb.games;

// The game's type is:
interface Game {
  /** Array of NES cartridges for the game. */
  cartridge: Cartridge[];
  /** Optional peripherals information. */
  peripherals?: Peripherals;
  /** Name of the game. */
  name: string;
  /** Optional alternate name of the game. */
  altname?: string;
  /** Class of the game. */
  class: string;
  /** Optional subclass information. */
  subclass?: string;
  /** Catalog number of the game. */
  catalog: string;
  /** Publisher of the game. */
  publisher: string;
  /** Developer of the game. */
  developer: string;
  /** Optional porting developer information. */
  portdeveloper?: string;
  /** Region where the game is released. */
  region: string;
  /** Number of players supported by the game. */
  players: number;
  /** Release date of the game. */
  date: string;
  /** Optional revision information. */
  revision?: string;
}
```

### Credits

- [justjavac](https://github.com/justjavac)

### License

nes-db is released under the MIT License. See the bundled [LICENSE](./LICENSE)
file for details.

## ACKNOWLEDGEMENT

**The data for this project is sourced from
[nesdir](https://github.com/nesdir/nesdir/blob/master/cartdb.xml). Great thanks
to [@rdanbrook](https://github.com/rdanbrook)'s work.**
