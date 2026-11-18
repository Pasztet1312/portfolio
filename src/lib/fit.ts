/**
 * Fit display type to its container.
 *
 * <div data-fit>            ← gets the font-size
 *   <span data-fit-target>  ← the widest line, must be inline-block + nowrap
 */
function fitOne(box: HTMLElement) {
  const target = box.querySelector<HTMLElement>('[data-fit-target]')
  if (!target) return

  const available = box.clientWidth
  const current = parseFloat(getComputedStyle(box).fontSize)
  const width = target.getBoundingClientRect().width
  if (!available || !width) return

  // Optional cap as a share of the viewport height, so tall type never
  // pushes the rest of a full-screen section below the fold.
  const vh = parseFloat(box.dataset.fitMaxVh || '0')
  const max = vh ? Math.max((window.innerHeight * vh) / 100, 96) : Infinity
  box.style.fontSize = Math.min((current * available) / width, max) + 'px'
}

export function initFit() {
  const boxes = Array.from(document.querySelectorAll<HTMLElement>('[data-fit]'))
  if (!boxes.length) return

  const run = () => boxes.forEach(fitOne)

  run()
  document.fonts?.ready.then(run)

  let widths = boxes.map((b) => b.clientWidth)
  const ro = new ResizeObserver(() => {
    const next = boxes.map((b) => b.clientWidth)
    if (next.some((w, i) => w !== widths[i])) {
      widths = next
      run()
    }
  })
  boxes.forEach((b) => ro.observe(b))

  let height = window.innerHeight
  window.addEventListener('resize', () => {
    // Ignore the small height jumps of mobile browser chrome
    if (Math.abs(window.innerHeight - height) < 120) return
    height = window.innerHeight
    run()
  })
}
