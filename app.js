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
  'Die beste nächste Idee kann aus dem entstehen, was du gerade beobachtest.',
  'Probiere die kleine Version deines Vorhabens aus, bevor du dein ganzes Leben umplanst.',
  'Verbinde deine eigenen Interessen und Erfahrungen. Daraus kann ein Weg entstehen, den nur du gehen kannst.',
  'Nutze Werkzeuge, die deine Fähigkeiten erweitern, und bleib neugierig auf das, was sie möglich machen.',
  'Richte deine Arbeit an den Menschen aus, denen sie wirklich hilft.',
  'Ein überschaubares Experiment zeigt oft mehr als langes Grübeln über den perfekten Plan.',
  'Nimm den langen Blick ein: Kleine Verbesserungen können sich überraschend weit tragen.',
  'Übe, bessere Fragen zu stellen. Sie machen neue Antworten überhaupt erst sichtbar.',
  'Beginne mit den Mitteln, die du hast. Der nächste Schritt muss nicht die ganze Reise bezahlen.',
  'Dein unverwechselbarer Weg kann aus einer ungewöhnlichen Mischung deiner Interessen entstehen.',
  'Mach etwas Nützliches für eine kleine Gruppe, bevor du versuchst, allen zu gefallen.',
  'Was du täglich tust, prägt dich stärker als das, was du gelegentlich vorhast.',
  'Macht aus euren Werten klare Familienregeln. Schreibt sie auf, damit ihr euch gemeinsam daran orientieren könnt.',
  'Zeig Menschen, was du ihnen zutraust. Eine gute Erwartung kann zu einer Einladung werden, über sich hinauszuwachsen.',
  'Triff wichtige Entscheidungen mit klarem Kopf. Starke Gefühle dürfen erst einmal zur Ruhe kommen.',
  'Wenn zwei Wege ähnlich gut erscheinen, wähle einen und entdecke, was er dir zeigt.',
  'Bewerte eine Entscheidung auch danach, wie sorgfältig du sie getroffen hast – nicht nur nach ihrem Ergebnis.',
  'Sammle genug Informationen für den nächsten Schritt. Auf vollständige Sicherheit musst du nicht warten.',
  'Auch Abwarten ist eine Entscheidung. Wähle bewusst, wenn du vorerst nichts veränderst.',
  'Bleib Anfänger:in. Wer noch Fragen hat, hat noch etwas zu entdecken.',
  'Lerne das Prinzip hinter einem Einzelfall. So kannst du dein Wissen auch anderswo einsetzen.',
  'Lies Bücher, die deine Sicht erweitern und deine vertrauten Annahmen prüfen.',
  'Stelle eine bessere Frage, bevor du dich mit der ersten Antwort zufriedengibst.',
  'Erkläre, was du gelernt hast. Dabei merkst du, was du wirklich verstanden hast.',
  'Arbeite an etwas, dessen Wert mit der Zeit weiterwachsen kann.',
  'Wähle die Menschen, mit denen du etwas aufbauen möchtest, bevor du das Projekt festlegst.',
  'Ein guter Ruf entsteht langsam. Lass deine tägliche Arbeit ihn bestätigen.',
  'Verlässlichkeit macht es anderen leichter, mit dir etwas Gutes zu schaffen.',
  'Pflege Beziehungen, die auch dann tragen, wenn der schnelle Gewinn ausbleibt.',
  'Entwickle viele Ideen. Aus mehreren Versuchen kann eine besonders gute hervorgehen.',
  'Die erste Fassung darf unfertig sein. Mach sie konkret genug, um daraus zu lernen.',
  'Fang an zu arbeiten. Oft triffst du die Inspiration unterwegs.',
  'Lerne durch Nachmachen und entwickle daraus Schritt für Schritt deine eigene Stimme.',
  'Bleib neugierig. Sie bringt dich oft weiter als Talent allein.',
  'Deine Aufmerksamkeit gibt deiner Zeit eine Richtung. Wähle bewusst, worauf sie fällt.',
  'Lass im Kalender Raum zum Denken, bevor jeder freie Moment verplant ist.',
  'Jedes Ja beansprucht Zeit, die du auch anders nutzen könntest.',
  'Eine kleine Gewohnheit, die du wiederholst, kann deinen Alltag nachhaltig verändern.',
  'Was heute dringend wirkt, verdient nicht automatisch deinen ganzen Fokus.',
  'Hör noch einen Moment länger zu, bevor du deine Antwort vorbereitest.',
  'Menschen erinnern sich oft daran, wie sie sich in deiner Nähe gefühlt haben.',
  'Großzügigkeit kann Möglichkeiten öffnen, die Konkurrenz verschlossen hält.',
  'Freundschaften wachsen durch kleine Zeichen und verlässliche gemeinsame Zeit.',
  'Entschuldige dich ehrlich, wenn du jemanden verletzt hast – ohne dich hinter Erklärungen zu verstecken.',
  'Kaufe Dinge, die dir dauerhaft Zeit oder Lebensqualität zurückgeben.',
  'Gib kleinen Sparbeträgen Zeit zu wachsen. Früh anzufangen kann einen langen Unterschied machen.',
  'Investiere in Fähigkeiten, die du in vielen Situationen einsetzen kannst.',
  'Geld ist nützlich, wenn es dir mehr Wahlfreiheit für dein Leben gibt.',
  'Überlege, ob eine Konsumschuld deine künftigen Möglichkeiten unnötig einschränkt.',
  'Ausdauer gibt guten Ideen Zeit, in der Welt wirksam zu werden.',
  'Baue Gewohnheiten, die dich auch an Tagen tragen, an denen die Motivation leise ist.',
  'Schaffe mehr Gelegenheiten, indem du ausprobierst, sichtbar wirst und Menschen begegnest.',
  'Verbessere ein Detail nach dem anderen. Fortschritt kann sich mit der Zeit aufbauen.',
  'Denke in Jahren, wenn du etwas schaffen willst, das länger hält als ein schneller Erfolg.',
  'Mach Erholung zu einem festen Teil deines Rhythmus.',
  'Finde eine Form der Bewegung, die du gern regelmäßig in deinen Alltag einbaust.',
  'Nimm wahr, was dein Körper dir sagt, und gönn dir rechtzeitig eine Pause.',
  'Eine passende kleine Routine hält oft länger als ein extremes Programm.',
  'Sei freundlich, auch wenn gerade niemand zusieht.',
  'Gib Fehler offen zu. Ehrlichkeit lässt dich schneller daraus lernen.',
  'Bleib neugierig, auch dort, wo du dir schon sicher bist.',
  'Suche lieber nach dem, was wahr ist, als nach dem letzten Wort im Streit.',
  'Halte dein Wort, besonders wenn es unbequem wird.',
  'Probiere kleine Veränderungen aus. Das Leben wird durch neue Erfahrungen weiter.',
  'Sammle Erlebnisse und Geschichten, nicht nur Dinge.',
  'Plane mit Unsicherheit, statt auf Gewissheit zu warten.',
  'Versuche, der Wahrheit näherzukommen, statt nur deine erste Meinung zu verteidigen.',
  'Tu heute etwas, für das dein zukünftiges Ich dir dankbar sein wird.'
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
const flipCardInner = document.querySelector('#flip-card-inner');
const mantraFront = document.querySelector('#mantra-front');
const mantraBack = document.querySelector('#mantra-back');
const contextText = document.querySelector('#mantra-context');
const bookQuote = document.querySelector('#book-quote');

