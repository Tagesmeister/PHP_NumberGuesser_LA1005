# Projekt-Dokumentation

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

✍️ Ihr Gruppenname und Ihre Nachnamen

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  17.05.2024     | 0.0.1   | Wir haben uns über PHP und MySQL informiert und unsere Umgebung eingerichtet. |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

To-Do Liste in PHP

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1  |   Muss | Funktional | Als Benutzer möchte ich, dass Daten in einer Datenbank gespeichert werden, um diese langfristig zu speichern. |
| 2    |       Muss          |   Funktional   | Als User möchte eine neue Notiz erstellen können, welche anschliessend in der Datenbank gespeichert wird, um Einträge speichern zu können. |
| 3  |        Muss         |  Funktional    |  Als User möchte ich bestehende Notizen aus der Datenbank abrufen können, um meine Einträge lesen zu können.                                  |
| 4  |        Muss         |   Funktional   |   Als User möchte ich eine bestehende Notiz bearbeiten können, welche anschliessend in der Datenbank modifiziert wird, um Fehlereinträge beheben zu können.                                 |
| 5  |        Muss         |   Funktional   |  Als User möchte ich, dass ich bestehende Notizen löschen kann, welche anschliessend aus der Datenbank entfernt werden, damit ich Fehler oder alte Einträge, löschen kann.       |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1 | | | |
| 2.1  |    Website gestartet Eingabefeld geöffnet          |   "Hausaufgaben machen" + *Button (Einschreiben)*      |      Eintrag wurde in die Datenbank hinzugefügt.             |
| 3.1  |    Website gestartet         |   *Button (Lesen)*       |     "Hausaufgaben machen"            |
| 4.1  |    Website gestartet Auswahlfeld geöffnet    |   *Klicke (Hausaufgaben machen)* + *schreibe ("Zimmer aufräumen")*     | Eintrag wurde bearbeitet.                  |
| 5.1  |    Website gestartet Auswahlfeld geöffnet         |     *Klicke ("Zimmer aufräumen")*  + *Button (Löschen)*         |         Eintrag wurde aus der Datenbank entfernt.          |


### 1.4 Diagramme

✍️ Hier können Sie PAPs, Use Case- und Gantt-Diagramme oder Ähnliches einfügen.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |   24.05.24    |   Pascal Oestrich & Marek von Rogall        |      Erstellung der Datenbank        |      1.3        |
| 2.A  |   24.05.24    |   Pascal Oestrich & Marek von Rogall        |      API Anfrage (POST) in PHP verarbeiten. | 1  |
| 2.B  |   24.05.24    |   Pascal Oestrich & Marek von Rogall        |      Einträge mit PHP in die MySQL Datenbank hinzufügen.        |     1          |
| 2.C  |   24.05.24    |   Pascal Oestrich & Marek von Rogall        |      Frontend für das hinzufügen von Notizen gestalten (HTML/CSS).        |     0.6          |
| 2.D  |   24.05.24    |   Pascal Oestrich & Marek von Rogall        |      Client-Side script (JS) für die API-Anfrage (POST) schreiben.        |     0.6          |
| 3.A  |   31.05.24    |   Pascal Oestrich & Marek von Rogall        |      API Anfrage (GET) in PHP verarbeiten. | 1  |
| 3.B  |   31.05.24    |   Pascal Oestrich & Marek von Rogall        |      Einträge mit PHP aus der MySQL Datenbank abrufen.        |     1         |
| 3.C  |   31.05.24    |   Pascal Oestrich & Marek von Rogall        |      Frontend für das abrufen von Notizen gestalten (HTML/CSS)        |     1.3         |
| 3.D  |   31.05.24    |   Pascal Oestrich & Marek von Rogall        |      Client-Side script (JS) für die API-Anfrage (GET) schreiben.        |     0.6          |
| 4.D  |   31.05.24    |   Pascal Oestrich & Marek von Rogall        |      Client-Side script (JS) für die dynamische Darstellung der abgerufenen Daten auf dem Frontend schreiben.        |     0.6          |

Total: 9 = 405min, denn Ein Arbeitsblock = 45 min

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
