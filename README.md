# Heute — Tagesmantra

Eine persönliche, deutschsprachige Tagesmantra-Webapp für das iPhone mit 99 eigenen Impulsen. Die Vorderseite zeigt den kurzen Gedanken; durch Antippen oder über „Mehr“ drehst du die Karte um und bekommst Kontext dazu. Ein kurzer, attribuierter Buchausschnitt ergänzt den passenden Impuls. Die App funktioniert offline und kann zum Home-Bildschirm hinzugefügt werden. Favoriten bleiben lokal auf dem Gerät.

## Lokal starten

Die App besteht aus statischen Dateien. Starte einen lokalen Webserver im Projektverzeichnis, zum Beispiel:

```sh
python3 -m http.server 8000
```

Öffne danach `http://localhost:8000`.

## Auf dem iPhone installieren

Öffne die veröffentlichte HTTPS-Adresse in Safari, tippe auf **Teilen** und wähle **Zum Home-Bildschirm**. Danach startet die App im eigenen Fenster. Der erste Aufruf lädt die App; anschließend stehen die Inhalte offline bereit.

## Inhalte

Alle Tagesimpulse sind eigenständige deutsche Formulierungen nach Motiven aus Kevin Kellys *Excellent Advice for Living* und seinen öffentlich beschriebenen Ideen: Neugier, praktische Experimente, langfristiges Denken, eigenes Schaffen, hilfreiche Werkzeuge und enge Beziehungen. Es sind keine Buchzitate. [Kevin Kelly: Excellent Advice for Living](https://kk.org/books/excellent-advice-for-living) · [Buchseite beim Verlag](https://www.penguinrandomhouse.com/books/725357/excellent-advice-for-living-by-kevin-kelly/).

## Technik

- Keine Anmeldung und kein Backend
- Tagesauswahl nach lokalem Kalenderdatum
- Favoriten im `localStorage`
- Teilen über das native Share-Menü oder Zwischenablage
- PWA-Manifest und Service Worker für Home-Bildschirm und Offline-Nutzung
