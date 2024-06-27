
USE emails_db

CREATE TABLE IF NOT EXISTS bookstore(
    id int AUTO_INCREMENT, 
    title VARCHAR(50), 
    author VARCHAR(50), 
    image VARCHAR(50), 
    pages VARCHAR(50), 
    country VARCHAR(50), 
    price VARCHAR(50), 
    url VARCHAR(100), 
    PRIMARY KEY(id)
);
    
INSERT INTO bookstore (title, author, image, pages, country, price, url) VALUES 
    ("Things Fall Apart","Chinua Achebe",
    "things-fall-apart.jpg", "209", "Nigeria", "5",
    "https://en.wikipedia.org/wiki/Things_Fall_Apart"),
("Fairy tales","Hans Christian Andersen",
    "fairy-tales.jpg", "784", "Denmark", "5",
    "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection."),
("The Divine Comedy","Dante Alighieri",
    "the-divine-comedy.jpg", "928", "Italy", "5",
    "https://en.wikipedia.org/wiki/Divine_Comedy"),
("The Epic Of Gilgamesh","Unknown",
    "the-epic-of-gilgamesh.jpg", "160", "Sumer and Akkadian Empire", "5",
    "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh"),
("The Book Of Job","Unknown",
    "the-book-of-job.jpg", "176", "Achaemenid Empire", "5",
    "https://en.wikipedia.org/wiki/Book_of_Job"),
("One Thousand and One Nights","Unknown",
    "one-thousand-and-one-nights.jpg", "288", "India/Iran/Iraq/Egypt/Tajikistan", "5",
    "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights"),
("Njal's Saga","Unknown",
    "njals-saga.jpg", "384", "Iceland", "5",
    "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga"),
