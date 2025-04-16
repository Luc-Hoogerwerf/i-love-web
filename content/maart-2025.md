Opdracht

Hou de experimentjes bij op je I Love Web - Learning Journal. Beschrijf bijv. wat elke query parameter doet, hoe de filters werken enz.

👉 Experiment 1: Ik wil alle studenten gesorteerd op name
https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2425&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%201&sort=name
Door &sort=name toe te voegen worden de namen gesorteerd op naam (alfabetische volgorde)

👉 Experiment 2: Ik wil alle names van studenten die een name hebben die begint met de letter D
https://fdnd.directus.app/items/person?fields=name&sort=name&filter={%22name%22:{%22_starts_with%22:%22D%22}}
Door &filter={"name":{"_starts_with":"D"}} Zie je alle namen met "D" vooral "_starts_with" is hier belangrijk

Als je niet wilt letten op hoofdletters werkt "_istarts_with" ook.

👉 Experiment 3: Ik wil alle names van studenten die een name hebben die begint met de letter D of K
https://fdnd.directus.app/items/person?fields=name&filter={"_or":[{"name":{"_istarts_with":"d"}},{"name":{"_istarts_with":"k"}}]}
{"_or":[ zorgt er in dit geval voor dat je filter met namen die starten met d OF k

👉 Experiment 4: Ik wil alle names en birthdates van studenten die een birthdate hebben ingevuld
https://fdnd.directus.app/items/person?fields=name,birthdate
door ,birthdate achter name te zetten krijg je ook birthdate erbij

👉 Experiment 5: Ik wil alle names en birthdates van studenten met een birthdate in 2002


👉 Experiment 6: Haal een lijst van alle unieke fav_tag op, en laat zien hoeveel mensen die tag hebben