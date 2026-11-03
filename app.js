Warning: truncated output (original token count: 13610)
Total output lines: 477

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

const translations = {
  en: [
    'Stay curious. Good questions open doors answers cannot yet see.', 'Take the next small step. Clarity often comes once you start moving.', 'Choose progress that compounds over success that merely shines.', 'Notice what you do often: slowly, it becomes your life.', 'Keep your plan light enough to make room for a good surprise.', 'If you want to learn something, start by trying it yourself.', 'Give your attention to what you want to grow.', 'One honest conversation can move more than ten perfect messages.', 'Leave room for detours. Some valuable things appear along the way.', 'You do not need to know everything. Stay open to learning.', 'Do things you would be glad to do again.', 'Care for relationships that make you more generous and brave.', 'Start smaller than your ambition asks, and stick with it longer.', 'Do not confuse being busy with making progress.', 'A good habit is a decision you no longer have to make.', 'Change your mind when new reality stands before you.', 'Protect time for the people and questions that matter to you.', 'Treat mistakes as clues. They show where to try next.', 'Learn to finish things well. That makes room for what comes next.', 'Do not wait for the perfect moment. Make this moment useful.', 'Less, done with attention, is often more.', 'Treat your future self as someone you would like to support.', 'What you practice today will be easier to reach tomorrow.', 'Let people surprise you before you put them in a box.', 'Share what you learn. Knowledge grows in value as it travels.', 'Courage can be quiet: sometimes it is simply trying once more.', 'Notice small improvements. They begin big changes.', 'Take a break before your body has to demand one.', 'Take the long view without missing today.', 'You may rethink along the way what a good life means to you.', 'If you feel stuck, first change the question you are asking.', 'Give an idea a small chance before judging it harshly.', 'Be a beginner without apologizing for it.', 'What matters does not have to be loud.', 'Do something today that makes tomorrow easier.', 'Let direction set your pace, not comparison.', 'Sometimes the kindest next step is a clear no.', 'Do not wait for certainty when a small experiment is possible.', 'You can pay attention without taking everything personally.', 'Good work often comes from many unremarkable repetitions.', 'Decide what is enough before more becomes a habit.', 'Listen to discover something, not only to reply.', 'A free afternoon can be more productive than a packed plan.', 'Keep what works and let the rest get lighter.', 'Take your enthusiasm seriously. It shows where your energy is.', 'Trust small evidence more than big promises.', 'A good beginning is allowed to look unfinished.', 'Make it easy for others to help you honestly.', 'If something matters, give it a place in your calendar.', 'Keep the first version simple enough to allow a second.', 'You do not need every option. You need one you will nurture.', 'Choose people around whom you do not have to make yourself smaller.', 'Ask more often: what is the simple, generous solution here?', 'Make time to notice the good while it is happening.', 'An honest start is worth more than a perfect excuse.', 'You can respect your limits and remain open.', 'If you admire something, find out what part you can practice yourself.', 'Make fewer promises and keep the ones you make.', 'Do not let urgency take curiosity away from you.', 'Life gets clearer when you regularly let go of what no longer fits.', 'Give helpful ideas a chance to prove themselves in daily life.', 'Try to be someone you would enjoy working with.', 'A small contribution may arrive at exactly the right time for someone.', 'Knowledge grows when you use it and share it.', 'Be patient with the process and specific about the next step.', 'Allow yourself to like something even when it proves no use.', 'Not every open door is yours. You may choose deliberately.', 'Build habits that carry you when motivation grows quiet.', 'A good life is often a collection of good ordinary days.', 'Receive criticism as information, then decide for yourself.', 'Let curiosity be bigger than your fear of the unfamiliar.', 'Handle your attention carefully. It is part of your time.', 'You may answer slowly when you want to think honestly first.', 'Begin where you have influence, even if it is a small place.', 'Celebrate more than the goal. Notice what you learned on the way.', 'Change gets easier when you build it into daily life.', 'Make room for people who surprise you with new thoughts.', 'A calm mind does not need an immediate answer to every question.', 'When in doubt, return to what you truly consider important.', 'Learn to accept help before you urgently need it.', 'Today is a good chance to do a little better than yesterday.', 'Value the tool that helps you, and remember what you use it for.', 'Some things get easier when you stop trying to do them alone.', 'Stay open to progress in a form you did not plan.', 'Less distraction makes more of what is here visible.', 'You do not have to keep everything just because you once began it.', 'Treat a hard day as one day, not a verdict on your life.', 'Tend your plans like a garden: regularly and with patience.', 'Your next good idea may grow from what you are noticing now.', 'Try a small version before rearranging your whole life.', 'Connect your interests and experiences. They may form a path only you can take.', 'Use tools that extend your abilities, and stay curious about what they make possible.', 'Shape your work around the people it truly helps.', 'A small experiment often teaches more than perfect-plan pondering.', 'Take the long view: small improvements can carry you surprisingly far.', 'Practice asking better questions. They make new answers visible.', 'Start with what you have. The next step need not fund the whole journey.', 'Your distinctive path may come from an unusual mix of interests.', 'Do something useful for a small group before trying to please everyone.',
    'What you do every day shapes you more than what you only plan to do now and then.',
    'Turn your values into clear family rules. Write them down so you can refer to them together.',
    'Show people what you believe they can do. A high expectation can invite them to grow beyond what they thought possible.',
    'Make important decisions with a clear head. Let strong feelings settle first.',
    'When two paths seem equally good, choose one and see what it teaches you.',
    'Judge a decision by how carefully you made it, not only by its outcome.',
    'Gather enough information for the next step. You do not need to wait for complete certainty.',
    'Waiting is a decision too. Choose consciously when you decide not to change anything for now.',
    'Stay a beginner. If you still have questions, there is still something to discover.',
    'Learn the principle behind a single case. Then you can use what you know elsewhere.',
    'Read books that widen your view and test familiar assumptions.',
    'Ask a better question before settling for the first answer.',
    'Explain what you learned. You will notice what you really understand.',
    'Work on something whose value can continue to grow over time.',
    'Choose the people you want to build with before you commit to the project.',
    'A good reputation grows slowly. Let your daily work confirm it.',
    'Reliability makes it easier for others to do good work with you.',
    'Nurture relationships that last even when quick gains do not.',
    'Develop many ideas. One strong idea can emerge from several attempts.',
    'Your first draft can be unfinished. Make it concrete enough to learn from.',
    'Start working. Inspiration often meets you along the way.',
    'Learn by imitation, then develop your own voice step by step.',
    'Stay curious. It can take you further than talent alone.',
    'Your attention gives your time direction. Choose carefully where it goes.',
    'Make room in your calendar to think before every free moment is filled.',
    'Every yes takes time you could use for something else.',
    'A small habit, repeated, can change your daily life over time.',
    'What feels urgent today does not automatically deserve all your focus.',
    'Listen a little longer before preparing your reply.',
    'People often remember how they felt around you.',
    'Generosity can open possibilities that competition keeps closed.',
    'Friendships grow through small gestures and reliable time together.',
    'Apologize sincerely when you hurt someone, without hiding behind explanations.',
    'Buy things that give you time or quality of life for the long term.',
    'Give small savings time to grow. Starting early can make a difference over time.',
    'Invest in skills you can use in many situations.',
    'Money is useful when it gives you more freedom to choose how you live.',
    'Consider whether consumer debt will unnecessarily limit your future options.',
    'Persistence gives good ideas time to make a difference in the world.',
    'Build habits that carry you on days when motivation is quiet.',
    'Create more opportunities by trying things, making your work visible, and meeting people.',
    'Improve one detail at a time. Progress can build over time.',
    'Think in years when you want to create something that lasts beyond quick success.',
    'Make rest a steady part of your rhythm.',
    'Find a kind of movement you enjoy and can include regularly in your day.',
    'Notice what your body is telling you and take a break in good time.',
    'A small routine that fits you often lasts longer than an extreme program.',
    'Be kind even when no one is watching.',
    'Admit mistakes openly. Honesty helps you learn from them sooner.',
    'Stay curious even where you already feel certain.',
    'Look for what is true instead of trying to get the last word in an argument.',
    'Keep your word, especially when it is inconvenient.',
    'Try small changes. New experiences make life more interesting.',
    'Collect experiences and stories, not only things.',
    'Plan for uncertainty instead of waiting for certainty.',
    'Try to get closer to the truth instead of defending your first opinion.',
    'Do something today your future self will thank you for.'
  ],
  it: [
    'Resta curioso. Le buone domande aprono porte che le risposte ancora non vedono.', 'Fai il prossimo piccolo passo. Spesso la chiarezza arriva camminando.', 'Scegli progressi che si accumulano, non successi che brillano soltanto.', 'Nota ciò che fai spesso: piano piano diventa la tua vita.', 'Tieni il piano abbastanza leggero da lasciare spazio a una bella sorpresa.', 'Se vuoi imparare qualcosa, inizia a provarci da solo.', 'Dedica attenzione a ciò che vuoi far crescere.', 'Una conversazione sincera può fare più di dieci messaggi perfetti.', 'Lascia spazio alle deviazioni. Alcune cose preziose appaiono lungo il cammino.', 'Non devi sapere tutto. Resta aperto a imparare.', 'Fai cose che ti farà piacere ripetere.', 'Coltiva i rapporti che ti rendono più generoso e coraggioso.', 'Inizia più in piccolo di quanto chieda la tua ambizione e continua più a lungo.', 'Non confondere l’essere occupato con l’avanzare.', 'Una buona abitudine è una decisione che non devi più prendere.', 'Cambia idea quando la nuova realtà ti si presenta davanti.', 'Proteggi il tempo per le persone e le domande che contano.', 'Considera gli errori come indizi: mostrano dove tentare ancora.', 'Impara a concludere bene. Così fai spazio a ciò che verrà.', 'Non aspettare il momento perfetto. Rendi utile questo momento.', 'Meno, fatto con attenzione, spesso è di più.', 'Tratta il tuo futuro come qualcuno che vuoi sostenere.', …1610 tokens truncated… reputazione cresce lentamente. Confermala con il tuo lavoro quotidiano.',
    'Essere affidabile rende più facile agli altri fare un buon lavoro con te.',
    'Coltiva rapporti che restano preziosi anche quando il guadagno immediato svanisce.',
    'Sviluppa molte idee. Da più tentativi può emergere quella giusta.',
    'La prima bozza può essere incompleta. Rendila abbastanza concreta da impararci qualcosa.',
    'Inizia a lavorare. Spesso trovi ispirazione mentre sei in cammino.',
    'Impara imitando, poi sviluppa passo dopo passo la tua voce.',
    'Resta curioso. Può portarti più lontano del solo talento.',
    'La tua attenzione dà una direzione al tempo. Scegli con cura dove rivolgerla.',
    'Fai spazio nel calendario per pensare, prima di riempire ogni momento libero.',
    'Ogni sì occupa tempo che potresti dedicare ad altro.',
    'Una piccola abitudine, ripetuta, può cambiare la vita quotidiana nel tempo.',
    'Ciò che oggi sembra urgente non merita automaticamente tutta la tua attenzione.',
    'Ascolta ancora un momento prima di preparare la risposta.',
    'Le persone ricordano spesso come si sono sentite in tua compagnia.',
    'La generosità può aprire possibilità che la competizione tiene chiuse.',
    'Le amicizie crescono con piccoli gesti e tempo condiviso con costanza.',
    'Chiedi scusa con sincerità se ferisci qualcuno, senza nasconderti dietro le spiegazioni.',
    'Compra cose che ti restituiscono tempo o qualità di vita nel lungo periodo.',
    'Dai tempo ai piccoli risparmi per crescere. Iniziare presto può fare la differenza.',
    'Investi in capacità che puoi usare in molte situazioni.',
    'Il denaro è utile quando ti offre più libertà di scelta nella vita.',
    'Chiediti se un debito per i consumi limiterà inutilmente le tue possibilità future.',
    'La perseveranza dà alle buone idee il tempo di incidere sul mondo.',
    'Costruisci abitudini che ti sostengano nei giorni in cui la motivazione è bassa.',
    'Crea più occasioni provando, mostrando il tuo lavoro e incontrando persone.',
    'Migliora un dettaglio alla volta. Il progresso può accumularsi nel tempo.',
    'Ragiona in anni quando vuoi creare qualcosa che duri più di un successo rapido.',
    'Fai del riposo una parte costante del tuo ritmo.',
    'Trova un movimento che ti piace e che puoi inserire regolarmente nella giornata.',
    'Nota ciò che ti comunica il corpo e concediti una pausa per tempo.',
    'Una piccola routine adatta a te spesso dura più di un programma estremo.',
    'Sii gentile anche quando nessuno ti guarda.',
    'Ammetti apertamente gli errori. La sincerità ti aiuta a imparare prima.',
    'Resta curioso anche su ciò di cui ti senti già sicuro.',
    'Cerca ciò che è vero, invece di cercare di vincere una discussione.',
    'Mantieni la parola, soprattutto quando è scomodo.',
    'Prova piccoli cambiamenti. Le nuove esperienze rendono la vita più interessante.',
    'Raccogli esperienze e storie, non soltanto oggetti.',
    'Pianifica anche per i momenti incerti, invece di aspettare certezze.',
    'Prova ad avvicinarti alla verità, invece di difendere la prima opinione.',
    'Fai oggi qualcosa per cui il tuo io futuro ti sarà grato.'
  ]
};

