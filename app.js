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
  'Du darfst unterwegs neu entscheiden, was ein gutes Leben für dich heißt.',
  'Wenn du feststeckst, ändere zuerst die Frage, die du dir stellst.',
  'Gib einer Idee eine kleine Chance, bevor du sie groß beurteilst.',
  'Sei Anfänger:in ohne dich dafür zu entschuldigen.',
  'Das Richtige muss nicht laut sein, um wichtig zu sein.',
  'Mach heute etwas, das deinem Morgen das Leben leichter macht.',
  'Lass dein Tempo von deiner Richtung bestimmen, nicht vom Vergleich.',
  'Manchmal ist der freundlichste nächste Schritt ein klares Nein.',
  'Warte nicht auf Sicherheit, wenn ein kleiner Versuch schon möglich ist.',
  'Du kannst aufmerksam sein, ohne alles persönlich zu nehmen.',
  'Gute Arbeit entsteht oft aus vielen unspektakulären Wiederholungen.',
  'Entscheide, was genug ist, bevor immer mehr zur Gewohnheit wird.',
  'Hör zu, um etwas zu entdecken, nicht nur um zu antworten.',
  'Ein freier Nachmittag kann produktiver sein als ein voller Plan.',
  'Behalte, was funktioniert, und lass den Rest leichter werden.',
  'Nimm deine Begeisterung ernst. Sie zeigt dir, wo Energie liegt.',
  'Vertrau kleinen Beweisen mehr als großen Versprechen.',
  'Ein guter Anfang darf unfertig aussehen.',
  'Mach es anderen leicht, dir ehrlich zu helfen.',
  'Wenn etwas wichtig ist, gib ihm einen Platz in deinem Kalender.',
  'Lass die erste Version einfach genug sein, dass es eine zweite geben kann.',
  'Du brauchst nicht jede Möglichkeit. Du brauchst eine, die du pflegst.',
  'Wähle die Menschen, bei denen du dich nicht kleiner machen musst.',
  'Frag öfter: Was wäre hier die einfache, großzügige Lösung?',
  'Nimm dir Zeit, das Gute wahrzunehmen, während es geschieht.',
  'Ein ehrlicher Start ist wertvoller als eine perfekte Ausrede.',
  'Du kannst deine Grenzen achten und trotzdem offen bleiben.',
  'Wenn du etwas bewunderst, finde heraus, was du davon selbst üben kannst.',
  'Mach weniger Versprechen und halte die, die du gibst.',
  'Lass nicht zu, dass Eile dir die Neugier abnimmt.',
  'Das Leben wird klarer, wenn du regelmäßig aussortierst, was nicht mehr passt.',
  'Gib hilfreichen Ideen eine Chance, sich in deinem Alltag zu bewähren.',
  'Versuche, die Person zu sein, mit der du selbst gern arbeiten würdest.',
  'Ein kleiner Beitrag kann für jemanden genau zur richtigen Zeit kommen.',
  'Wissen wächst, wenn du es anwendest und mit anderen teilst.',
  'Sei geduldig mit dem Prozess und konkret mit dem nächsten Schritt.',
  'Erlaube dir, etwas zu mögen, auch wenn es keinen Nutzen beweist.',
  'Nicht jede offene Tür ist deine Tür. Du darfst bewusst wählen.',
  'Schaffe Gewohnheiten, die dich tragen, wenn die Motivation leiser wird.',
  'Ein gutes Leben ist oft eine Sammlung guter gewöhnlicher Tage.',
  'Nimm Kritik als Information entgegen und entscheide dann selbst.',
  'Lass deine Neugier größer sein als deine Angst vor dem Ungewohnten.',
  'Geh sorgfältig mit deiner Aufmerksamkeit um. Sie ist ein Teil deiner Zeit.',
  'Du darfst langsam antworten, wenn du erst ehrlich nachdenken möchtest.',
  'Beginne dort, wo du Einfluss hast, auch wenn es nur ein kleiner Bereich ist.',
  'Feiere nicht nur das Ziel. Beachte auch, was du auf dem Weg gelernt hast.',
  'Veränderung wird leichter, wenn du sie in den Alltag einbaust.',
  'Mach Platz für Menschen, die dich mit neuen Gedanken überraschen.',
  'Ein ruhiger Geist muss nicht auf alle Fragen sofort eine Antwort haben.',
  'Wenn du zweifelst, kehre zu dem zurück, was du wirklich wichtig findest.',
  'Lerne, Hilfe anzunehmen, bevor du sie dringend brauchst.',
  'Heute ist eine gute Gelegenheit, es ein wenig besser zu machen als gestern.',
  'Schätze das Werkzeug, das dir hilft, und vergiss nicht, wofür du es nutzt.',
  'Manches wird leichter, sobald du aufhörst, es allein schaffen zu müssen.',
  'Bleib offen für Fortschritt in einer Form, die du nicht geplant hast.',
  'Weniger Ablenkung lässt mehr von dem sichtbar werden, was schon da ist.',
  'Du musst nicht alles behalten, nur weil du einmal damit angefangen hast.',
  'Behandle einen schwierigen Tag als einen Tag, nicht als Urteil über dein Leben.',
  'Pflege deine Vorhaben so, wie du einen Garten pflegst: regelmäßig und mit Geduld.',
  'Die beste nächste Idee kann aus dem entstehen, was du gerade beobachtest.'
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
