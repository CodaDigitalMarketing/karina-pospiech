export type ContentBlock =
  | { type: "image"; src: string }
  | { type: "text"; text: string };

export interface Project {
  slug: string;
  title: string;
  year: string;
  medium: string;
  content: ContentBlock[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    slug: "fbi",
    title: "FBI. Fassbinder, Beuys + Ich",
    year: "2016–2017",
    medium: "Fotomontage, Cyanotypie, Siebdruck und Carborundum – Radierung. Originalfotos von Helga Kneidl",
    thumbnail: "/images/scraped/bilder/fbi_01.jpg",
    content: [
      { type: "image", src: "/images/scraped/bilder/b_fbi_01.jpg" },
      { type: "text", text: "Bei einem Besuch der Berliner Fotografin Helga Kneidl entdeckte ich eher zufällig die Fotonegative von Rainer Werner Fassbinder und Joseph Beuys, die sie 1977 und 1983 im Hamburger Schauspielhaus portraitiert hat. Da mich eine Art Seelenverwandschaft mit den beiden Künstlern verbindet, entschied ich mich, die Fotos für eine künstlerische Bearbeitung zu erwerben. Diese Fotografien und meine Fotos aus Familienbesitz dienten als Grundlage für das Projekt." },
      { type: "image", src: "/images/scraped/bilder/b_fbi_02.jpg" },
      { type: "text", text: "Was haben Fassbinder und Beuys gemeinsam? Man könnte sagen: die Einheit von gelebtem Leben und ihrer Kunst, die unermüdliche Forderung nach Freiheit und unkonventionelle Methoden und Herangehensweisen in der Durchsetzung ihrer Ideale und Ideen. Beide Künstler haben mich im Laufe meines Lebens immer wieder begleitet und mein Denken und künstlerisches Schaffen beeinflusst. FBI ist der Beginn einer imaginären Freundschaft, der Versuch einer Annäherung mit ungewissem Ausgang." },
      { type: "image", src: "/images/scraped/bilder/b_fbi_03.jpg" },
      { type: "text", text: "Für Joseph Beuys ist das Kreuz ein Symbol für die Kraft der individuellen Freiheit. Das Symmetrische Kreuz steht für die Ganzheitlichkeit, wo sich zwei formal gleiche aber in der Anordnung entgegen gesetzte Elemente zu einer größeren Form im Einklang – unisono – verbinden." },
      { type: "image", src: "/images/scraped/bilder/unisono_katalog.jpg" },
      { type: "text", text: "Zur Ausstellung erscheint ein Katalog. ISBN: 978-3-00-056819-0" },
    ],
  },
  {
    slug: "gebettet-auf-rosen",
    title: "Gebettet auf Rosen / Pościelona na różach",
    year: "2013",
    medium: "Rauminstallation: Fotomontage auf Papier und Polyesterfolie, 12 Bänder, Höhe 300 cm, unterschiedlicher Breite von 43 bis 91 cm",
    thumbnail: "/images/scraped/bilder/projects_rosen_01.jpg",
    content: [
      { type: "image", src: "/images/scraped/bilder/b_rosen_01.jpg" },
      { type: "text", text: 'Deutsch-Polnisches National- und Familiengedächtnis. „Was der Raum für die Gedächtniskunst, ist die Zeit für die Erinnerungskultur. Vielleicht darf man noch einen Schritt weitergehen: wie die Gedächtniskunst zum Lernen, so gehört die Erinnerungskultur zum Planen und Hoffen, d. h. zur Ausbildung sozialer Sinn- und Zeithorizonte." (Jan Assmann, Das kulturelle Gedächtnis)' },
      { type: "image", src: "/images/scraped/bilder/b_rosen_02.jpg" },
      { type: "text", text: "Ausgewählte historische Fotografien der deutsch-polnischen Familien- und Landesgeschichte zeigen die unterschiedlichen Schichten der Blüten- und Dornenzeiten, in die ich hinein gebettet wurde." },
      { type: "image", src: "/images/scraped/bilder/b_rosen_03.jpg" },
      { type: "text", text: "Ich verbinde Abschnitte aus meiner und jener Geschichte auf beidseitig bedruckten Bändern, deren Anordnung von Stonehenge inspiriert wurde." },
    ],
  },
  {
    slug: "silesiatopia",
    title: "SilesiaTopia",
    year: "2011–2015",
    medium: "Deutsch-Polnisches Künstlerinnenprojekt in Oberschlesien / Zabrze-Biskupice Borsigwerk",
    thumbnail: "/images/scraped/bilder/b_zeche2_gr.jpg",
    content: [
      { type: "text", text: "SilesiaTopia 2014. Interview mit Karina Pośpiech zum Projekt, im Auftrag der Heinrich-Böll-Stiftung, Berlin." },
      { type: "text", text: "SilesiaTopia in der Galerie Rondo Sztuki in Katowice / Polen 07.–22.09.2013. Polnische und deutsche Künstlerinnen stellen aus." },
      { type: "text", text: "Initiatorin und künstlerische Leiterin des Projekts ist Karina Pośpiech, Malerin, Bühnenbildnerin, Filmemacherin und Architektin. Sie ist im polnischen Zabrze-Biskupice geboren und aufgewachsen und lebt seit 1977 in Deutschland." },
      { type: "image", src: "/images/scraped/bilder/b_zeche1_or.jpg" },
      { type: "text", text: "SilesiaTopia ist ein deutsch-polnisches künstlerisches Projekt mit drei Schwerpunkten: Künstleraustausch, partizipative Kunstaktionen und Ausstellungen." },
      { type: "text", text: "Im Sommer 2012 treffen 16 deutsche und polnische Künstlerinnen in Zabrze erstmals zusammen und arbeiten zehn Tage gemeinsam zur polnisch-deutschen Geschichte. Projektbeginn: Juni 2012, Projektdauer: 2 Jahre. Ausstellungsorte 2013/2014: Katowice, Zabrze, Warschau, Berlin." },
      { type: "text", text: "Das nachbarschaftliche Verhältnis zwischen Polen und Deutschen ist ambivalent. Früher wurden die Grenzen in Europa gewaltsam verschoben, heute werden sie geöffnet. Seit der gesellschaftspolitischen Wende von 1989 hat ein neuer Prozess der gegenseitigen Annäherung begonnen. Das vereinte Europa bietet für das Verhältnis beider Länder eine noch nie dagewesene Chance." },
      { type: "image", src: "/images/scraped/bilder/b_borsigwerk2_or.jpg" },
      { type: "text", text: "Historische Siedlung Borsigwerk in Zabrze-Biskupice, wo die Temporäre Galerie und der Workshop mit den Bewohnern im Sommer 2012 stattfinden." },
      { type: "text", text: "Generationsübergreifende Biografie-Workshops, partizipative Kunstaktionen im öffentlichen Raum und eine Temporäre Zeltgalerie entwickeln Visionen für die Zukunft im europäischen Haus." },
      { type: "text", text: "SilesiaTopia sieht es als die Freiheit, Unabhängigkeit und Verantwortung der Kunst, Themen konträr zum Mainstream aufzugreifen, konträr zur Political Correctness zu bearbeiten und No-go-Gebiete bewusst zu betreten." },
      { type: "image", src: "/images/scraped/bilder/b_zabrze_org.jpg" },
      { type: "text", text: "Historische und aktuelle Migrationsbewegungen, Deindustrialisierung und Arbeitslosigkeit bilden den politischen Hintergrund unserer Auseinandersetzung mit der Region." },
      { type: "text", text: "Die von dem Berliner Industriellen August Borsig 1862 beispielhaft angelegte Arbeitersiedlung in Biskupice ist seit der Schließung der Kohle- und Hüttenbetriebe vor mehr als zehn Jahren von Arbeitslosigkeit und Verarmung gekennzeichnet." },
      { type: "text", text: "Schlesien zeichnet sich durch eine historisch prägnante und kulturelle Vielfalt aus. Über Jahrhunderte haben hier verschiedene ethnische, religiöse, kulturelle und ökonomische Akteure gewirkt. Das spezifisch europäische Gepräge der Region resultiert nicht zuletzt aus dieser Tatsache. Das Projekt spürt den Veränderungsprozessen in Zabrze nach und visualisiert politisch-künstlerische Utopien." },
    ],
  },
  {
    slug: "the-world-you-want-to-live-in",
    title: "The World You Want to Live In",
    year: "2011",
    medium: "Film, Dauer 03:12, Realisation: Karina Pośpiech, Montage: Krzysztof Visconti",
    thumbnail: "/images/scraped/bilder/b_worldstill1_gr.jpg",
    content: [
      { type: "text", text: "Der Film ist im Rahmen des Deutsch-Polnischen Handyfilmprojekts 'ExperymentNAchbarn Sasiedzi 2011' entstanden, vom Goethe Institut in Warschau initiiert, gefördert und ausgewählt für die Präsentation beim Dokumentarfilmfestival Planet doc. in Warschau im Mai 2011." },
      { type: "text", text: "Die Aufzeichnung des Films per Handy erlaubt eine intime Gesprächssituation, die nur so möglich geworden ist." },
      { type: "image", src: "/images/scraped/bilder/b_world_org.jpg" },
      { type: "text", text: 'Still aus dem Film: „THE WORLD YOU WANT TO LIVE IN"' },
      { type: "text", text: "Karina Pospiechs Film zeigt drei Männer, die in Berlin auf der Straße leben. Am Anfang sehen wir einen Straßenmusiker, der am Nollendorfplatz jeden Tag Mundharmonika spielt. Die kalten Nächte verbringt er in der nahegelegenen Filiale des Sparkassenvorraums." },
      { type: "image", src: "/images/scraped/bilder/b_theworldpolen_org.jpg" },
      { type: "text", text: 'Still aus dem Film: „THE WORLD YOU WANT TO LIVE IN"' },
      { type: "text", text: "Nahe der Warschauer Brücke im Eingang zur Sparkasse wärmen sich bei klirrender Kälte zwei Polen auf. Sie leben seit anderthalb Jahren auf der Straße und erzählen mir Ihre bewegende Lebensgeschichte. Der Film enthält in Teilen deutsche Untertitel." },
    ],
  },
  {
    slug: "putz-frau-ohne-gesicht",
    title: "PUTZ, FRAU",
    year: "2010",
    medium: "Installation / Möbiusband und Video von Karina Pośpiech, eingespielter Text von Barbara Kenneweg, Kunstraum Bethanien",
    thumbnail: "/images/scraped/bilder/b_putzfrau_gr.jpg",
    content: [
      { type: "text", text: "Video Dauer 12 min. Text: Barbara Kenneweg" },
      { type: "text", text: "In Berlin gibt es rund 30.000 polnische Putzfrauen, die größtenteils eine halblegale Schattenexistenz führen." },
      { type: "text", text: "Andererseits machen viele der berufstätigen Frauen hierzulande einen äußerst schwierigen Spagat zwischen Mutter sein, Karriere und Haushalt." },
      { type: "text", text: "Arbeitgeberin und Arbeitnehmerin bewegen sich in einem System untereinander verbundener Teufelskreise." },
      { type: "image", src: "/images/scraped/bilder/b_putzmoebius_org.jpg" },
      { type: "text", text: "Zerschneidet man ein Möbiusband der Länge nach, entstehen nicht etwa zwei Bänder, sondern ein einziges, doppelt so langes, doppelt gedrehtes." },
      { type: "text", text: "Das Möbiusband wird zum Bild für die nimmer endende, immer wieder von vorn beginnende Putz- und Hausarbeit." },
      { type: "text", text: "Die Erzählebene ist ein persönlich und emotional gefärbter Wortschwall, der konträre und komplementäre Lebenswege, Voraussetzungen und Umstände arbeitender Frauen zueinander in Bezug setzt." },
      { type: "image", src: "/images/scraped/bilder/b_putzschwein2_org.jpg" },
      { type: "text", text: "Jedes Textband negiert sich bei jeder Wiederholung selbst." },
      { type: "text", text: "Die Installation ist eine vom Besucher zu erkundende Bild-Text-Maschine." },
      { type: "text", text: 'Das Fotoband von Karina Pośpiech ist ebenso ein Teil der „Möbiusputzfrau" wie die akustischen Textschleifen.' },
      { type: "image", src: "/images/scraped/bilder/b-putzneukoelln_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_putzfrau4_qu.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_putzfraupol1_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_putzfraupol_qu.jpg" },
    ],
  },
  {
    slug: "mysia-gora",
    title: "Mysia Góra",
    year: "2008",
    medium: "Rauminstallation zusammengesetzt aus einer 12er Siebdrucktafel, 11 Fotos und Text, Gouache, Siebdruck auf Leinwand, 2000 x 210",
    thumbnail: "/images/scraped/bilder/b_huhn_gr.jpg",
    content: [
      { type: "image", src: "/images/scraped/bilder/b_mysiasiebdruck2_org.jpg" },
      { type: "text", text: "Diese Arbeit basiert auf Fotos eines alten und neuen Wohnhauses einer deutschen Familie, die in Polen lebt und seit 40 Jahren versucht hat in ihre deutsche Heimat auszureisen. Da die Ausreise nicht gelingen wollte, wurde vor 10 Jahren, 20 Meter entfernt ein neues Haus gebaut. Die Familie ist erst mit dem Bau dieses Hauses nach der Plattenbauweise in Polen angekommen. Das 300 Jahre alte Bauernhaus, das von den Zisterziensermönchen gebaut wurde und bereits von der Urgroßeltern bewohnt wurde, hat die Familie verlassen." },
      { type: "image", src: "/images/scraped/bilder/b_mysiahuhn_org.jpg" },
      { type: "text", text: "Dieses Haus wird zum Sinnbild der Flucht, des Weggehens und der misslungenen Lebenstraums, so als wenn die Familie alles stehen und liegen lassen musste, um in das zwanzig Meter weiter erbaute Haus fliehen zu müssen. Die deutsche Heimat samt Möbeln, Bildern und Kleidern. Inzwischen ist mit dem Eintritt Polens in die EU die Ausreise überflüssig geworden. Europa hat dieser Familie die deutsche Heimat ersetzt." },
      { type: "image", src: "/images/scraped/bilder/b_mysiagruenzim_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_mysiakueche_qu.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_mysiaschwein_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_mysiahaus_qu.jpg" },
    ],
  },
  {
    slug: "berlin-warszawa",
    title: "Berlin–Warszawa",
    year: "2006",
    medium: "Siebdrucke auf Leinwand und Papier",
    thumbnail: "/images/scraped/bilder/b_berlin2_gr.jpg",
    content: [
      { type: "image", src: "/images/scraped/bilder/b_warschausiebdruck_org.jpg" },
      { type: "text", text: "Autobahn in Warschau und Berlin. Siebdrucke auf Leinwand und Papier 2006. Warschau 91." },
      { type: "text", text: "1991 ist das Jahr Unterzeichnung des deutsch-polnischen Vertrags über gute Nachbarschaft und freundschaftliche Zusammenarbeit in Bonn und Aufnahme Polens in den Europarat. In diesem Jahr fanden die ersten demokratische Sejm- und Senatswahlen seit 1926 statt." },
      { type: "text", text: "Drei Fotos aus Warschaus Mitte von 1991 bilden die Grundlage für die Siebdruckreihe dieser Arbeit, die den unwirtlichen Raum in der Mitte der Stadt thematisiert. Der sozialistische Stadtkörper der Nachkriegsjahre wird eine Wandlung vollziehen und damit in das Neue Zeitalter einfügen. Die Autobahn direkt neben dem Hauptbahnhof und PKN dem Palast der Kultur und Wissenschaften liegt in der Stadt wie ein Fremdkörper." },
      { type: "image", src: "/images/scraped/bilder/b_warszawa2_org.jpg" },
      { type: "text", text: "Dieser Raum wartet darauf neu besetzt zu werden und wird zum Sinnbild für Polens gesellschaftlichen und politischen Wandel." },
      { type: "image", src: "/images/scraped/bilder/b_warszawaberlin_org.jpg" },
      { type: "text", text: "Das sind hier konkret die Stadtautobahn A100 und ein Wohnhaus in der Bernhardstraße." },
      { type: "text", text: "Plötzlich grenzt Bewegung an Statik, öffentlicher Straßenraum an Privatraum, Autobahn an Wohnzimmer." },
    ],
  },
  {
    slug: "hildegard-ohde",
    title: "Hildegard Ohde",
    year: "2005–2009",
    medium: "Rauminstallation: Das Gesicht einer Frau als Spiegel des Zeitgeschehens. Bestehend aus zwei Filmen à 7 Min, einer 12er Siebdrucktafel und acht Fotos",
    thumbnail: "/images/scraped/bilder/b_ohdealtfot_gr.jpg",
    content: [
      { type: "text", text: "Hildegard Ohde geboren 1914 in Berlin." },
      { type: "text", text: "Hildegard Ohde hat 50 Jahre lang in Schöneberg gelebt und ist nach dem Einzug in die Wohnung in der Lindauerstraße 7 (nach dem Tod ihres Mannes 1958) nicht mehr umgezogen." },
      { type: "text", text: "Fasziniert von der Lebensgeschichte dieser Frau, der Offenheit und Lebendigkeit dieser 92-jährigen Dame, habe ich den Versuch unternommen, sich ihr mit meinen künstlerischen Mitteln zu nähern." },
      { type: "text", text: "Der Begriff des Alterns und der Schönheit kann durch die unterschiedlichen Ausdrucksformen neu erfahren werden." },
      { type: "image", src: "/images/scraped/bilder/b_ohdesieb_org.jpg" },
      { type: "text", text: "Inzwischen ist Frau Ohde 93-jährig gestorben." },
      { type: "text", text: "Die drei Teile der Installation bilden eine Einheit und sollen durch die gemeinsame Betrachtung eine neue andere Wahrnehmung ermöglichen." },
      { type: "image", src: "/images/scraped/bilder/b_ohdefotoalt_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_ohdefilm_qu.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_ohdesiebraum_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_ohdeatelier4qu.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_ohdefoto92_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_ohdewhg_qu.jpg" },
    ],
  },
  {
    slug: "romy",
    title: "ROMY",
    year: "2006–2011",
    medium: "Siebdruck auf Papier und Leinwand, Gouache",
    thumbnail: "/images/scraped/bilder/b_romyhut_gr.jpg",
    content: [
      { type: "image", src: "/images/scraped/bilder/b_romyhut_org.jpg" },
      { type: "text", text: "Romy mit Hut, Siebdruck auf Papier 70x100, 2007. Diese Siebdruckreihe basiert auf dem Foto der Berliner Fotografin Helga Kneidl, die während einer dreitägigen Begegnung mit Romy Schneider 1973 in Paris eine Reihe von Aufnahmen dieser bekannten Schauspielerin machte. Durch den Einsatz von unterschiedlichen Farben in den Siebdrucksequenzen entsteht in Romys Gesicht eine immer neue Aussage und Konnotation. 2011 entstand eine 5-teilige Siebdruckreihe auf Leinwand dieses Motivs, die den fotografischen Entwicklungsprozess nachzuahmen scheint." },
      { type: "image", src: "/images/scraped/bilder/b_romydreidavid_org.jpg" },
      { type: "text", text: "Romy mit ihrem Sohn David I–III, Siebdruck, Gouache auf Papier 210 x 70, 2006. Drei zufällige Amateurfotos der letzten Begegnung der Schauspielerin Romy Schneider mit ihrem Sohn David, der kurze Zeit später an den Folgen eines tragischen Unfalls starb, bilden die Grundlage für diese Bilder. In dem sich immer weiter verengenden Raum zwischen Romy und David wird Zeit und Nähe sichtbar. Das Wissen um die Tragik der Begegnung verleiht der Bilderreihe im Nachhinein einen besonderen Stellenwert." },
      { type: "image", src: "/images/scraped/bilder/b_romydavid2_org.jpg" },
      { type: "text", text: "Letztes Beisammensein von Romy Schneider mit ihrem Sohn David im Pariser Studio von Boulogne-Billancourt, 24. Juni 1981. Durch eine starke Vergrößerung des Ursprungsfotos und die flächige Darstellung der Haarformen wird der Blick auf die Details der Gesichter gelenkt. Diese Betrachtung wird durch die Zeitlupenfolge weiter verstärkt. Das allseits bekannte Romybild wird hier nicht eingelöst, es kann ein neues Bild von ihr entstehen." },
    ],
  },
  {
    slug: "hausportrait",
    title: "Hausportrait",
    year: "2008",
    medium: "Rauminstallation, Kunst am Bau, Siebdruck auf Glas",
    thumbnail: "/images/scraped/bilder/b_hausport_gr.jpg",
    content: [
      { type: "image", src: "/images/scraped/bilder/b_hausport1_org.jpg" },
      { type: "text", text: "Hausportrait als Konzept für Kunst am Bau Projekte in Berliner Altbauten 2008." },
      { type: "text", text: "Die Geschichte des Berliner Mietshauses in vier Bänden von Johann Friedrich Geist und Klaus Kürvers ist ein Standardwerk, das in Bibliotheken auf großes Interesse stößt und seit Jahren vergriffen ist." },
      { type: "text", text: "Ich selbst hatte das Glück an diesem Werk in meinem Architekturstudium mitzuwirken." },
      { type: "text", text: "Die Darstellung der individuellen Geschichte eines Berliner Altbaus auf fest installierten Glastafeln im Eingangsbereich empfängt Bewohner und Besucher und lenkt ihre Wahrnehmung auf die Besonderheiten des Ortes." },
      { type: "text", text: "Aktuelle und historische Fotos und sorgfältig recherchierte geschichtliche Details bilden die Grundlage der Siebdrucke auf Glas." },
      { type: "image", src: "/images/scraped/bilder/b_hausport2_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_hausportrait3_qu.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_hausport4_org.jpg" },
      { type: "image", src: "/images/scraped/bilder/b_hausportrait5_qu.jpg" },
    ],
  },
];

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  type: string;
  projectSlug?: string;
}