const interfaceText = {
  de: { lang: 'de', today: 'DEIN GEDANKE FÜR HEUTE', morning: 'Guten Morgen,', note: 'Ein kleiner Gedanke. Ein neuer Blick.', current: 'HEUTIGER IMPULS', impulse: 'IMPULS', caption: 'DEIN TAGESMANTRA', save: 'Merken', saveAria: 'Mantra als Favorit speichern', removeAria: 'Mantra aus Favoriten entfernen', saved: 'Gemerkt', more: 'Mehr', back: 'Zurück', behind: 'DER GEDANKE DAHINTER', context: 'Ein bisschen Kontext', quote: 'Quelle', share: 'Mitnehmen', another: 'Anderen Gedanken lesen', collection: 'DEINE SAMMLUNG', heading: 'Aufgehoben.', empty: 'Deine gemerkten Gedanken erscheinen hier.', footer: 'Ein guter Tag beginnt mit einem Gedanken.', source: 'Eigene Impulse nach Motiven aus Kevin Kellys „Excellent Advice for Living“', savedToast: 'Für später aufgehoben.', removedToast: 'Aus den Favoriten entfernt.', copied: 'Gedanke kopiert.' },
  en: { lang: 'en', title: 'Today — your daily thought', description: 'A short thought for your day.', today: 'YOUR THOUGHT FOR TODAY', morning: 'Good morning,', note: 'A small thought. A fresh perspective.', current: 'TODAY’S THOUGHT', impulse: 'THOUGHT', caption: 'YOUR DAILY MANTRA', save: 'Save', saveAria: 'Save mantra to favorites', removeAria: 'Remove mantra from favorites', saved: 'Saved', more: 'More', back: 'Back', behind: 'THE THOUGHT BEHIND IT', context: 'A little context', quote: 'Source', share: 'Take it with you', another: 'Read another thought', collection: 'YOUR COLLECTION', heading: 'Saved for later.', empty: 'Your saved thoughts will appear here.', footer: 'A good day begins with a thought.', source: 'Original thoughts inspired by Kevin Kelly’s “Excellent Advice for Living”', savedToast: 'Saved for later.', removedToast: 'Removed from favorites.', copied: 'Thought copied.' },
  it: { lang: 'it', title: 'Oggi — il tuo pensiero quotidiano', description: 'Un breve pensiero per la tua giornata.', today: 'IL TUO PENSIERO DI OGGI', morning: 'Buongiorno,', note: 'Un piccolo pensiero. Uno sguardo nuovo.', current: 'PENSIERO DI OGGI', impulse: 'PENSIERO', caption: 'IL TUO MANTRA QUOTIDIANO', save: 'Salva', saveAria: 'Salva il mantra tra i preferiti', removeAria: 'Rimuovi il mantra dai preferiti', saved: 'Salvato', more: 'Scopri', back: 'Indietro', behind: 'IL PENSIERO DIETRO', context: 'Un po’ di contesto', quote: 'Fonte', share: 'Porta con te', another: 'Leggi un altro pensiero', collection: 'LA TUA RACCOLTA', heading: 'Da ricordare.', empty: 'Qui appariranno i pensieri salvati.', footer: 'Una bella giornata inizia con un pensiero.', source: 'Pensieri originali ispirati a “Excellent Advice for Living” di Kevin Kelly', savedToast: 'Salvato per dopo.', removedToast: 'Rimosso dai preferiti.', copied: 'Pensiero copiato.' }
};