const contextGuides = [
  { test: /pause|pausen|ruhe|erholung/i, theme: 'Erholung ist Teil des Weges', text: 'Kellys Rat erinnert daran, dass Pausen die Kraft für langfristiges Lernen und Schaffen erhalten. Erholung gehört zur Arbeit am eigenen Leben dazu.', quote: { text: 'Taking a break is not a sign of weakness but a sign of strength.', source: 'https://kk.org/cooltools/excellent-advice-chatpdf-2-minute-burnout-checkup/' } },
  { test: /familienregel|familie|familien|regel|regeln|werte/i, theme: 'Gemeinsame Regeln geben Halt', text: 'Kelly betont, dass klare Familienregeln Kindern Zugehörigkeit und Orientierung geben. Aufgeschrieben werden sie greifbar: Alle können sich darauf beziehen und gemeinsam prüfen, was ihnen wichtig ist.', quote: { text: 'Children totally accept—and crave—family rules.', source: 'https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/' } },
  { test: /täglich|jeden tag|kleine dinge|beständigkeit|regelmäßig|wiederhol/i, theme: 'Kleine Schritte, oft wiederholt', text: 'Kelly hebt Beständigkeit bei Arbeit, Bewegung und Beziehungen hervor. Kleine Handlungen, die du wiederholst, prägen deinen Alltag stärker als seltene Kraftakte. Wähle heute einen Schritt, den du morgen wiederholen kannst.', quote: { text: 'Nothing beats small things done every day.', source: 'https://kk.org/books/excellent-advice-for-living' } },
  { test: /zutrau|erwartung|erwartest|ruf|über sich hinaus/i, theme: 'Erwartungen können wachsen lassen', text: 'Kelly beschreibt Führung als eine klare, zugewandte Erwartung: Lass Menschen wissen, was du ihnen zutraust – auch mehr, als sie sich selbst zutrauen. Gib ihnen einen Ruf, dem sie gerecht werden können.', quote: { text: 'You lead by letting others know what you expect of them, which may exceed what they themselves expect. Provide them a reputation to live up to.', source: 'https://kk.org/books/excellent-advice-for-living' } },
  { test: /entscheidung|entscheide|abwarten|nichts veränder|information|sicherheit|wege ähnlich/i, theme: 'Entscheiden mit ruhigem Blick', text: 'Kellys praktische Ratschläge laden dazu ein, nicht in Eile zu handeln und aus dem Tun zu lernen. Entscheide mit den Informationen, die du hast, und gib dem nächsten Schritt Raum, neue Klarheit zu schaffen.' },
  { test: /anfänger|prinzip|bücher|frage|erkläre|verstanden|lerne das|lernen/i, theme: 'Lernen, das überträgt', text: 'Kelly ermutigt dazu, neugierig zu bleiben, Fragen zu stellen und Wissen praktisch weiterzugeben. Wenn du ein Prinzip erklären oder anwenden kannst, wird daraus etwas, das über einen einzelnen Fakt hinaus trägt.' },
  { test: /ruf|verlässlich|menschen.*aufbauen|projekt|beziehungen.*gewinn|arbeit.*wert/i, theme: 'Arbeit und Vertrauen aufbauen', text: 'Kelly legt Wert auf nützliche Arbeit, gute Beziehungen und den langen Blick. Verlässlichkeit und ein wachsender Ruf entstehen in vielen kleinen Begegnungen – und machen gemeinsame Vorhaben tragfähiger.' },
  { test: /ideen|fassung|inspiration|nachmachen|eigene stimme|talent allein/i, theme: 'Kreativität kommt ins Tun', text: 'Kellys Rat zum Prototyping macht Ideen erfahrbar: Beginne mit einer Version, probiere aus und lerne aus der Rückmeldung. Eine eigene Handschrift kann beim Machen entstehen.' },
  { test: /aufmerksamkeit|denkzeit|jedes ja|fokus|dringend|kalender/i, theme: 'Aufmerksamkeit bewusst einsetzen', text: 'Ein gutes Vorhaben braucht nicht nur Ideen, sondern auch Zeit und Aufmerksamkeit. Wenn du bewusst auswählst, was wichtig ist, bekommen deine Mittel eine klare Richtung.' },
  { test: /höre.*länger|menschen erinnern|großzügigkeit|freundschaften|entschuldige dich/i, theme: 'Beziehungen durch Verhalten pflegen', text: 'Kellys Ratschläge betonen Großzügigkeit und echtes Interesse an anderen. Zuhören, Verlässlichkeit und eine ehrliche Entschuldigung sind kleine Handlungen, aus denen Vertrauen wachsen kann.' },
  { test: /kauf|sparbetrag|sparen|fähigkeiten|geld|konsumschuld/i, theme: 'Geld für mehr Möglichkeiten nutzen', text: 'Kelly lenkt den Blick oft auf Zeit, Fähigkeiten und Wahlfreiheit statt auf Status. Diese Impulse sind allgemeine Denkanstöße: Überlege, welche Entscheidung dir langfristig mehr Handlungsspielraum lässt.' },
  { test: /ausdauer|motivation|gelegenheiten|verbessere ein detail|denke in jahren/i, theme: 'Erfolg wächst über Zeit', text: 'Kellys langer Blick setzt auf beständige Arbeit und kleine Verbesserungen. Ausdauer schafft mehr Gelegenheiten, und wiederholte Schritte können Ergebnisse hervorbringen, die ein einzelner Kraftakt selten erreicht.' },
  { test: /bewegung|körper|routine|erholung/i, theme: 'Gesundheit im Alltag pflegen', text: 'Diese Impulse setzen auf einfache, wiederholbare Gewohnheiten statt auf Extreme. Achte darauf, was zu deinem Alltag und deinen eigenen Bedürfnissen passt.' },
  { test: /freundlich|fehler offen|neugierig.*sicher|wahrheit|halte dein wort/i, theme: 'Charakter zeigt sich im Tun', text: 'Kellys Ratschläge kehren immer wieder zum praktischen Verhalten zurück. Freundlichkeit, Lernbereitschaft und Verlässlichkeit werden durch kleine Entscheidungen im Alltag sichtbar.' },
  { test: /veränderungen aus|erlebnisse|unsicherheit|erste meinung|zukünftiges ich/i, theme: 'Das Leben als offenes Experiment', text: 'Kelly ermutigt dazu, das Leben auszuprobieren, statt auf einen vollkommen sicheren Plan zu warten. Erfahrungen und kleine Experimente können zeigen, was wirklich zu dir passt.' },
  { test: /werkzeug|werkzeuge|technik|technologie|mittel/i, theme: 'Werkzeuge erweitern Möglichkeiten', text: 'Kelly schaut auf Werkzeuge als Mittel, mit denen Menschen mehr wahrnehmen und gestalten können. Entscheidend bleibt, wofür du diese zusätzliche Fähigkeit einsetzt.' },
  { test: /gruppe|menschen|beziehung|gespräch|helfen|hilfe|andere|teilen|beitrag|großzügig|person|freunde/i, theme: 'Wert entsteht miteinander', text: 'Ein wiederkehrender Gedanke bei Kelly ist die Kraft großzügiger Beziehungen. Nützlichkeit, Vertrauen und Austausch können mehr tragen als ein Vorhaben, das nur auf Reichweite zielt.' },
  { test: /unverwechselbar|eigene interessen|eigenen interessen|eigenständ|talente|dein weg|nur du/i, theme: 'Den eigenen Weg formen', text: 'Kelly ermutigt dazu, nicht bloß in einer bestehenden Kategorie um den ersten Platz zu kämpfen. Deine besondere Mischung aus Erfahrung, Interessen und Können kann einen eigenen Weg eröffnen.' },
  { test: /klein|experiment|version|anfang|beginne|start|ausprobieren|versuch|unfertig|perfekt|plan|warten|sicherheit|idee/i, theme: 'Klein anfangen, wirklich lernen', text: 'Ein kleiner Versuch macht aus einer Vermutung Erfahrung. Kellys praktische Art von Rat bevorzugt oft den machbaren Prototyp: Er zeigt, was funktioniert, und hilft beim nächsten Schritt.' },
  { test: /lang|fortschritt|wiederhol|gewohnheit|verbesser|prozess|geduld|morgen|zukunft|garten|übung|übe|wachstum|üben/i, theme: 'Der lange Blick', text: 'Kelly ist für seinen langen Blick bekannt: Wiederholte kleine Verbesserungen können sich über Zeit aufbauen. Heute zählt deshalb auch der unspektakuläre Schritt, den du morgen wiederholen kannst.' },
  { test: /frage|neugierig|neugier|hör zu|lernen|lerne|wissen|beobacht|entdeck|überrasch|ungewohnt/i, theme: 'Neugier hält Türen offen', text: 'Neugier ist bei Kelly kein Selbstzweck, sondern eine Methode, die Welt genauer zu sehen. Gute Fragen machen Platz für Informationen und Möglichkeiten, die ein fertiger Plan leicht übersieht.' },
  { test: /aufmerksamkeit|weniger|einfach|genug|nein|ablenk|zeit|sorgfältig|aussort|kalender|wichtig/i, theme: 'Aufmerksamkeit bewusst einsetzen', text: 'Ein gutes Vorhaben braucht nicht nur Ideen, sondern auch Zeit und Aufmerksamkeit. Wenn du bewusst auswählst, was wichtig ist, bekommen deine Mittel eine klare Richtung.' },
  { test: /mut|fehler|kritik|schwierig|zweifel|offen|risiko|rückschlag|optimistisch|optimismus|hoffnung/i, theme: 'Zuversicht mit den Füßen am Boden', text: 'Kellys Optimismus bedeutet nicht, Schwierigkeiten zu übersehen. Er richtet den Blick auf Möglichkeiten, die durch Handeln, Lernen und Zusammenarbeit tatsächlich wachsen können.' },
  { test: /arbeit|machen|schaffen|vorhaben|können|fähigkeit|bewunder|nützlich|ziel|beruf|gestalten/i, theme: 'Machen bringt die Idee weiter', text: 'Kellys Ratschläge schätzen praktische Erfahrung: Wer etwas baut, schreibt, ausprobiert oder verbessert, bekommt Rückmeldung aus der Wirklichkeit. Daraus kann die nächste bessere Version entstehen.' }
];

