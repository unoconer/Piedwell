// Brand mark — a droplet ("well") holding layered Piedmont hills.
/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'pw', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A3C6E"/><stop offset="1" stop-color="#2A1B33"/></linearGradient><clipPath id="${id}c"><path d="M24 2.5c0 0 16.6 17.8 16.6 28a16.6 16.6 0 0 1-33.2 0C7.4 20.3 24 2.5 24 2.5Z"/></clipPath></defs><path d="M24 2.5c0 0 16.6 17.8 16.6 28a16.6 16.6 0 0 1-33.2 0C7.4 20.3 24 2.5 24 2.5Z" fill="url(#${id})"/><g clip-path="url(#${id}c)"><path d="M2 32q10-7 22-1t24-2v22H2Z" fill="#2F7FB8"/><path d="M2 38q12-6 23 0t23-1v13H2Z" fill="#4B9CD3"/><path d="M2 43.5q11-4 22 0t24 0v8H2Z" fill="#9CC9EA"/></g><circle cx="24" cy="21.5" r="3.2" fill="#F4EEF7"/></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
