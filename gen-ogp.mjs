import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const avatarB64 = readFileSync('./avatar.png').toString('base64');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0c2461"/>
      <stop offset="50%"  stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Dot grid -->
  ${Array.from({length: 20}, (_, row) =>
    Array.from({length: 22}, (_, col) =>
      `<circle cx="${40 + col * 56}" cy="${40 + row * 56}" r="2" fill="rgba(255,255,255,0.04)"/>`
    ).join('')
  ).join('')}

  <!-- Right glow -->
  <ellipse cx="950" cy="315" rx="320" ry="280" fill="rgba(59,130,246,0.15)"/>

  <!-- Avatar -->
  <image href="data:image/png;base64,${avatarB64}" x="720" y="60" width="400" height="510"/>

  <!-- Label -->
  <text x="80" y="210" font-family="Liberation Sans, Arial, sans-serif" font-size="22" font-weight="bold"
        fill="rgba(219,234,254,0.75)" letter-spacing="8">ENGINEER</text>

  <!-- Name -->
  <text x="80" y="330" font-family="Liberation Sans, Arial, sans-serif" font-size="96" font-weight="bold"
        fill="#ffffff">Masayoshi</text>

  <!-- URL -->
  <text x="80" y="388" font-family="Liberation Sans, Arial, sans-serif" font-size="28"
        fill="rgba(147,197,253,0.85)">masayoshi.work</text>

  <!-- Divider -->
  <line x1="80" y1="415" x2="420" y2="415" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>

  <!-- Tags -->
  ${[
    { label: 'ServiceNow', x: 80 },
    { label: 'AWS',        x: 222 },
    { label: 'Java',       x: 302 },
    { label: 'PHP/Laravel',x: 382 },
    { label: 'Python',     x: 528 },
  ].map(({ label, x }) => `
    <rect x="${x}" y="437" width="${label.length * 11 + 22}" height="32" rx="16"
          fill="rgba(255,255,255,0.12)"/>
    <text x="${x + 11}" y="458" font-family="Liberation Sans, Arial, sans-serif"
          font-size="16" font-weight="bold" fill="rgba(255,255,255,0.85)">${label}</text>
  `).join('')}
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile('./ogp.png');

console.log('ogp.png generated');
