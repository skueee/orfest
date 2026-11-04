<!-- This was partly vibecoded, srry
Inspired from https://design.hackclub.com/components/photos/ -->

<script lang="ts">
  let {
    src = '',
    alt = '',
    rotate = 6,
    movable = false,
    width = 120,
    onmove,
    ...rest
  }: {
    src?: string;
    alt?: string;
    rotate?: number;
    movable?: boolean;
    width?: number;
    onmove?: (pos: { x: number; y: number }) => void;
  } & Record<string, unknown> = $props();

  // Drag offset, relative to however the parent placed the sticker
  let x = $state(0);
  let y = $state(0);
  let dragging = $state(false);
  let start: { x: number; y: number; px: number; py: number } | null = null;

  function pointerDown(e: PointerEvent) {
    if (!movable || e.button !== 0) return;
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);      // keep receiving moves outside the element
    start = { x, y, px: e.clientX, py: e.clientY };
    dragging = true;
    e.preventDefault();
  }

  function pointerMove(e: PointerEvent) {
    if (!start) return;
    x = start.x + (e.clientX - start.px);
    y = start.y + (e.clientY - start.py);
  }

  function pointerUp() {
    if (!start) return;
    start = null;
    dragging = false;
    onmove?.({ x, y });                      // notify parent of final position
  }

  function keyDown(e: KeyboardEvent) {
    if (!movable) return;
    const step = e.shiftKey ? 40 : 10;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const move = moves[e.key];
    if (!move) return;
    e.preventDefault();                      // stop the page scrolling
    x += move[0];
    y += move[1];
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
  class="sticker pointer-events-auto"
  class:movable
  class:dragging
  style="--x:{x}px; --y:{y}px; --r:{rotate}deg; --sticker-width:{width}px"
  tabindex={movable ? 0 : undefined}
  role={movable ? 'group' : undefined}
  aria-roledescription={movable ? 'movable sticker' : undefined}
  aria-label={movable ? `${alt || 'Sticker'}. Use arrow keys to move.` : undefined}
  onpointerdown={pointerDown}
  onpointermove={pointerMove}
  onpointerup={pointerUp}
  onpointercancel={pointerUp}
  onkeydown={keyDown}
  {...rest}
>
  <img {src} {alt} draggable="false" />
</span>

<style>
  .sticker {
    display: inline-block;
    touch-action: auto;
    transform: translate(var(--x, 0), var(--y, 0)) rotate(var(--r));
    transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .sticker.movable { cursor: grab; touch-action: none; } /* none = drag works on touch */
  .sticker.dragging { cursor: grabbing; z-index: 10; transition: none; }
  .sticker.movable:focus-visible {
    outline: 3px solid var(--hc-orange, #ff8c37);
    outline-offset: 2px;
    border-radius: 8px;
  }
  img {
    display: block;
    width: var(--sticker-width, 120px);
    height: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition:
      transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    user-select: none;
    -webkit-user-drag: none;
  }
  .sticker:hover img,
  .sticker.dragging img {
    transform: scale(1.06);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  }
  @media (prefers-reduced-motion: reduce) {
    .sticker, img { transition: none; }
  }
</style>