export const exhibitions: Exhibition[] = [
  {
    year: "2018",
    title: "Cyanotypie",
    venue:
      "Druckwerkstatt des Kulturwerks des bbk berlin im Bethanien, Mariannenplatz 2, 10997 Berlin",
    type: "Ausstellung",
    projectSlug: "fbi",
  },
  {
    year: "2017",
    title: "unisono — FBI. Fassbinder, Beuys + Ich",
    venue: "Galerie subjectobject, Einzelausstellung",
    type: "Einzelausstellung",
    projectSlug: "fbi",
  },
  {
    year: "2013",
    title: "Raumportraits",
    venue: "Künstlerhaus Göttingen im Lichtberghaus, Einzelausstellung",
    type: "Einzelausstellung",
    projectSlug: "putz-frau-ohne-gesicht",
  },
  {
    year: "2013",
    title: "SilesiaTopia",
    venue: "Rondo Sztuki, Katowice",
    type: "Ausstellung",
    projectSlug: "silesiatopia",
  },
  {
    year: "2012",
    title: "Heimspiel — The World You Want to Live In",
    venue: "Rathausgalerie Tempelhof des Frauenmuseums Berlin, April/Mai",
    type: "Ausstellung",
    projectSlug: "the-world-you-want-to-live-in",
  },
  {
    year: "2011",
    title: "Vergessen",
    venue: "Atelierhof Kreuzberg, Oktober",
    type: "Ausstellung",
    projectSlug: "the-world-you-want-to-live-in",
  },
  {
    year: "2011",
    title: "Planete doc Filmfestival in Warschau",
    venue: "Warschau",
    type: "Festival",
    projectSlug: "the-world-you-want-to-live-in",
  },
  {
    year: "2010",
    title: "Positionen + Gegenwart — PUTZ, FRAU",
    venue: "Kunstraum Bethanien, Raumtoninstallation mit der Autorin Barbara Kenneweg",
    type: "Ausstellung",
    projectSlug: "putz-frau-ohne-gesicht",
  },
  {
    year: "2010",
    title: "nurart.org fängt Licht — Romy Grafik",
    venue: "Atelierhof Kreuzberg, Berlin",
    type: "Ausstellung",
    projectSlug: "romy",
  },
  {
    year: "2009",
    title: "Warschau Berlin — Grafik",
    venue: "Büchergilde, Berlin",
    type: "Ausstellung",
    projectSlug: "berlin-warszawa",
  },
  {
    year: "2009",
    title: "Portrait des Hauses — Lindauerstraße",
    venue: "Rauminstallation Kunst am Bau, Berlin",
    type: "Kunst am Bau",
    projectSlug: "hausportrait",
  },
  {
    year: "2008",
    title: "Romy zum 70-jährigen Jubiläum",
    venue: "Galerie für junge Künstler und DesignerInnen",
    type: "Einzelausstellung",
    projectSlug: "romy",
  },
  {
    year: "2008",
    title: "3.Blicke, 50 Jahre in Schöneberg — H. Ohde",
    venue: "18m Galerie für Zahlenwerte, Berlin",
    type: "Einzelausstellung",
    projectSlug: "hildegard-ohde",
  },
  {
    year: "2008",
    title: "Ruhe.Störung — A100",
    venue: "Galerie M, Berlin",
    type: "Ausstellung",
    projectSlug: "berlin-warszawa",
  },
  {
    year: "2008",
    title: "Strictly Berlin — Media Art",
    venue: "Galerie der Künste, Berlin",
    type: "Ausstellung",
    projectSlug: "berlin-warszawa",
  },
  {
    year: "2007",
    title: "Haus_Frau_Haus — Mysia Góra",
    venue: "Das verborgene Museum, Berlin",
    type: "Ausstellung",
    projectSlug: "mysia-gora",
  },
  {
    year: "2007",
    title: "Die Kunst des Alterns",
    venue: "Alt Lietzow, Berlin",
    type: "Ausstellung",
  },
  {
    year: "2007",
    title: "A 100 Magistrale — 007 Targets of Opportunity",
    venue: "Berlin",
    type: "Ausstellung",
    projectSlug: "romy",
  },
  {
    year: "2006",
    title: "Stadt der Frauen — Warschau Berlin",
    venue: "Kommunale Galerie Wilmersdorf",
    type: "Ausstellung",
    projectSlug: "mysia-gora",
  },
  {
    year: "2006",
    title: "Synopse 06 — Dialog|Analog|Digital",
    venue: "Willy Brandt Haus, Berlin",
    type: "Ausstellung",
  },
  {
    year: "2005",
    title: "Die Frau, die Stadt und die Gruben",
    venue: "Antikriegsmuseum, Berlin",
    type: "Ausstellung",
    projectSlug: "hildegard-ohde",
  },
  {
    year: "2005",
    title: "Kulturelle Vielfalt",
    venue: "TDM Internationales Design Zentrum, Berlin",
    type: "Ausstellung",
    projectSlug: "hildegard-ohde",
  },
];