function contextFor(text) {
  return contextGuides.find((guide) => guide.test.test(text)) || {
    theme: 'Ein Gedanke zum Mitnehmen',
    text: 'Kellys kurze Lebensratschläge verbinden Alltag mit einem weiteren Blick auf das, was wir lernen, gestalten und mit anderen teilen. Nimm diesen Impuls als Einladung, ihn heute praktisch auszuprobieren.'
  };
}

function setCardFlipped(flipped) {
  flipCardInner.classList.toggle('is-flipped', flipped);
  mantraFront.setAttribute('aria-hidden', String(flipped));
  mantraBack.setAttribute('aria-hidden', String(!flipped));
  mantraFront.inert = flipped;
  mantraBack.inert = !flipped;
  document.querySelector('#flip-button').setAttribute('aria-pressed', String(flipped));
  document.querySelector('#flip-back-button').setAttribute('aria-pressed', String(!flipped));
}

function loadFavorites() {
  try { return JSON.parse(localStorage.getItem('heute-favorites') || '[]'); }
  catch { return []; }
}

function renderMantra() {
  const text = mantras[currentIndex];
  mantraText.textContent = text;
  const guide = contextFor(text);
  contextText.textContent = guide.text;
  document.querySelector('#context-heading').textContent = guide.theme;
  bookQuote.hidden = !guide.quote;
  if (guide.quote) {
    bookQuote.querySelector('blockquote').textContent = `“${guide.quote.text}”`;
    bookQuote.querySelector('figcaption a').href = guide.quote.source;
  }
  document.querySelector('#day-number').textContent = currentIndex === todaysIndex ? 'HEUTIGER IMPULS' : `IMPULS ${String(currentIndex + 1).padStart(2, '0')}`;
  const saved = favorites.includes(text);
  saveButton.setAttribute('aria-pressed', String(saved));
  saveButton.setAttribute('aria-label', saved ? 'Mantra aus Favoriten entfernen' : 'Mantra als Favorit speichern');
  saveLabel.textContent = saved ? 'Gemerkt' : 'Merken';
  setCardFlipped(false);
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
document.querySelector('#flip-button').addEventListener('click', () => setCardFlipped(true));
document.querySelector('#flip-back-button').addEventListener('click', () => setCardFlipped(false));
document.querySelector('#mantra-card').addEventListener('click', (event) => {
  if (event.target.closest('button, a')) return;
  setCardFlipped(!flipCardInner.classList.contains('is-flipped'));
});
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