("Pride and Prejudice","Jane Austen",
    "pride-and-prejudice.jpg", "226", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Pride_and_Prejudice"),
("Le Pere Goriot","Honoré de Balzac",
    "le-pere-goriot.jpg", "443", "France", "5",
    "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot"),
("Molloy, Malone Dies, The Unnamable, the trilogy","Samuel Beckett",
    "molloy-malone-dies-the-unnamable.jpg", "256", "Republic of Ireland", "5",
    "https://en.wikipedia.org/wiki/Molloy_(novel)"),
("The Decameron","Giovanni Boccaccio",
    "the-decameron.jpg", "1024", "Italy", "5",
    "https://en.wikipedia.org/wiki/The_Decameron"),
("Ficciones","Jorge Luis Borges",
    "", "224", "Argentina", "5",
    "https://en.wikipedia.org/wiki/Ficciones"),
("Wuthering Heights","Emily Brontë",
    "", "342", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Wuthering_Heights"),
("The Stranger","Albert Camus",
    "", "185", "Algeria, French Empire", "5",
    "https://en.wikipedia.org/wiki/The_Stranger_(novel)"),
("Harry Potter and the Philosopher's Stone","J. K. Rowling",
    "", "223", "United Kingdom", "15",
    "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone"),
("Journey to the End of the Night","Louis-Ferdinand Céline",
    "", "505", "France", "5",
    "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night"),
("Don Quijote De La Mancha","Miguel de Cervantes",
    "", "1056", "Spain", "5",
    "https://en.wikipedia.org/wiki/Don_Quixote"),
("The Canterbury Tales","Geoffrey Chaucer",
    "", "544", "England", "5",
    "https://en.wikipedia.org/wiki/The_Canterbury_Tales"),
("Stories","Anton Chekhov",
    "", "194", "Russia", "5",
    "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov"),
("Nostromo","Joseph Conrad",
    "", "320", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Nostromo"),
("Great Expectations","Charles Dickens",
    "", "194", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Great_Expectations"),
("Jacques the Fatalist","Denis Diderot",
    "", "596", "France", "5",
    "https://en.wikipedia.org/wiki/Jacques_the_Fatalist"),
("Berlin Alexanderplatz","Alfred Döblin",
    "", "600", "Germany", "5",
    "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz"),
("Crime and Punishment","Fyodor Dostoevsky",
    "", "551", "Russia", "5",
    "https://en.wikipedia.org/wiki/Crime_and_Punishment"),
("The Idiot","Fyodor Dostoevsky",
    "", "656", "Russia", "5",
    "https://en.wikipedia.org/wiki/The_Idiot"),
("The Possessed","Fyodor Dostoevsky",
    "", "768", "Russia", "5",
    "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)"),
("The Brothers Karamazov","Fyodor Dostoevsky",
    "", "824", "Russia", "5",
    "https://en.wikipedia.org/wiki/The_Brothers_Karamazov"),
("Middlemarch","George Eliot",
    "", "800", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Middlemarch"),
("Invisible Man","Ralph Ellison",
    "", "581", "United States", "5",
    "https://en.wikipedia.org/wiki/Invisible_Man"),
("Medea","Euripides",
    "", "104", "Greece", "5",
    "https://en.wikipedia.org/wiki/Medea_(play)"),
("Absalom, Absalom!","William Faulkner",
    "", "313", "United States", "5",
    "https://en.wikipedia.org/wiki/Absalom,_Absalom!"),
("The Sound and the Fury","William Faulkner",
    "", "326", "United States", "5",
    "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury"),
("Madame Bovary","Gustave Flaubert",
    "", "528", "France", "5",
    "https://en.wikipedia.org/wiki/Madame_Bovary"),
("Sentimental Education","Gustave Flaubert",
    "", "606", "France", "5",
    "https://en.wikipedia.org/wiki/Sentimental_Education"),
("Gypsy Ballads","Federico Garc�a Lorca",
    "", "218", "Spain", "5",
    "https://en.wikipedia.org/wiki/Gypsy_Ballads"),
("One Hundred Years of Solitude","Gabriel Garc�a M�rquez",
    "", "417", "Colombia", "5",
    "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"),
("Love in the Time of Cholera","Gabriel Garc�a M�rquez",
    "", "368", "Colombia", "5",
    "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera"),
("Faust","Johann Wolfgang von Goethe",
    "", "158", "Saxe-Weimar", "5",
    "https://en.wikipedia.org/wiki/Goethe%27s_Faust"),
("Dead Souls","Nikolai Gogol",
    "", "432", "Russia", "5",
    "https://en.wikipedia.org/wiki/Dead_Souls"),
("The Tin Drum","Günter Grass",
    "", "600", "Germany", "5",
    "https://en.wikipedia.org/wiki/The_Tin_Drum"),
("The Devil to Pay in the Backlands","João Guimarães Rosa",
    "", "494", "Brazil", "5",
    "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands"),
("Hunger","Knut Hamsun",
    "", "176", "Norway", "5",
    "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)"),
("The Old Man and the Sea","Ernest Hemingway",
    "", "128", "United States", "5",
    "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea"),
("Iliad","Homer",
    "", "608", "Greece", "5",
    "https://en.wikipedia.org/wiki/Iliad"),
("Odyssey","Homer",
    "", "374", "Greece", "5",
    "https://en.wikipedia.org/wiki/Odyssey"),
("A Doll's House","Henrik Ibsen",
    "", "68", "Norway", "5",
    "https://en.wikipedia.org/wiki/A_Doll%27s_House"),
("Ulysses","James Joyce",
    "", "228", "Irish Free State", "5",
    "https://en.wikipedia.org/wiki/Ulysses_(novel)"),
("Stories","Franz Kafka",
    "", "488", "Czechoslovakia", "5",
    "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories"),
("The Trial","Franz Kafka",
    "", "160", "Czechoslovakia", "5",
    "https://en.wikipedia.org/wiki/The_Trial"),
("The Castle","Franz Kafka",
    "", "352", "Czechoslovakia", "5",
    "https://en.wikipedia.org/wiki/The_Castle_(novel)"),
("The recognition of Shakuntala","K_lid_sa",
    "", "147", "India", "5",
    "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam"),
("The Sound of the Mountain","Yasunari Kawabata",
    "", "288", "Japan", "5",
    "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain"),
("Zorba the Greek","Nikos Kazantzakis",
    "", "368", "Greece", "5",
    "https://en.wikipedia.org/wiki/Zorba_the_Greek"),
("Sons and Lovers","D. H. Lawrence",
    "", "432", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Sons_and_Lovers"),
("Independent People","Halldór Laxness",
    "", "470", "Iceland", "5",
    "https://en.wikipedia.org/wiki/Independent_People"),
("Poems","Giacomo Leopardi",
    "", "184", "Italy", "5",
    ""),
("The Golden Notebook","Doris Lessing",
    "", "688", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/The_Golden_Notebook"),
("Pippi Longstocking","Astrid Lindgren",
    "", "160", "Sweden", "5",
    "https://en.wikipedia.org/wiki/Pippi_Longstocking"),
("Diary of a Madman","Lu Xun",
    "", "389", "China", "5",
    "https://en.wikipedia.org/wiki/A_Madman%27s_Diary"),
("Children of Gebelawi","Naguib Mahfouz",
    "", "355", "Egypt", "5",
    "https://en.wikipedia.org/wiki/Children_of_Gebelawi"),
("Buddenbrooks","Thomas Mann",
    "", "736", "Germany", "5",
    "https://en.wikipedia.org/wiki/Buddenbrooks"),
("The Magic Mountain","Thomas Mann",
    "", "720", "Germany", "5",
    "https://en.wikipedia.org/wiki/The_Magic_Mountain"),
("Moby Dick","Herman Melville",
    "", "378", "United States", "5",
    "https://en.wikipedia.org/wiki/Moby-Dick"),
("Essays","Michel de Montaigne",
    "", "404", "France", "5",
    "https://en.wikipedia.org/wiki/Essays_(Montaigne)"),
("History","Elsa Morante",
    "", "600", "Italy", "5",
    "https://en.wikipedia.org/wiki/History_(novel)"),
("Beloved","Toni Morrison",
    "", "321", "United States", "5",
    "https://en.wikipedia.org/wiki/Beloved_(novel)"),
("The Tale of Genji","Murasaki Shikibu",
    "", "1360", "Japan", "5",
    "https://en.wikipedia.org/wiki/The_Tale_of_Genji"),
("The Man Without Qualities","Robert Musil",
    "", "365", "Austria", "5",
    "https://en.wikipedia.org/wiki/The_Man_Without_Qualities"),
("Lolita","Vladimir Nabokov",
    "", "317", "Russia/United States", "5",
    "https://en.wikipedia.org/wiki/Lolita"),
("Nineteen Eighty-Four","George Orwell",
    "", "272", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four"),
("Metamorphoses","Ovid",
    "", "576", "Roman Empire", "5",
    "https://en.wikipedia.org/wiki/Metamorphoses"),
("The Book of Disquiet","Fernando Pessoa",
    "", "272", "Portugal", "5",
    "https://en.wikipedia.org/wiki/The_Book_of_Disquiet"),
("Tales","Edgar Allan Poe",
    "", "842", "United States", "5",
    "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales"),
("In Search of Lost Time","Marcel Proust",
    "", "2408", "France", "5",
    "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time"),
("Gargantua and Pantagruel","François Rabelais",
    "", "623", "France", "5",
    "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel"),
("Pedro Páramo","Juan Rulfo",
    "", "124", "Mexico", "5",
    "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo"),
("The Masnavi","Rumi",
    "", "438", "Sultanate of Rum", "5",
    "https://en.wikipedia.org/wiki/Masnavi"),
("Midnight's Children","Salman Rushdie",
    "", "536", "United Kingdom, India", "5",
    "https://en.wikipedia.org/wiki/Midnight%27s_Children"),
("Bostan","Saadi",
    "", "298", "Persia, Persian Empire", "5",
    "https://en.wikipedia.org/wiki/Bustan_(book)"),
("Season of Migration to the North","Tayeb Salih",
    "", "139", "Sudan", "5",
    "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North"),
("Blindness","José Saramago",
    "", "352", "Portugal", "5",
    "https://en.wikipedia.org/wiki/Blindness_(novel)"),
("Hamlet","William Shakespeare",
    "", "432", "England", "5",
    "https://en.wikipedia.org/wiki/Hamlet"),
("King Lear","William Shakespeare",
    "", "384", "England", "5",
    "https://en.wikipedia.org/wiki/King_Lear"),
("Othello","William Shakespeare",
    "", "314", "England", "5",
    "https://en.wikipedia.org/wiki/Othello"),
("Oedipus the King","Sophocles",
    "", "88", "Greece", "5",
    "https://en.wikipedia.org/wiki/Oedipus_the_King"),
("The Red and the Black","Stendhal",
    "", "576", "France", "5",
    "https://en.wikipedia.org/wiki/The_Red_and_the_Black"),
("The Life And Opinions of Tristram Shandy","Laurence Sterne",
    "", "640", "England", "5",
    "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman"),
("Confessions of Zeno","Italo Svevo",
    "", "412", "Italy", "5",
    "https://en.wikipedia.org/wiki/Zeno%27s_Conscience"),
("Gulliver's Travels","Jonathan Swift",
    "", "178", "Ireland", "5",
    "https://en.wikipedia.org/wiki/Gulliver%27s_Travels"),
("War and Peace","Leo Tolstoy",
    "", "1296", "Russia", "5",
    "https://en.wikipedia.org/wiki/War_and_Peace"),
("Anna Karenina","Leo Tolstoy",
    "", "864", "Russia", "5",
    "https://en.wikipedia.org/wiki/Anna_Karenina"),
("The Death of Ivan Ilyich","Leo Tolstoy",
    "", "92", "Russia", "5",
    "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich"),
("The Adventures of Huckleberry Finn","Mark Twain",
    "", "224", "United States", "5",
    "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn"),
("Ramayana","Valmiki",
    "", "152", "India", "5",
    "https://en.wikipedia.org/wiki/Ramayana"),
("The Aeneid","Virgil",
    "", "442", "Roman Empire", "5",
    "https://en.wikipedia.org/wiki/Aeneid"),
("Mahabharata","Vyasa",
    "", "276", "India", "5",
    "https://en.wikipedia.org/wiki/Mahabharata"),
("Leaves of Grass","Walt Whitman",
    "", "152", "United States", "5",
    "https://en.wikipedia.org/wiki/Leaves_of_Grass"),
("Mrs Dalloway","Virginia Woolf",
    "", "216", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/Mrs_Dalloway"),
("To the Lighthouse","Virginia Woolf",
    "", "209", "United Kingdom", "5",
    "https://en.wikipedia.org/wiki/To_the_Lighthouse"),
("Memoirs of Hadrian","Marguerite Yourcenar",
    "", "408", "France/Belgium", "5",
    "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian");


CREATE TABLE IF NOT EXISTS accounts (id INT AUTO_INCREMENT, 
    username VARCHAR(50), 
    password VARCHAR(100), 
    PRIMARY KEY(id)
);

INSERT INTO accounts (username, password) VALUES 
    ("admin", "imadmin"),
    ("user", "imauser");