const mantras = [
  'Bleib neugierig. Gute Fragen öffnen Türen, die Antworten noch nicht sehen.',
  'Mach den nächsten kleinen Schritt. Klarheit kommt oft erst beim Gehen.',
  'Wähle lieber Fortschritt, der sich summiert, als Erfolg, der nur glänzt.',
  'Achte auf das, was du oft tust: Daraus wird langsam dein Leben.',
  'Halte deinen Plan leicht genug, damit eine gute Überraschung hineinpasst.',
  'Wenn du etwas lernen willst, fang an, es selbst auszuprobieren.',
  'Richte deine Aufmerksamkeit auf das, was wachsen soll.',
  'Ein ehrliches Gespräch kann mehr bewegen als zehn perfekte Nachrichten.',
  'Lass Raum für Umwege. Manches Wertvolle zeigt sich erst unterwegs.',
  'Du musst nicht alles wissen. Es reicht, offen weiterzulernen.',
  'Mach Dinge, die du gern wiederholen würdest.',
  'Pflege die Beziehungen, die dich großzügiger und mutiger machen.',
  'Beginne kleiner, als dein Ehrgeiz verlangt, und bleib länger dabei.',
  'Verwechsle beschäftigt sein nicht mit vorankommen.',
  'Eine gute Gewohnheit ist eine Entscheidung, die du dir abgenommen hast.',
  'Verändere deine Meinung, wenn neue Wirklichkeit vor dir steht.',
  'Schütze deine Zeit für die Menschen und Fragen, die dir wichtig sind.',
  'Sieh in Fehlern Hinweise. Sie zeigen, wo dein nächster Versuch ansetzen kann.',
  'Lerne, Dinge gut zu beenden. So entsteht Platz für den Anfang danach.',
  'Suche nicht den perfekten Moment. Mach diesen Moment brauchbar.',
  'Weniger, aber mit Aufmerksamkeit, ist oft mehr.',
  'Behandle deine Zukunft wie jemanden, den du gern unterstützen möchtest.',
  'Was du heute übst, wird morgen leichter zugänglich sein.',
  'Lass dich von Menschen überraschen, statt sie vorschnell einzuordnen.',
  'Teile, was du lernst. Wissen wird wertvoller, wenn es weiterwandert.',
  'Mut kann leise sein: manchmal ist er einfach ein weiterer Versuch.',
  'Achte auf kleine Verbesserungen. Sie sind der Anfang großer Veränderungen.',
  'Gönn dir Pausen, bevor dein Körper sie für dich einfordert.',
  'Wähle den langen Blick, ohne den heutigen Tag zu verpassen.',
  'Du darfst unterwegs neu entscheiden, was ein gutes Leben für dich heißt.'
];

const today = new Date();
const dayIndex = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(2024, 0, 1)) / 86400000);
const todaysIndex = ((dayIndex % mantras.length) + mantras.length) % mantras.length;
let currentIndex = todaysIndex;
let favorites = loadFavorites();
let toastTimer;

const mantraText = document.querySelector('#mantra-text');
const saveButton = document.querySelector('#save-button');
const saveLabel = document.querySelector('#save-label');
const favoriteCount = document.querySelector('#favorite-count');
const favoritesPanel = document.querySelector('#favorites-panel');

function loadFavorites() {
  try { return JSON.parse(localStorage.getItem('heute-favorites') || '[]'); }
  catch { return []; }
}

function renderMantra() {
  mantraText.textContent = mantras[currentIndex];
  document.querySelector('#day-number').textContent = currentIndex === todaysIndex ? 'HEUTIGER IMPULS' : `IMPULS ${String(currentIndex + 1).padStart(2, '0')}`;
  const saved = favorites.includes(mantras[currentIndex]);
  saveButton.setAttribute('aria-pressed', String(saved));
  saveButton.setAttribute('aria-label', saved ? 'Mantra aus Favoriten entfernen' : 'Mantra als Favorit speichern');
  saveLabel.textContent = saved ? 'Gemerkt' : 'Merken';
}

function renderFavorites() {
  favoriteCount.textContent = String(favorites.length);
  const list = document.querySelector('#favorites-list');
  list.replaceChildren(...favorites.map((text) => {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
  }));
  document.querySelector('#empty-favorites').hidden = favorites.length > 0;
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function saveCurrentMantra() {
  const text = mantras[currentIndex];
  favorites = favorites.includes(text) ? favorites.filter((item) => item !== text) : [text, ...favorites];
  localStorage.setItem('heute-favorites', JSON.stringify(favorites));
  renderMantra();
  renderFavorites();
  showToast(favorites.includes(text) ? 'Für später aufgehoben.' : 'Aus den Favoriten entfernt.');
}

document.querySelector('#today-label').textContent = new Intl.DateTimeFormat('de-CH', { weekday: 'long', day: 'numeric', month: 'long' }).format(today).toUpperCase();
document.querySelector('#save-button').addEventListener('click', saveCurrentMantra);
document.querySelector('#another-button').addEventListener('click', () => {
  currentIndex = (currentIndex + 1 + Math.floor(Math.random() * (mantras.length - 1))) % mantras.length;
  if (currentIndex === todaysIndex) currentIndex = (currentIndex + 1) % mantras.length;
  renderMantra();
});
document.querySelector('#favorites-toggle').addEventListener('click', (event) => {
  const open = favoritesPanel.hidden;
  favoritesPanel.hidden = !open;
  event.currentTarget.setAttribute('aria-pressed', String(open));
  if (open) favoritesPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
document.querySelector('#close-favorites').addEventListener('click', () => {
  favoritesPanel.hidden = true;
  document.querySelector('#favorites-toggle').setAttribute('aria-pressed', 'false');
});
document.querySelector('#share-button').addEventListener('click', async () => {
  const shareData = { title: 'Mein Tagesmantra', text: `„${mantras[currentIndex]}“\n\n— Mein Gedanke für heute` };
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(shareData.text); showToast('Gedanke kopiert.'); }
    else showToast('Teilen ist auf diesem Gerät nicht verfügbar.');
  } catch (error) { if (error.name !== 'AbortError') showToast('Teilen ist gerade nicht möglich.'); }
});

renderMantra();
renderFavorites();
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./sw.js').catch(() => {});
