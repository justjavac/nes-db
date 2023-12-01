import * as fs from "fs/promises";

import { db } from "./src/db";

for (const game of db) {
  for (const cartridge of game.cartridge) {
    if (!cartridge.board.prg) {
      continue;
    }
    if (!Array.isArray(cartridge.board.prg)) {
      cartridge.board.prg = [cartridge.board.prg];
    }
  }
}

fs.writeFile("./db.json", JSON.stringify(db, null, 2));
