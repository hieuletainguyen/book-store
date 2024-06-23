const data = [
  {
    "id": "1",
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "published": "1958",
    "country": "Nigeria",
    "lang": "English",
    "pages": "209",
    "image": "things-fall-apart.jpg",
    "url": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "price": "5"
  },
  {
    "id": "2",
    "title": "Fairy tales",
    "author": "Hans Christian Andersen",
    "published": "1835-37",
    "country": "Denmark",
    "lang": "Danish",
    "pages": "784",
    "image": "fairy-tales.jpg",
    "url": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
    "price": "5"
  },
  {
    "id": "3",
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "published": "1308-1321",
    "country": "Italy",
    "lang": "Italian",
    "pages": "928",
    "image": "the-divine-comedy.jpg",
    "url": "https://en.wikipedia.org/wiki/Divine_Comedy",
    "price": "5"
  },
  {
    "id": "4",
    "title": "The Epic Of Gilgamesh",
    "author": "Unknown",
    "published": "18th - 17th century BCE",
    "country": "Sumer and Akkadian Empire",
    "lang": "Akkadian",
    "pages": "160",
    "image": "the-epic-of-gilgamesh.jpg",
    "url": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
    "price": "5"
  },
  {
    "id": "5",
    "title": "The Book Of Job",
    "author": "Unknown",
    "published": "7th - 4th century BCE",
    "country": "Achaemenid Empire",
    "lang": "Hebrew",
    "pages": "176",
    "image": "the-book-of-job.jpg",
    "url": "https://en.wikipedia.org/wiki/Book_of_Job",
    "price": "5"
  },
  {
    "id": "6",
    "title": "One Thousand and One Nights",
    "author": "Unknown",
    "published": "700-1500",
    "country": "India/Iran/Iraq/Egypt/Tajikistan",
    "lang": "Arabic",
    "pages": "288",
    "image": "one-thousand-and-one-nights.jpg",
    "url": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
    "price": "5"
  },
  {
    "id": "7",
    "title": "Njal's Saga",
    "author": "Unknown",
    "published": "13th century",
    "country": "Iceland",
    "lang": "Old Norse",
    "pages": "384",
    "image": "njals-saga.jpg",
    "url": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
    "price": "5"
  },
  {
    "id": "8",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "published": "1813",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "226",
    "image": "pride-and-prejudice.jpg",
    "url": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
    "price": "5"
  },
  {
    "id": "9",
    "title": "Le Pere Goriot",
    "author": "Honoré de Balzac",
    "published": "1835",
    "country": "France",
    "lang": "French",
    "pages": "443",
    "image": "le-pere-goriot.jpg",
    "url": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
    "price": "5"
  },
  {
    "id": "10",
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "author": "Samuel Beckett",
    "published": "1951-53",
    "country": "Republic of Ireland",
    "lang": "French, English",
    "pages": "256",
    "image": "molloy-malone-dies-the-unnamable.jpg",
    "url": "https://en.wikipedia.org/wiki/Molloy_(novel)",
    "price": "5"
  },
  {
    "id": "11",
    "title": "The Decameron",
    "author": "Giovanni Boccaccio",
    "published": "1349-53",
    "country": "Italy",
    "lang": "Italian",
    "pages": "1024",
    "image": "the-decameron.jpg",
    "url": "https://en.wikipedia.org/wiki/The_Decameron",
    "price": "5"
  },
  {
    "id": "12",
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "published": "1944-86",
    "country": "Argentina",
    "lang": "Spanish",
    "pages": "224",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Ficciones",
    "price": "5"
  },
  {
    "id": "13",
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "published": "1847",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "342",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Wuthering_Heights",
    "price": "5"
  },
  {
    "id": "14",
    "title": "The Stranger",
    "author": "Albert Camus",
    "published": "1942",
    "country": "Algeria, French Empire",
    "lang": "French",
    "pages": "185",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
    "price": "5"
  },
  {
    "id": "15",
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "published": "1997",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "223",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
    "price": "15"
  },
  {
    "id": "16",
    "title": "Journey to the End of the Night",
    "author": "Louis-Ferdinand Céline",
    "published": "1932",
    "country": "France",
    "lang": "French",
    "pages": "505",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
    "price": "5"
  },
  {
    "id": "17",
    "title": "Don Quijote De La Mancha",
    "author": "Miguel de Cervantes",
    "published": "1605 (part 1), 1615 (part 2)",
    "country": "Spain",
    "lang": "Spanish",
    "pages": "1056",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Don_Quixote",
    "price": "5"
  },
  {
    "id": "18",
    "title": "The Canterbury Tales",
    "author": "Geoffrey Chaucer",
    "published": "14th century",
    "country": "England",
    "lang": "English",
    "pages": "544",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
    "price": "5"
  },
  {
    "id": "19",
    "title": "Stories",
    "author": "Anton Chekhov",
    "published": "1886",
    "country": "Russia",
    "lang": "Russian",
    "pages": "194",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
    "price": "5"
  },
  {
    "id": "20",
    "title": "Nostromo",
    "author": "Joseph Conrad",
    "published": "1904",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "320",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Nostromo",
    "price": "5"
  },
  {
    "id": "21",
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "published": "1861",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "194",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Great_Expectations",
    "price": "5"
  },
  {
    "id": "22",
    "title": "Jacques the Fatalist",
    "author": "Denis Diderot",
    "published": "1796",
    "country": "France",
    "lang": "French",
    "pages": "596",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
    "price": "5"
  },
  {
    "id": "23",
    "title": "Berlin Alexanderplatz",
    "author": "Alfred Döblin",
    "published": "1929",
    "country": "Germany",
    "lang": "German",
    "pages": "600",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
    "price": "5"
  },
  {
    "id": "24",
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "published": "1866",
    "country": "Russia",
    "lang": "Russian",
    "pages": "551",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Crime_and_Punishment",
    "price": "5"
  },
  {
    "id": "25",
    "title": "The Idiot",
    "author": "Fyodor Dostoevsky",
    "published": "1869",
    "country": "Russia",
    "lang": "Russian",
    "pages": "656",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Idiot",
    "price": "5"
  },
  {
    "id": "26",
    "title": "The Possessed",
    "author": "Fyodor Dostoevsky",
    "published": "1872",
    "country": "Russia",
    "lang": "Russian",
    "pages": "768",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
    "price": "5"
  },
  {
    "id": "27",
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "published": "1880",
    "country": "Russia",
    "lang": "Russian",
    "pages": "824",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
    "price": "5"
  },
  {
    "id": "28",
    "title": "Middlemarch",
    "author": "George Eliot",
    "published": "1871",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "800",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Middlemarch",
    "price": "5"
  },
  {
    "id": "29",
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "published": "1952",
    "country": "United States",
    "lang": "English",
    "pages": "581",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Invisible_Man",
    "price": "5"
  },
  {
    "id": "30",
    "title": "Medea",
    "author": "Euripides",
    "published": "431 BCE",
    "country": "Greece",
    "lang": "Greek",
    "pages": "104",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Medea_(play)",
    "price": "5"
  },
  {
    "id": "31",
    "title": "Absalom, Absalom!",
    "author": "William Faulkner",
    "published": "1936",
    "country": "United States",
    "lang": "English",
    "pages": "313",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
    "price": "5"
  },
  {
    "id": "32",
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "published": "1929",
    "country": "United States",
    "lang": "English",
    "pages": "326",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
    "price": "5"
  },
  {
    "id": "33",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "published": "1857",
    "country": "France",
    "lang": "French",
    "pages": "528",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Madame_Bovary",
    "price": "5"
  },
  {
    "id": "34",
    "title": "Sentimental Education",
    "author": "Gustave Flaubert",
    "published": "1869",
    "country": "France",
    "lang": "French",
    "pages": "606",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Sentimental_Education",
    "price": "5"
  },
  {
    "id": "35",
    "title": "Gypsy Ballads",
    "author": "Federico Garc�a Lorca",
    "published": "1928",
    "country": "Spain",
    "lang": "Spanish",
    "pages": "218",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Gypsy_Ballads",
    "price": "5"
  },
  {
    "id": "36",
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garc�a M�rquez",
    "published": "1967",
    "country": "Colombia",
    "lang": "Spanish",
    "pages": "417",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
    "price": "5"
  },
  {
    "id": "37",
    "title": "Love in the Time of Cholera",
    "author": "Gabriel Garc�a M�rquez",
    "published": "1985",
    "country": "Colombia",
    "lang": "Spanish",
    "pages": "368",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
    "price": "5"
  },
  {
    "id": "38",
    "title": "Faust",
    "author": "Johann Wolfgang von Goethe",
    "published": "1832",
    "country": "Saxe-Weimar",
    "lang": "German",
    "pages": "158",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
    "price": "5"
  },
  {
    "id": "39",
    "title": "Dead Souls",
    "author": "Nikolai Gogol",
    "published": "1842",
    "country": "Russia",
    "lang": "Russian",
    "pages": "432",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Dead_Souls",
    "price": "5"
  },
  {
    "id": "40",
    "title": "The Tin Drum",
    "author": "Günter Grass",
    "published": "1959",
    "country": "Germany",
    "lang": "German",
    "pages": "600",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Tin_Drum",
    "price": "5"
  },
  {
    "id": "41",
    "title": "The Devil to Pay in the Backlands",
    "author": "João Guimarães Rosa",
    "published": "1956",
    "country": "Brazil",
    "lang": "Portuguese",
    "pages": "494",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
    "price": "5"
  },
  {
    "id": "42",
    "title": "Hunger",
    "author": "Knut Hamsun",
    "published": "1890",
    "country": "Norway",
    "lang": "Norwegian",
    "pages": "176",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
    "price": "5"
  },
  {
    "id": "43",
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "published": "1952",
    "country": "United States",
    "lang": "English",
    "pages": "128",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
    "price": "5"
  },
  {
    "id": "44",
    "title": "Iliad",
    "author": "Homer",
    "published": "760-710 BCE",
    "country": "Greece",
    "lang": "Greek",
    "pages": "608",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Iliad",
    "price": "5"
  },
  {
    "id": "45",
    "title": "Odyssey",
    "author": "Homer",
    "published": "8th century BCE",
    "country": "Greece",
    "lang": "Greek",
    "pages": "374",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Odyssey",
    "price": "5"
  },
  {
    "id": "46",
    "title": "A Doll's House",
    "author": "Henrik Ibsen",
    "published": "1879",
    "country": "Norway",
    "lang": "Norwegian",
    "pages": "68",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/A_Doll%27s_House",
    "price": "5"
  },
  {
    "id": "47",
    "title": "Ulysses",
    "author": "James Joyce",
    "published": "1922",
    "country": "Irish Free State",
    "lang": "English",
    "pages": "228",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Ulysses_(novel)",
    "price": "5"
  },
  {
    "id": "48",
    "title": "Stories",
    "author": "Franz Kafka",
    "published": "1924",
    "country": "Czechoslovakia",
    "lang": "German",
    "pages": "488",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
    "price": "5"
  },
  {
    "id": "49",
    "title": "The Trial",
    "author": "Franz Kafka",
    "published": "1925",
    "country": "Czechoslovakia",
    "lang": "German",
    "pages": "160",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Trial",
    "price": "5"
  },
  {
    "id": "50",
    "title": "The Castle",
    "author": "Franz Kafka",
    "published": "1926",
    "country": "Czechoslovakia",
    "lang": "German",
    "pages": "352",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Castle_(novel)",
    "price": "5"
  },
  {
    "id": "51",
    "title": "The recognition of Shakuntala",
    "author": "K_lid_sa",
    "published": "1st century BCE - 4th century CE",
    "country": "India",
    "lang": "Sanskrit",
    "pages": "147",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
    "price": "5"
  },
  {
    "id": "52",
    "title": "The Sound of the Mountain",
    "author": "Yasunari Kawabata",
    "published": "1954",
    "country": "Japan",
    "lang": "Japanese",
    "pages": "288",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain",
    "price": "5"
  },
  {
    "id": "53",
    "title": "Zorba the Greek",
    "author": "Nikos Kazantzakis",
    "published": "1946",
    "country": "Greece",
    "lang": "Greek",
    "pages": "368",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Zorba_the_Greek",
    "price": "5"
  },
  {
    "id": "54",
    "title": "Sons and Lovers",
    "author": "D. H. Lawrence",
    "published": "1913",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "432",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Sons_and_Lovers",
    "price": "5"
  },
  {
    "id": "55",
    "title": "Independent People",
    "author": "Halldór Laxness",
    "published": "1934-35",
    "country": "Iceland",
    "lang": "Icelandic",
    "pages": "470",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Independent_People",
    "price": "5"
  },
  {
    "id": "56",
    "title": "Poems",
    "author": "Giacomo Leopardi",
    "published": "1818",
    "country": "Italy",
    "lang": "Italian",
    "pages": "184",
    "image": "",
    "url": "",
    "price": "5"
  },
  {
    "id": "57",
    "title": "The Golden Notebook",
    "author": "Doris Lessing",
    "published": "1962",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "688",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Golden_Notebook",
    "price": "5"
  },
  {
    "id": "58",
    "title": "Pippi Longstocking",
    "author": "Astrid Lindgren",
    "published": "1945",
    "country": "Sweden",
    "lang": "Swedish",
    "pages": "160",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Pippi_Longstocking",
    "price": "5"
  },
  {
    "id": "59",
    "title": "Diary of a Madman",
    "author": "Lu Xun",
    "published": "1918",
    "country": "China",
    "lang": "Chinese",
    "pages": "389",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary",
    "price": "5"
  },
  {
    "id": "60",
    "title": "Children of Gebelawi",
    "author": "Naguib Mahfouz",
    "published": "1959",
    "country": "Egypt",
    "lang": "Arabic",
    "pages": "355",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Children_of_Gebelawi",
    "price": "5"
  },
  {
    "id": "61",
    "title": "Buddenbrooks",
    "author": "Thomas Mann",
    "published": "1901",
    "country": "Germany",
    "lang": "German",
    "pages": "736",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Buddenbrooks",
    "price": "5"
  },
  {
    "id": "62",
    "title": "The Magic Mountain",
    "author": "Thomas Mann",
    "published": "1924",
    "country": "Germany",
    "lang": "German",
    "pages": "720",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Magic_Mountain",
    "price": "5"
  },
  {
    "id": "63",
    "title": "Moby Dick",
    "author": "Herman Melville",
    "published": "1851",
    "country": "United States",
    "lang": "English",
    "pages": "378",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Moby-Dick",
    "price": "5"
  },
  {
    "id": "64",
    "title": "Essays",
    "author": "Michel de Montaigne",
    "published": "1595",
    "country": "France",
    "lang": "French",
    "pages": "404",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
    "price": "5"
  },
  {
    "id": "65",
    "title": "History",
    "author": "Elsa Morante",
    "published": "1974",
    "country": "Italy",
    "lang": "Italian",
    "pages": "600",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/History_(novel)",
    "price": "5"
  },
  {
    "id": "66",
    "title": "Beloved",
    "author": "Toni Morrison",
    "published": "1987",
    "country": "United States",
    "lang": "English",
    "pages": "321",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Beloved_(novel)",
    "price": "5"
  },
  {
    "id": "67",
    "title": "The Tale of Genji",
    "author": "Murasaki Shikibu",
    "published": "1000-1012",
    "country": "Japan",
    "lang": "Japanese",
    "pages": "1360",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
    "price": "5"
  },
  {
    "id": "68",
    "title": "The Man Without Qualities",
    "author": "Robert Musil",
    "published": "1930-32",
    "country": "Austria",
    "lang": "German",
    "pages": "365",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities",
    "price": "5"
  },
  {
    "id": "69",
    "title": "Lolita",
    "author": "Vladimir Nabokov",
    "published": "1955",
    "country": "Russia/United States",
    "lang": "English",
    "pages": "317",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Lolita",
    "price": "5"
  },
  {
    "id": "70",
    "title": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "published": "1949",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "272",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
    "price": "5"
  },
  {
    "id": "71",
    "title": "Metamorphoses",
    "author": "Ovid",
    "published": "1st century CE",
    "country": "Roman Empire",
    "lang": "Classical Latin",
    "pages": "576",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Metamorphoses",
    "price": "5"
  },
  {
    "id": "72",
    "title": "The Book of Disquiet",
    "author": "Fernando Pessoa",
    "published": "1928",
    "country": "Portugal",
    "lang": "Portuguese",
    "pages": "272",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet",
    "price": "5"
  },
  {
    "id": "73",
    "title": "Tales",
    "author": "Edgar Allan Poe",
    "published": "19th century",
    "country": "United States",
    "lang": "English",
    "pages": "842",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales",
    "price": "5"
  },
  {
    "id": "74",
    "title": "In Search of Lost Time",
    "author": "Marcel Proust",
    "published": "1913-27",
    "country": "France",
    "lang": "French",
    "pages": "2408",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time",
    "price": "5"
  },
  {
    "id": "75",
    "title": "Gargantua and Pantagruel",
    "author": "François Rabelais",
    "published": "1532-34",
    "country": "France",
    "lang": "French",
    "pages": "623",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
    "price": "5"
  },
  {
    "id": "76",
    "title": "Pedro Páramo",
    "author": "Juan Rulfo",
    "published": "1955",
    "country": "Mexico",
    "lang": "Spanish",
    "pages": "124",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo",
    "price": "5"
  },
  {
    "id": "77",
    "title": "The Masnavi",
    "author": "Rumi",
    "published": "1258-73",
    "country": "Sultanate of Rum",
    "lang": "Persian",
    "pages": "438",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Masnavi",
    "price": "5"
  },
  {
    "id": "78",
    "title": "Midnight's Children",
    "author": "Salman Rushdie",
    "published": "1981",
    "country": "United Kingdom, India",
    "lang": "English",
    "pages": "536",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Midnight%27s_Children",
    "price": "5"
  },
  {
    "id": "79",
    "title": "Bostan",
    "author": "Saadi",
    "published": "1257",
    "country": "Persia, Persian Empire",
    "lang": "Persian",
    "pages": "298",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Bustan_(book)",
    "price": "5"
  },
  {
    "id": "80",
    "title": "Season of Migration to the North",
    "author": "Tayeb Salih",
    "published": "1966",
    "country": "Sudan",
    "lang": "Arabic",
    "pages": "139",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North",
    "price": "5"
  },
  {
    "id": "81",
    "title": "Blindness",
    "author": "José Saramago",
    "published": "1995",
    "country": "Portugal",
    "lang": "Portuguese",
    "pages": "352",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Blindness_(novel)",
    "price": "5"
  },
  {
    "id": "82",
    "title": "Hamlet",
    "author": "William Shakespeare",
    "published": "1603",
    "country": "England",
    "lang": "English",
    "pages": "432",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Hamlet",
    "price": "5"
  },
  {
    "id": "83",
    "title": "King Lear",
    "author": "William Shakespeare",
    "published": "1608",
    "country": "England",
    "lang": "English",
    "pages": "384",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/King_Lear",
    "price": "5"
  },
  {
    "id": "84",
    "title": "Othello",
    "author": "William Shakespeare",
    "published": "1609",
    "country": "England",
    "lang": "English",
    "pages": "314",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Othello",
    "price": "5"
  },
  {
    "id": "85",
    "title": "Oedipus the King",
    "author": "Sophocles",
    "published": "430 BCE",
    "country": "Greece",
    "lang": "Greek",
    "pages": "88",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Oedipus_the_King",
    "price": "5"
  },
  {
    "id": "86",
    "title": "The Red and the Black",
    "author": "Stendhal",
    "published": "1830",
    "country": "France",
    "lang": "French",
    "pages": "576",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Red_and_the_Black",
    "price": "5"
  },
  {
    "id": "87",
    "title": "The Life And Opinions of Tristram Shandy",
    "author": "Laurence Sterne",
    "published": "1760",
    "country": "England",
    "lang": "English",
    "pages": "640",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman",
    "price": "5"
  },
  {
    "id": "88",
    "title": "Confessions of Zeno",
    "author": "Italo Svevo",
    "published": "1923",
    "country": "Italy",
    "lang": "Italian",
    "pages": "412",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience",
    "price": "5"
  },
  {
    "id": "89",
    "title": "Gulliver's Travels",
    "author": "Jonathan Swift",
    "published": "1726",
    "country": "Ireland",
    "lang": "English",
    "pages": "178",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
    "price": "5"
  },
  {
    "id": "90",
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "published": "1865-1869",
    "country": "Russia",
    "lang": "Russian",
    "pages": "1296",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/War_and_Peace",
    "price": "5"
  },
  {
    "id": "91",
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "published": "1877",
    "country": "Russia",
    "lang": "Russian",
    "pages": "864",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Anna_Karenina",
    "price": "5"
  },
  {
    "id": "92",
    "title": "The Death of Ivan Ilyich",
    "author": "Leo Tolstoy",
    "published": "1886",
    "country": "Russia",
    "lang": "Russian",
    "pages": "92",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich",
    "price": "5"
  },
  {
    "id": "93",
    "title": "The Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "published": "1884",
    "country": "United States",
    "lang": "English",
    "pages": "224",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
    "price": "5"
  },
  {
    "id": "94",
    "title": "Ramayana",
    "author": "Valmiki",
    "published": "5th century BCE - 4th century BCE",
    "country": "India",
    "lang": "Sanskrit",
    "pages": "152",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Ramayana",
    "price": "5"
  },
  {
    "id": "95",
    "title": "The Aeneid",
    "author": "Virgil",
    "published": "29-19 BCE",
    "country": "Roman Empire",
    "lang": "Classical Latin",
    "pages": "442",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Aeneid",
    "price": "5"
  },
  {
    "id": "96",
    "title": "Mahabharata",
    "author": "Vyasa",
    "published": "9th century BCE - 5th century BCE",
    "country": "India",
    "lang": "Sanskrit",
    "pages": "276",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Mahabharata",
    "price": "5"
  },
  {
    "id": "97",
    "title": "Leaves of Grass",
    "author": "Walt Whitman",
    "published": "1855",
    "country": "United States",
    "lang": "English",
    "pages": "152",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Leaves_of_Grass",
    "price": "5"
  },
  {
    "id": "98",
    "title": "Mrs Dalloway",
    "author": "Virginia Woolf",
    "published": "1925",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "216",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Mrs_Dalloway",
    "price": "5"
  },
  {
    "id": "99",
    "title": "To the Lighthouse",
    "author": "Virginia Woolf",
    "published": "1927",
    "country": "United Kingdom",
    "lang": "English",
    "pages": "209",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/To_the_Lighthouse",
    "price": "5"
  },
  {
    "id": "100",
    "title": "Memoirs of Hadrian",
    "author": "Marguerite Yourcenar",
    "published": "1951",
    "country": "France/Belgium",
    "lang": "French",
    "pages": "408",
    "image": "",
    "url": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
    "price": "5"
  }
];


module.exports = data;