const imageModules = import.meta.glob<{ default: string }>(
  "#lib/assets/images/stickers/*.png",
  { eager: true },
);
const allImages: string[] = Object.values(imageModules).map((mod) =>
  mod.default
);

export function getRandomImages(): string[] {
  const shuffled = [...allImages];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, 6);
}