export const cvData = {
  bio: "Installation / Video, Foto, Objekt, Siebdruck. 1961 geboren und aufgewachsen in Zabrze/Polen, lebt seit 1980 in Berlin.",
  education: [
    {
      period: "2001–2003",
      title: "Masterstudium Bühnen- und Kostümbild",
    },
    {
      period: "1983–1991",
      title: "Studium der Architektur/HDK Berlin, Diplom: Europäisches Haus in Warschau",
    },
    {
      period: "1980–1983",
      title: "Studium der Kunstgeschichte, Philosophie und der Osteuropäischen Geschichte",
    },
  ],
  memberships: [
    { since: "2006", organization: "NGBK Berlin" },
    { since: "2006", organization: "BBK Berlin" },
  ],
  collections: [
    "Ankauf aus Mitteln der Künstlerförderung der Stadt Berlin 1997 — Hildegard Ohde geboren 1914 in Berlin, Rauminstallation/Filme, Siebdrucke und Fotos",
    "Ankauf der Museen Tempelhof Schöneberg 2010 — Der Taucher, 140x160 Öl auf Leinwand Malerei",
  ],
  keyProjects: [
    "2011/2015 SilesiaTopia — Initiatorin des Deutsch-Polnischen Austauschprojekts in Zabrze, Katowice, Berlin, Warschau",
    "Seit 2007 Kunst am Bau Projekte",
    "2002–05 Theater- und Opernproduktionen der Deutschen Oper Berlin, dem Berliner Ensemble und der Schaubühne Berlin",
    "1997 Aufnahme in das Künstlerförderprogramm der Stadt Berlin",
  ],
  externalLinks: [
    { label: "www.haus-portrait.de", url: "https://www.haus-portrait.de" },
    { label: "www.silesiatopia.de", url: "https://www.silesiatopia.de" },
  ],
};
