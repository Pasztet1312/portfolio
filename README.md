# Pavel Korolczuk — Portfolio

Personal portfolio: a console-flavoured single page with a live header log, the
stack, selected work and a small terminal. Built with [Astro](https://astro.build), GSAP
and Lenis; type set in Big Shoulders Display, Instrument Serif and JetBrains
Mono (all open-source, self-hosted via Fontsource).

## Run locally

```bash
npm install
npm run dev
```

## Where things live

- `src/pages/index.astro` — page shell, boot sequence, scroll setup
- `src/components/` — one file per section (markup, script and styles together)
- `src/components/Experiments.astro` — the project list; edit the array at the top
- `src/components/Playground.astro` — the particle sketch
- `src/components/Elements.astro` — the stack groups; edit the array at the top
- `src/styles/global.css` — colour tokens, themes and shared type styles
