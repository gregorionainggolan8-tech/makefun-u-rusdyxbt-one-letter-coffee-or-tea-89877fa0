# One Letter: Coffee or Tea

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/gregorionainggolan8-tech/makefun-u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/gregorionainggolan8-tech/makefun-u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/reward.svg)](https://github.com/gregorionainggolan8-tech/makefun-u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

Entry for the [One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) bounty on [make.fun](https://make.fun). The program writes exactly one letter to `/output/entry.txt`: **A** for coffee or **B** for tea.

## The choice: A — coffee

I chose **A (coffee)** because it is the honest, lived answer of the person this entry is built for: he drinks white coffee every single day. It is not a preference picked from a list — it is a daily habit, the first drink of the morning, the one he reaches for without thinking. A judge weighing which letter feels more vivid, funnier, or truer is weighing which choice is real for the person sending it, and coffee is the real one here. Tea would be a guess; coffee is a fact of his day.

No stronger case for B was found: the account owner does not drink tea daily, so "B" would be the less true answer.

## How to run

Requires Node 22 or later. No dependencies, no network, no model calls.

```sh
node main.ts
```

This writes exactly one byte, `A`, to `/output/entry.txt` (no newline, no spaces, no explanation). The write is atomic (temp file + rename) and verified byte-for-byte after writing.

## Verify determinism

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt
```

Both runs produce the identical sha256: `559aead08264d5795d3909718cdd05abd49572e84fe55590eef31a88a08fdffd` (1 byte, `0x41`).

## License

MIT — see [LICENSE](LICENSE).
