/**
 * Tiny message bus for the header console.
 * Anything on the page can `log('> something')`; the console types it out
 * ahead of its idle chatter.
 */
const queue: string[] = []

export function log(line: string) {
  if (queue[queue.length - 1] === line) return
  queue.push(line)
  if (queue.length > 3) queue.shift()
}

export function takeLog(): string | undefined {
  return queue.shift()
}

export function hasLog(): boolean {
  return queue.length > 0
}

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Run `fn` once the boot sequence is over — immediately if it already is.
 */
export function onReady(fn: () => void) {
  if ((window as any).__pkReady) fn()
  else document.addEventListener('pk:ready', fn, { once: true })
}