const storedLanguage = localStorage.getItem('heute-language');
let language = ['de', 'en', 'it'].includes(storedLanguage) ? storedLanguage : 'de';

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
  const ui = interfaceText[language];
  const displayText = language === 'de' ? text : translations[language][currentIndex];
  mantraText.textContent = displayText;
  const guide = language === 'de' ? contextFor(text) : null;
  document.querySelector('#context-heading').textContent = guide?.theme || ({ en: 'A thought to carry with you', it: 'Un pensiero da portare con te' })[language];
  contextText.textContent = guide?.text || ({ en: 'A short reflection can turn an idea into something practical. Take this thought into your day and see where it leads.', it: 'Una breve riflessione può trasformare un’idea in qualcosa di concreto. Porta questo pensiero nella tua giornata e scopri dove ti conduce.' })[language];
  bookQuote.hidden = !guide?.quote;
  if (guide?.quote) {
    bookQuote.querySelector('blockquote').textContent = `“${guide.quote.text}”`;
    bookQuote.querySelector('figcaption a').href = guide.quote.source;
    bookQuote.querySelector('figcaption a').textContent = ui.quote;
  }
  document.querySelector('#day-number').textContent = currentIndex === todaysIndex ? ui.current : `${ui.impulse} ${String(currentIndex + 1).padStart(2, '0')}`;
  const saved = favorites.includes(text);
  saveButton.setAttribute('aria-pressed', String(saved));
  saveButton.setAttribute('aria-label', saved ? ui.removeAria : ui.saveAria);
  saveLabel.textContent = saved ? ui.saved : ui.save;
  setCardFlipped(false);
}

