import { reducedMotion } from './log'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/_<>'
const live = new WeakMap<HTMLElement, number>()

/**
 * "Decode" an element's text: random glyphs resolve into the real
 * characters from left to right.
 */
export function scramble(el: HTMLElement, duration = 700) {
  if (reducedMotion()) return

  const final = el.dataset.text ?? (el.dataset.text = el.textContent || '')
  cancelAnimationFrame(live.get(el) ?? 0)

  const start = performance.now()

  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1)
    const shown = Math.floor(p * final.length)

    let out = final.slice(0, shown)
    for (let i = shown; i < final.length; i++) {
      out += final[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    }

    el.textContent = p < 1 ? out : final
    if (p < 1) live.set(el, requestAnimationFrame(tick))
  }

  live.set(el, requestAnimationFrame(tick))
}
