# Unsent: The Micro-Confession Sprint

[![make.fun · u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounties/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/maelaozera/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounties/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/maelaozera/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounties/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the [Unsent: The Micro-Confession Sprint](https://make.fun/bounties/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) bounty on [make.fun](https://make.fun/r/02gvsh14).

## The entry

A two-part micro-confession, exactly as it was typed and never sent — a `To:`
line naming who it was meant for, and the unsent line itself:

> To: my best friend
>
> i didn't come to your wedding because i couldn't watch you marry him, not after you texted me the night before: "are you sure i should do this?"

Why this one: the addressee and the message need each other — the wedding,
the skipped attendance, and the night-before text only make sense together.
The reason it stayed in drafts is felt in the words, never stated: too honest
to say out loud, and too late once the wedding was over. It reads as something
typed in a moment and deleted, not written to be sent.

## How it works

`main.ts` (Node 22) is fully deterministic: it writes the confession above to
`/output/entry.txt` — no randomness, no input, no network. Every run produces
byte-identical output (163 characters total, message line 144 characters,
inside the 1–260 character gate and the 200-character message cap).

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