function renderFavorites() {
  favoriteCount.textContent = String(favorites.length);
  const list = document.querySelector('#favorites-list');
  list.replaceChildren(...favorites.map((text) => {
    const item = document.createElement('li');
    const index = mantras.indexOf(text);
    item.textContent = index < 0 || language === 'de' ? text : translations[language][index];
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
  showToast(favorites.includes(text) ? interfaceText[language].savedToast : interfaceText[language].removedToast);
}

function renderLanguage() {
  const ui = interfaceText[language];
  document.documentElement.lang = ui.lang;
  document.title = ui.title || 'Heute — dein Tagesmantra';
  document.querySelector('meta[name="description"]').content = ui.description || 'Ein kurzer Gedanke für deinen heutigen Weg.';
  document.querySelector('#language-select').value = language;
  document.querySelector('#language-label').textContent = ({ de: 'Sprache wählen', en: 'Choose language', it: 'Scegli la lingua' })[language];
  document.querySelector('#today-label').textContent = `${ui.today} · ${new Intl.DateTimeFormat(language === 'de' ? 'de-CH' : language, { weekday: 'long', day: 'numeric', month: 'long' }).format(today).toUpperCase()}`;
  document.querySelector('#greeting').innerHTML = `${ui.morning}<br /><span>Angelo.</span>`;
  document.querySelector('.intro-note').textContent = ui.note;
  document.querySelector('#mantra-front .day-chip').lastElementChild.textContent = ui.current;
  document.querySelector('#mantra-front .mantra-caption').textContent = ui.caption;
  document.querySelector('#flip-button span').textContent = ui.more;
  document.querySelector('#mantra-back .day-chip').lastElementChild.textContent = ui.behind;
  document.querySelector('#flip-back-button span').textContent = ui.back;
  document.querySelector('#share-button span').textContent = ui.share;
  document.querySelector('#another-button span:first-child').textContent = ui.another;
  document.querySelector('#favorites-panel .eyebrow').textContent = ui.collection;
  document.querySelector('#favorites-heading').textContent = ui.heading;
  document.querySelector('#empty-favorites').textContent = ui.empty;
  document.querySelector('.footer > span').textContent = ui.footer;
  document.querySelector('.footer a').firstChild.textContent = ui.source + ' ';
  document.querySelector('#favorites-toggle').setAttribute('aria-label', ({ de: 'Favoriten anzeigen', en: 'Show favorites', it: 'Mostra i preferiti' })[language]);
  document.querySelector('#close-favorites').setAttribute('aria-label', ({ de: 'Favoriten schließen', en: 'Close favorites', it: 'Chiudi i preferiti' })[language]);
  renderMantra();
  renderFavorites();
}

document.querySelector('#language-select').addEventListener('change', (event) => {
  language = event.currentTarget.value;
  localStorage.setItem('heute-language', language);
  renderLanguage();
});
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
  const ui = interfaceText[language];
  const quote = language === 'de' ? mantras[currentIndex] : translations[language][currentIndex];
  const shareData = { title: ui.caption, text: `“${quote}”\n\n— ${ui.today}` };
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(shareData.text); showToast(ui.copied); }
    else showToast(({ de: 'Teilen ist auf diesem Gerät nicht verfügbar.', en: 'Sharing is not available on this device.', it: 'La condivisione non è disponibile su questo dispositivo.' })[language]);
  } catch (error) { if (error.name !== 'AbortError') showToast(({ de: 'Teilen ist gerade nicht möglich.', en: 'Sharing is unavailable right now.', it: 'La condivisione non è disponibile al momento.' })[language]); }
});

renderLanguage();
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./sw.js').catch(() => {});
