# Projekt-Dokumentation

Pascal Oestrich, Marek von Rogall

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  17.05.2024     | 0.0.1   | Wir haben uns über PHP und MySQL informiert und unsere Umgebung eingerichtet. |
|   24.05.2024    | 0.1.0   |  Wir haben heute an den Form im html, wie auch css gearbeitet. Im Js ist read and write implementiert. Im PHP haben wir das Get and Post implementiert.|
|   31.05.2024    | 0.1.1   |  Die SQL Datenbank wurde erstellt. Connection mir der Datenbank aufgebaut und mit dem PHP file verbunden.|
|   07.06.2024    | 1.0.0   |  Wir haben das Update und Delete implementiert. Im PHP habe wier dies ebenfalls gemacht und mit der Datenbank verbunden. Das CSS wurde auch implementiert|                                      

## 1 Informieren

### 1.1 Ihr Projekt

To-Do Liste in HTML und Js, als Backend nutzen wird PHP.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1  |   Muss | Funktional | Als Benutzer möchte ich, dass Daten in einer Datenbank gespeichert werden, um diese langfristig zu speichern. |
| 2    |       Muss          |   Funktional   | Als User möchte eine neue Notiz erstellen können, welche anschliessend in der Datenbank gespeichert wird, um Einträge speichern zu können. |
| 3  |        Muss         |  Funktional    |  Als User möchte ich bestehende Notizen aus der Datenbank abrufen können, um meine Einträge zulesen.                                  |
| 4  |        Muss         |   Funktional   |   Als User möchte ich eine bestehende Notizen bearbeiten können, welche anschliessend in der Datenbank modifiziert werden, um Fehlereinträge beheben zu können.               |
| 5  |        Muss         |   Funktional   |  Als User möchte ich, dass ich bestehende Notizen löschen kann, welche anschliessend aus der Datenbank entfernt werden, damit ich Fehler oder alte Einträge, löschen kann.       |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |Website gestartet | *Eintrag wird mit dem Formular hinzugefügt und abgesendet* | *Eintrag wird mit dem Formular hinzugefügt und abgesendet* |
| 1.2  |Website gestartet | *Button (Lesen)* | * Der Eintrag aus 1.1 wird immernoch angezeigt, da er in der Datenbank gespeichert wurde.* |
| 2.1  |    Website gestartet Eingabefeld geöffnet          |   "Hausaufgaben machen" + *Button (Einschreiben)*      |      Eintrag wurde in die Datenbank hinzugefügt.             |
| 3.1  |    Website gestartet         |   *Button (Lesen)*       |     "Hausaufgaben machen"            |
| 4.1  |    Website gestartet Auswahlfeld geöffnet    |   *Klicke (Hausaufgaben machen)* + *schreibe ("Zimmer aufräumen")*     | Eintrag wurde bearbeitet.                  |
| 5.1  |    Website gestartet Auswahlfeld geöffnet         |     *Klicke ("Zimmer aufräumen")*  + *Button (Löschen)*         |         Eintrag wurde aus der Datenbank entfernt.          |


### 1.4 Diagramme

![image](https://github.com/Tagesmeister/PHP_To-Do-List_LA1305/assets/110892258/9ee6743a-2764-43b9-a6e8-d3b396cf4f44)


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |   24.05.24    |   Marek von Rogall        |      Erstellung der Datenbank        |      1.3        |
| 2.A  |   24.05.24    |   Marek von Rogall        |      API Anfrage (POST) in PHP verarbeiten. | 1  |
| 2.B  |   24.05.24    |   Pascal Oestrich        |      Einträge mit PHP in die MySQL Datenbank hinzufügen.        |     1          |
| 2.C  |   24.05.24    |   Pascal Oestrich        |      Frontend für das hinzufügen von Notizen gestalten (HTML/CSS).        |     0.6          |
| 2.D  |   24.05.24    |   Pascal Oestrich         |      Client-Side script (JS) für die API-Anfrage (POST) schreiben.        |     0.6          |
| 3.A  |   07.06.24    |   Marek von Rogall        |      API Anfrage (GET) in PHP verarbeiten. | 1  |
| 3.B  |   07.06.24    |   Marek von Rogall        |      Einträge mit PHP aus der MySQL Datenbank abrufen.        |     1         |
| 3.C  |   07.06.24    |   Pascal Oestrich        |      Frontend für das abrufen von Notizen gestalten (HTML/CSS)        |     1.3         |
| 3.D  |   07.06.24    |   Pascal Oestrich         |      Client-Side script (JS) für die API-Anfrage (GET) schreiben.        |     0.6          |
| 4.D  |   07.06.24    |   Pascal Oestrich & Marek von Rogall        |      Client-Side script (JS) für die dynamische Darstellung der abgerufenen Daten auf dem Frontend schreiben.        |     0.6          |

Total: 9 = 405min, denn Ein Arbeitsblock = 45 min

## 3 Entscheiden

Das projekt wird wie nach Planung durchgeführt.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A     |  24.05.24     |    Marek von Rogall       |      1.3          |     1.3              |
| 2.A     |  24.05.24     |    Marek von Rogall       |       1         |       1.3            |
| 2.B     |  24.05.24     |    Pascal Oestrich      |        1        |          1         |
| 2.C     |  24.05.24     |      Pascal Oestrich        |       0.6        |       0.8            |
| 2.D     |  24.05.24     |     Pascal Oestrich        |      0.6         |         0.6          |
| 3.A     |  31.05.24     |      Marek von Rogall     |         1       |           1        |
| 3.B     |  31.05.24     |    Marek von Rogall      |        1        |         1          |
| 3.C     |  07.05.24     |     Pascal Oestrich      |        1.3       |         1.4          |
| 3.D     |   07.05.24    |     Pascal Oestrich        |      0.6          |      0.7             |
| 4.D     |  07.05.24     |     Pascal Oestrich & Marek von Rogall     |         0.6        |        1           |

Total tatsächliche Zeit: 10.1 = 454min

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  07.06.2024     |    OK      |   Pascal Oestrich     |
| 1.2  |  07.06.2024     |    OK      |   Pascal Oestrich     |
| 2.1  |    07.06.2024    |    OK       |     Pascal Oestrich    |
|  3.1   |   07.06.2024     |   OK        |    Pascal Oestrich     |
| 4.1  |  07.06.2024      |   OK        |   Pascal Oestrich      |
| 5   |   07.06.2024     |    OK      |   Pascal Oestrich      |


Alle Testfälle hatte ein positives ergebniss, Projekt kann freigegeben werden.

## 6 Mahara-Portfolio

Pascal Oestrich: https://portfolio.bbbaden.ch/user/p-oestrich-inf22/php-website-la-1305

Marek von Rogall: https://portfolio.bbbaden.ch/view/view.php?t=49f1cf6aa6f794a7c44f
