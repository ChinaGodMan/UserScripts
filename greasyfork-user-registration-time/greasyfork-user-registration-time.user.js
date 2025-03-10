// ==UserScript==
// @name              Display GreasyFork user registration time
// @name:ar           عرض وقت التسجيل لمستخدم GreasyFork وحدد التعليقات الضارة
// @name:bg           Показване на времето за регистрация на потребителя на мазнини и идентифицирайте злонамерени коментари
// @name:cs           Zobrazit dobu registrace uživatele Greasyfork a identifikujte škodlivé komentáře
// @name:da           Vis registreringstiden for GeasyFork -bruger og identificer ondsindede kommentarer
// @name:de           Zeigen Sie die Registrierungszeit des FreasyFork -Benutzers an und identifizieren Sie böswillige Kommentare
// @name:el           Εμφάνιση του χρόνου εγγραφής του χρήστη Greasyfork και προσδιορίστε κακόβουλα σχόλια
// @name:en           Display the registration time of Greasyfork user and identify malicious comments
// @name:eo           Montru la registran tempon de uzanto de GreasyFork kaj identigu malicajn komentojn
// @name:es           Muestra el tiempo de registro del usuario de GreasyFork e identifica comentarios maliciosos
// @name:fi           Näytä rasvaisen käyttäjän rekisteröintiaika ja tunnista haitalliset kommentit
// @name:fr           Afficher le temps d’inscription de l’utilisateur gras et identifier les commentaires malveillants
// @name:fr-CA        Afficher le temps d’inscription de l’utilisateur gras et identifier les commentaires malveillants
// @name:he           הצג את זמן ההרשמה של משתמש Greasyfork ומזהה הערות זדוניות
// @name:hr           Prikažite vrijeme registracije korisnika GASYFORK -a i identificirati zlonamjerne komentare
// @name:hu           Jelenítse meg a GreasyFork felhasználó regisztrációs idejét, és azonosítsa a rosszindulatú megjegyzéseket
// @name:id           Tampilkan waktu pendaftaran pengguna greasyfork dan identifikasi komentar jahat
// @name:it           Visualizza il tempo di registrazione dell’utente Greasyfork e identifica i commenti dannosi
// @name:ja           Greasyforkユーザーの登録時間を表示し、悪意のあるコメントを特定する
// @name:ka           აჩვენეთ Grasyfork მომხმარებლის რეგისტრაციის დრო და დაადგინეთ მავნე კომენტარები
// @name:ko           GreasyFork 사용자의 등록 시간을 표시하고 악의적 인 의견을 식별하십시오.
// @name:nb           Vis registreringstiden til Feasyfork -brukeren og identifiser ondsinnede kommentarer
// @name:nl           Geef de registratietijd van Greasyfork -gebruiker weer en identificeer kwaadaardige opmerkingen
// @name:pl           Wyświetl czas rejestracji użytkownika GreasyFork i zidentyfikuj złośliwe komentarze
// @name:pt-BR        Exibir o tempo de registro do usuário Greasyfork e identifique comentários maliciosos
// @name:ro           Afișați timpul de înregistrare al utilizatorului Greasyfork și identificați comentarii rău intenționate
// @name:ru           Показать время регистрации пользователя Geasyfork и определить вредоносные комментарии
// @name:sk           Zobraziť čas registrácie používateľa Greasyfork a identifikujte škodlivé komentáre
// @name:sr           Прикажите време регистрације корисника Греасифорк и идентификујте злонамерне коментаре
// @name:sv           Visa registreringstiden för Greasyfork -användare och identifiera skadliga kommentarer
// @name:th           แสดงเวลาลงทะเบียนของผู้ใช้ Greasyfork และระบุความคิดเห็นที่เป็นอันตราย
// @name:tr           Greasyfork kullanıcısının kayıt süresini görüntüleyin ve kötü niyetli yorumları belirleyin
// @name:ug           Greasyfork ئىشلەتكۈچىنىڭ تىزىملىكىنى كۆرسىتىش ۋە يامان غەرەزلىك باھالىرىنى ئېنىقلاڭ
// @name:uk           Відобразити час реєстрації користувача Greasyfork та визначити шкідливі коментарі
// @name:vi           Hiển thị thời gian đăng ký của người dùng Greasyfork và xác định nhận xét độc hại
// @name:zh           显示Greasyfork用户注册时间，识别恶意评论
// @name:zh-CN        显示Greasyfork用户注册时间，识别恶意评论
// @name:zh-HK        顯示Greasyfork用戶註冊時間，識別惡意評論
// @name:zh-SG        显示Greasyfork用户注册时间，识别恶意评论
// @name:zh-TW        顯示Greasyfork用戶註冊時間，識別惡意評論
// @description       If your script interferes with the interests of certain individuals, receiving malicious negative reviews is not surprising. Malicious negative reviews have two characteristics: First, the account is usually newly registered, and second, the review is given shortly after registration with little to no subsequent activity. This script retrieves the registration time of a GreasyFork user and displays it next to their username. If the time displayed next to the username is in the future, this user is likely to be a maliciously registered account.
// @description:ar    إذا كان البرنامج النصي الخاص بك يتداخل مع اهتمامات بعض الأشخاص ، فليس من المستغرب تلقي مراجعات سلبية ضارة. هناك خصائصان للمراجعات السلبية الخبيثة: إحداها هي أن الحساب عادة ما يكون مسجلاً حديثًا ، والآخر هو أنه سيتم تقديم المراجعات السلبية بعد التسجيل بفترة قصيرة ، ولن تكون هناك أنشطة متابعة بشكل أساسي. يحصل هذا البرنامج النصي على وقت التسجيل لمستخدم GreasyFork ويتم عرضه بجوار اسم المستخدم. إذا كان الوقت المعروض بجوار اسم المستخدم هو الوقت المستقبلي ، فمن المحتمل أن يكون المستخدم حسابًا ضارًا مسجلاً.
// @description:bg    Ако вашият сценарий пречи на интересите на някои хора, не е изненадващо да получавате злонамерени отрицателни отзиви. Има две характеристики на злонамерените отрицателни отзиви: единият е, че акаунтът обикновено е наскоро регистриран, а другият е, че отрицателните отзиви ще бъдат дадени малко след регистрацията и по принцип няма да има последващи дейности. Този скрипт получава времето за регистрация на потребителя на мазнини и се показва до потребителското име. Ако времето, показано до потребителското име, е бъдещото време, тогава потребителят вероятно ще бъде регистриран злонамерен акаунт.
// @description:cs    Pokud váš skript narušuje zájmy některých lidí, není divu, že obdrží škodlivé negativní recenze. Existují dvě charakteristiky škodlivých negativních recenzí: Jedním z nich je, že účet je obvykle nově registrován, a druhým je, že negativní přezkumy budou provedeny krátce po registraci a v podstatě nebudou existovat žádné následné činnosti. Tento skript získá registrační dobu uživatele Greasyfork a je zobrazen vedle uživatelského jména. Pokud je čas zobrazený vedle uživatelského jména budoucího času, pak je uživatel pravděpodobně zaregistrován škodlivý účet.
// @description:da    Hvis dit script forstyrrer nogle menneskers interesser, er det ikke overraskende at modtage ondsindede negative anmeldelser. Der er to egenskaber ved ondsindede negative anmeldelser: den ene er, at kontoen normalt er nyligt registreret, og den anden er, at de negative anmeldelser vil blive givet kort efter registrering, og der vil stort set ikke være nogen opfølgningsaktiviteter. Dette script får registreringstiden for GeasyFork -brugeren og vises ved siden af brugernavnet. Hvis den tid, der vises ved siden af brugernavnet, er den fremtidige tid, er brugeren sandsynligvis en ondsindet konto, der er registreret.
// @description:de    Wenn Ihr Skript die Interessen einiger Menschen beeinträchtigt, ist es nicht überraschend, böswillige negative Bewertungen zu erhalten. Es gibt zwei Merkmale von böswilligen negativen Bewertungen: Eine ist, dass das Konto normalerweise neu registriert ist, und das andere ist, dass die negativen Bewertungen kurz nach der Registrierung durchgeführt werden und es im Grunde keine Follow-up-Aktivitäten geben. Dieses Skript erhält die Registrierungszeit des FreasyFork -Benutzers und wird neben dem Benutzernamen angezeigt. Wenn die neben dem Benutzernamen angezeigte Zeit die zukünftige Zeit ist, ist der Benutzer wahrscheinlich ein böswilliges Konto, das registriert ist.
// @description:el    Εάν το σενάριό σας παρεμβαίνει στα συμφέροντα ορισμένων ανθρώπων, δεν προκαλεί έκπληξη το γεγονός ότι λαμβάνετε κακόβουλες αρνητικές κριτικές. Υπάρχουν δύο χαρακτηριστικά των κακόβουλων αρνητικών αναθεωρήσεων: το ένα είναι ότι ο λογαριασμός είναι συνήθως πρόσφατα εγγεγραμμένος και ο άλλος είναι ότι οι αρνητικές αναθεωρήσεις θα δοθούν λίγο μετά την εγγραφή και δεν θα υπάρξουν βασικά δραστηριότητες παρακολούθησης. Αυτό το σενάριο παίρνει τον χρόνο εγγραφής του χρήστη GreasyFork και εμφανίζεται δίπλα στο όνομα χρήστη. Εάν ο χρόνος που εμφανίζεται δίπλα στο όνομα χρήστη είναι η μελλοντική ώρα, τότε ο χρήστης είναι πιθανό να είναι ένας κακόβουλος λογαριασμός που έχει καταχωρηθεί.
// @description:en    If your script interferes with the interests of some people, it is not surprising to receive malicious negative reviews. There are two characteristics of malicious negative reviews: one is that the account is usually newly registered, and the other is that the negative reviews will be given shortly after registration, and there will be basically no follow-up activities. This script gets the registration time of the greasyfork user and is displayed next to the user name. If the time displayed next to the user name is the future time, then the user is likely to be a malicious account registered.
// @description:eo    Se via skripto enmiksiĝas kun la interesoj de iuj homoj, ne mirigas ricevi malicajn negativajn recenzojn. Estas du trajtoj de malicaj negativaj recenzoj: unu estas, ke la konto kutime estas nove registrita, kaj la alia estas, ke la negativaj recenzoj estos donitaj baldaŭ post registrado, kaj esence ne estos sekvaj agadoj. Ĉi tiu skripto ricevas la registradan tempon de la uzanto de GreasyFork kaj estas montrita apud la uzantnomo. Se la tempo montrita apud la uzantnomo estas la estonta tempo, tiam la uzanto verŝajne estas malica konto registrita.
// @description:es    Si su guión interfiere con los intereses de algunas personas, no es sorprendente recibir críticas negativas maliciosas. Hay dos características de las revisiones negativas maliciosas: una es que la cuenta generalmente está recién registrada, y la otra es que las revisiones negativas se darán poco después del registro, y básicamente no habrá actividades de seguimiento. Este script obtiene el tiempo de registro del usuario de GreaseSyFork y se muestra junto al nombre de usuario. Si el tiempo que se muestra junto al nombre de usuario es el tiempo futuro, es probable que el usuario sea una cuenta maliciosa registrada.
// @description:fi    Jos käsikirjoituksesi häiritsee joidenkin ihmisten etuja, ei ole yllättävää saada haitallisia kielteisiä arvosteluja. Haitallisissa negatiivisissa arvosteluissa on kaksi ominaisuutta: yksi on, että tili on yleensä äskettäin rekisteröity, ja toinen on, että negatiiviset arvostelut annetaan pian rekisteröinnin jälkeen, eikä periaatteessa ole seurantatoimintaa. Tämä komentosarja saa rasvaisen käyttäjän rekisteröintiajan ja näkyy käyttäjänimen vieressä. Jos käyttäjänimen vieressä näkyvä aika on tuleva aika, käyttäjä on todennäköisesti haitallinen tili.
// @description:fr    Si votre script interfère avec les intérêts de certaines personnes, il n’est pas surprenant de recevoir des critiques négatives malveillantes. Il existe deux caractéristiques des critiques négatives malveillantes: l’une est que le compte est généralement nouvellement enregistré, et l’autre est que les revues négatives seront données peu de temps après l’inscription, et il n’y aura essentiellement aucune activité de suivi. Ce script obtient le temps d’enregistrement de l’utilisateur grasfork et s’affiche à côté du nom d’utilisateur. Si l’heure affichée à côté du nom d’utilisateur est l’heure future, l’utilisateur est probablement un compte malveillant enregistré.
// @description:fr-CA Si votre script interfère avec les intérêts de certaines personnes, il n’est pas surprenant de recevoir des critiques négatives malveillantes. Il existe deux caractéristiques des critiques négatives malveillantes: l’une est que le compte est généralement nouvellement enregistré, et l’autre est que les revues négatives seront données peu de temps après l’inscription, et il n’y aura essentiellement aucune activité de suivi. Ce script obtient le temps d’enregistrement de l’utilisateur grasfork et s’affiche à côté du nom d’utilisateur. Si l’heure affichée à côté du nom d’utilisateur est l’heure future, l’utilisateur est probablement un compte malveillant enregistré.
// @description:he    אם התסריט שלך מפריע לאינטרסים של אנשים מסוימים, אין זה מפתיע לקבל ביקורות שליליות זדוניות. ישנם שני מאפיינים של ביקורות שליליות זדוניות: האחת היא שהחשבון בדרך כלל רשום לאחרונה, והשני הוא שהביקורות השליליות יינתנו זמן קצר לאחר ההרשמה, ובעצם לא יהיו פעילויות מעקב. סקריפט זה מקבל את זמן ההרשמה של המשתמש Greasyfork ומוצג לצד שם המשתמש. אם הזמן המוצג לצד שם המשתמש הוא הזמן העתידי, סביר להניח שהמשתמש יהיה חשבון זדוני שנרשם.
// @description:hr    Ako vaša skripta ometa interese nekih ljudi, nije iznenađujuće primiti zlonamjerne negativne kritike. Postoje dvije karakteristike zlonamjernih negativnih recenzija: jedno je da je račun obično novo registrirani, a drugi je da će se negativni pregledi dati ubrzo nakon registracije, a u osnovi neće biti praćenja. Ova skripta dobiva vrijeme registracije korisnika GreasyFork i prikazuje se pored korisničkog imena. Ako je vrijeme prikazano pored korisničkog imena buduće vrijeme, tada će korisnik vjerojatno biti registriran zlonamjerni račun.
// @description:hu    Ha a szkript zavarja néhány ember érdekeit, akkor nem meglepő, hogy rosszindulatú negatív véleményeket kap. A rosszindulatú negatív vélemények két jellemzője van: az egyik az, hogy a számla általában újonnan regisztrált, a másik pedig az, hogy a negatív véleményeket röviddel a regisztráció után adják meg, és alapvetően nincs nyomon követési tevékenység. Ez a szkript megkapja a GreasyFork felhasználó regisztrációs idejét, és a felhasználónév mellett jelenik meg. Ha a felhasználói név mellett megjelenített idő a jövőbeni idő, akkor a felhasználó valószínűleg rosszindulatú fiókot regisztrált.
// @description:id    Jika skrip Anda mengganggu minat beberapa orang, tidak mengherankan untuk menerima ulasan negatif jahat. Ada dua karakteristik ulasan negatif jahat: satu adalah bahwa akun biasanya baru terdaftar, dan yang lainnya adalah bahwa ulasan negatif akan diberikan segera setelah pendaftaran, dan pada dasarnya tidak akan ada kegiatan tindak lanjut. Skrip ini mendapatkan waktu pendaftaran pengguna Greasyfork dan ditampilkan di sebelah nama pengguna. Jika waktu yang ditampilkan di sebelah nama pengguna adalah waktu mendatang, maka pengguna cenderung menjadi akun jahat yang terdaftar.
// @description:it    Se la tua sceneggiatura interferisce con gli interessi di alcune persone, non è sorprendente ricevere recensioni negative dannose. Esistono due caratteristiche di recensioni negative dannose: una è che l’account è di solito appena registrato e l’altro è che le recensioni negative saranno fornite poco dopo la registrazione e non ci saranno praticamente attività di follow-up. Questo script ottiene il tempo di registrazione dell’utente Greasyfork e viene visualizzato accanto al nome utente. Se il tempo visualizzato accanto al nome utente è il momento futuro, è probabile che l’utente sia un account malizioso registrato.
// @description:ja    スクリプトが一部の人々の利益を妨げている場合、悪意のある否定的なレビューを受け取ることは驚くことではありません。悪意のある否定的なレビューには2つの特徴があります。1つは通常、アカウントが新しく登録されていることであり、もう1つは登録後まもなく否定的なレビューが与えられ、基本的にフォローアップ活動はないということです。このスクリプトは、Greasyforkユーザーの登録時間を取得し、ユーザー名の横に表示されます。ユーザー名の横に表示される時間が将来の時間である場合、ユーザーは登録されている悪意のあるアカウントになる可能性があります。
// @description:ka    თუ თქვენი სკრიპტი ერევა ზოგიერთი ადამიანის ინტერესებში, გასაკვირი არ არის, რომ მიიღოთ მავნე უარყოფითი მიმოხილვები. მავნე ნეგატიური მიმოხილვების ორი მახასიათებელი არსებობს: ერთი ის არის, რომ ანგარიში ჩვეულებრივ ახლად რეგისტრირებულია, მეორე კი ის, რომ უარყოფითი მიმოხილვები რეგისტრაციიდან მალევე მიიღება, და ძირითადად არ იქნება შემდგომი საქმიანობა. ეს სკრიპტი იღებს Grasyfork მომხმარებლის რეგისტრაციის დროს და ნაჩვენებია მომხმარებლის სახელის გვერდით. თუ მომხმარებლის სახელის გვერდით ნაჩვენები დრო მომავალი დროა, მაშინ მომხმარებელი, სავარაუდოდ, რეგისტრირებულია მავნე ანგარიშით.
// @description:ko    스크립트가 일부 사람들의 관심사를 방해한다면 악의적 인 부정적인 리뷰를받는 것은 놀라운 일이 아닙니다. 악의적 인 부정적인 검토에는 두 가지 특성이 있습니다. 하나는 계정이 일반적으로 새로 등록되어 있고 다른 하나는 등록 직후에 부정적인 검토가 제공되며 기본적으로 후속 활동이 없다는 것입니다. 이 스크립트는 Greasyfork 사용자의 등록 시간을 가져오고 사용자 이름 옆에 표시됩니다. 사용자 이름 옆에 표시되는 시간이 미래의 시간 인 경우 사용자는 악의적 인 계정 일 가능성이 높습니다.
// @description:nb    Hvis skriptet ditt forstyrrer interessene til noen mennesker, er det ikke overraskende å motta ondsinnede negative anmeldelser. Det er to kjennetegn ved ondsinnede negative anmeldelser: den ene er at kontoen vanligvis er ny registrert, og den andre er at de negative vurderingene vil bli gitt kort tid etter registrering, og det vil i utgangspunktet ikke være noen oppfølgingsaktiviteter. Dette skriptet får registreringstiden til Greasyfork -brukeren og vises ved siden av brukernavnet. Hvis tiden som vises ved siden av brukernavnet er fremtidig tid, vil brukeren sannsynligvis være en ondsinnet konto registrert.
// @description:nl    Als uw script de belangen van sommige mensen belemmert, is het niet verwonderlijk om kwaadaardige negatieve beoordelingen te ontvangen. Er zijn twee kenmerken van kwaadaardige negatieve beoordelingen: de ene is dat het account meestal nieuw is geregistreerd, en de andere is dat de negatieve beoordelingen kort na de registratie worden gegeven, en er zullen in feite geen vervolgactiviteiten zijn. Dit script krijgt de registratietijd van de GreasyFork -gebruiker en wordt naast de gebruikersnaam weergegeven. Als de tijd die naast de gebruikersnaam wordt weergegeven, de toekomstige tijd is, is de gebruiker waarschijnlijk een kwaadaardig account dat is geregistreerd.
// @description:pl    Jeśli twój skrypt zakłóca interesy niektórych osób, nie jest zaskakujące, że otrzymywanie złośliwych negatywnych recenzji. Istnieją dwie cechy złośliwych negatywnych recenzji: jeden jest taki, że konto jest zwykle nowo zarejestrowane, a drugie to, że negatywne recenzje zostaną przekazane wkrótce po rejestracji i w zasadzie nie będzie żadnych działań kontrolnych. Ten skrypt otrzymuje czas rejestracji użytkownika GREASYFork i jest wyświetlany obok nazwy użytkownika. Jeśli czas wyświetlany obok nazwy użytkownika to czas przyszłego, wówczas użytkownik prawdopodobnie będzie zarejestrowanym złośliwym kontem.
// @description:pt-BR Se o seu script interferir nos interesses de algumas pessoas, não é surpreendente receber críticas negativas maliciosas. Existem duas características de críticas negativas maliciosas: uma é que a conta geralmente é registrada recentemente e a outra é que as críticas negativas serão dadas logo após o registro, e basicamente não haverá atividades de acompanhamento. Este script recebe o tempo de registro do usuário Greasyfork e é exibido ao lado do nome de usuário. Se o tempo exibido ao lado do nome do usuário for o horário futuro, é provável que o usuário seja uma conta maliciosa registrada.
// @description:ro    Dacă scriptul dvs. interferează cu interesele unor oameni, nu este surprinzător să primiți recenzii negative rău intenționate. Există două caracteristici ale recenziilor negative rău intenționate: una este că contul este de obicei recent înregistrat, iar celălalt este că recenziile negative vor fi date la scurt timp după înregistrare, iar practic nu vor exista activități de urmărire. Acest script primește timpul de înregistrare al utilizatorului Greasyfork și este afișat lângă numele de utilizator. Dacă timpul afișat lângă numele de utilizator este timpul viitor, atunci utilizatorul este probabil să fie înregistrat un cont rău intenționat.
// @description:ru    Если ваш сценарий мешает интересам некоторых людей, неудивительно получать вредоносные негативные отзывы. Есть две характеристики вредоносных негативных отзывов: одна из них заключается в том, что учетная запись обычно зарегистрирована, а другая заключается в том, что негативные отзывы будут даны вскоре после регистрации, и в основном не будет последующих действий. Этот сценарий получает время регистрации пользователя Greasyfork и отображается рядом с именем пользователя. Если время, отображаемое рядом с именем пользователя, является будущим временем, то пользователь, вероятно, будет зарегистрирована вредоносной учетной записи.
// @description:sk    Ak váš scenár narúša záujmy niektorých ľudí, nie je prekvapujúce, že dostávajú škodlivé negatívne recenzie. Existujú dve charakteristiky škodlivých negatívnych recenzií: Jedným z nich je, že účet je zvyčajne novo zaregistrovaný a druhým je, že negatívne recenzie sa budú poskytovať krátko po registrácii a v podstate nebudú existovať žiadne následné činnosti. Tento skript získa čas registrácie používateľa Greasyfork a zobrazuje sa vedľa mena používateľa. Ak je čas zobrazený vedľa mena používateľa budúci čas, potom bude užívateľ pravdepodobne zaregistrovaný škodlivým účtom.
// @description:sr    Ако ваша сценариј омета интересе неких људи, то није изненађујуће примање злонамерних негативних прегледа. Постоје две карактеристике злонамерних негативних прегледа: Једна је да је рачун обично ново регистровано, а други је да ће се негативни прегледи дати убрзо након регистрације и у основи неће бити праћења. Ова скрипта добија време регистрације корисника Греасифорк и приказује се поред корисничког имена. Ако је време приказано поред корисничког имена будући време, тада ће корисник вероватно бити регистровани злонамерни налог.
// @description:sv    Om ditt skript stör vissa människors intressen är det inte förvånande att få skadliga negativa recensioner. Det finns två egenskaper hos skadliga negativa recensioner: den ena är att kontot vanligtvis är nyligen registrerat, och det andra är att de negativa recensionerna kommer att ges kort efter registrering, och det kommer i princip inte att bli någon uppföljningsaktivitet. Det här skriptet får registreringstiden för Greasyfork -användaren och visas bredvid användarnamnet. Om den tid som visas bredvid användarnamnet är den framtida tiden, kommer användaren sannolikt att vara ett skadligt konto registrerat.
// @description:th    หากสคริปต์ของคุณรบกวนความสนใจของบางคนก็ไม่น่าแปลกใจที่จะได้รับบทวิจารณ์เชิงลบที่เป็นอันตราย มีสองลักษณะของการตรวจสอบเชิงลบที่เป็นอันตราย: หนึ่งคือบัญชีมักจะลงทะเบียนใหม่และอื่น ๆ คือการทบทวนเชิงลบจะได้รับหลังจากการลงทะเบียนไม่นานและโดยทั่วไปจะไม่มีกิจกรรมติดตาม สคริปต์นี้ได้รับเวลาลงทะเบียนของผู้ใช้ Greasyfork และจะปรากฏขึ้นถัดจากชื่อผู้ใช้ หากเวลาที่แสดงถัดจากชื่อผู้ใช้คือเวลาในอนาคตผู้ใช้ก็น่าจะเป็นบัญชีที่เป็นอันตรายที่ลงทะเบียน
// @description:tr    Komut dosyanız bazı insanların çıkarlarına müdahale ederse, kötü niyetli olumsuz incelemeler almak şaşırtıcı değildir. Kötü niyetli olumsuz incelemelerin iki özelliği vardır: biri hesabın genellikle yeni kayıtlı olması, diğeri de olumsuz incelemelerin kayıttan kısa bir süre sonra verileceği ve temel olarak takip faaliyeti olmayacaktır. Bu komut dosyası, Greasyfork kullanıcısının kayıt süresini alır ve kullanıcı adının yanında görüntülenir. Kullanıcı adının yanında görüntülenen zaman gelecek zamansa, kullanıcının kayıtlı bir kötü amaçlı hesap olması muhtemeldir.
// @description:ug    ئەگەر سىزنىڭ قوليازما بەزى كىشىلەرنىڭ مەنپەئەتىگە دەخلى-تەرۇز قىلغان بولسا, يامان غەرەزلىك باھانى قوبۇل قىلغىلى ئەمەس. يامان غەرەزلىك سەلبىي باھانىڭ ئىككى ئالاھىدىلىكى: بىرى يېڭىدىن تىزىمغا ئالدۇرغان بولۇپ, بۇلار يېڭىدىن كېيىن, تىزىمغا ئالدۇرغان بۇقۇم سوقۇلانمايدۇ, ئاساسەن تۆۋەندىكى پائالىيەتلەر بولىدۇ, ئاساسىي جەھەتتىن پائالىيەت بولمايدۇ. بۇ قوليازما Greasyfork ئىشلەتكۈچىنىڭ تىزىملاتقان ۋاقتىغا ئېرىشىدۇ ۋە ئابونت نامىنىڭ يېنىدا كۆرسىتىلىدۇ. ئەگەر ئىشلەتكۈچى ئىسمىنىڭ يېنىدا كۆرسىتىلگەن ۋاقىت كەلگۈسى ۋاقىت, ئۇنداقتا ئىشلەتكۈچى بەلكىم تىزىملاتقان يامان غەرەزلىك ھېسابات بولۇشى مۇمكىن.
// @description:uk    Якщо ваш сценарій заважає інтересам деяких людей, не дивно отримувати зловмисні негативні відгуки. Існує дві характеристики зловмисних негативних відгуків: одна полягає в тому, що обліковий запис зазвичай нещодавно зареєстрований, а інший полягає в тому, що негативні відгуки будуть надані незабаром після реєстрації, і в основному не буде подальших заходів. Цей сценарій отримує час реєстрації користувача Greasyfork і відображається поруч із іменем користувача. Якщо час, що відображається поруч із іменем користувача, - це майбутній час, то користувач, ймовірно, буде зареєстрованим шкідливим обліковим записом.
// @description:vi    Nếu kịch bản của bạn can thiệp vào lợi ích của một số người, không có gì đáng ngạc nhiên khi nhận được các đánh giá tiêu cực độc hại. Có hai đặc điểm của các đánh giá tiêu cực độc hại: Một là tài khoản thường được đăng ký mới và một đặc điểm khác là các đánh giá tiêu cực sẽ được đưa ra ngay sau khi đăng ký và về cơ bản sẽ không có hoạt động tiếp theo. Kịch bản này có thời gian đăng ký của người dùng Greasyfork và được hiển thị bên cạnh tên người dùng. Nếu thời gian hiển thị bên cạnh tên người dùng là thời gian trong tương lai, thì người dùng có thể sẽ là một tài khoản độc hại được đăng ký.
// @description:zh    如果你的脚本干涉了某些人的利益，收到恶意差评并不意外。恶意差评有两个特点，一是账号通常新注册，二是注册后不久就会给差评，且基本不会有后续活动。本脚本获取greasyfork用户注册时间，并显示在用户名旁边。如果用户名旁边显示的时间是未来的时间，那么这个用户很可能是恶意注册的账号。
// @description:zh-CN 如果你的脚本干涉了某些人的利益，收到恶意差评并不意外。恶意差评有两个特点，一是账号通常新注册，二是注册后不久就会给差评，且基本不会有后续活动。本脚本获取greasyfork用户注册时间，并显示在用户名旁边。如果用户名旁边显示的时间是未来的时间，那么这个用户很可能是恶意注册的账号。
// @description:zh-HK 如果你的腳本干涉了某些人的利益，收到惡意差評並不意外。惡意差評有兩個特點，一是賬號通常新註冊，二是註冊後不久就會給差評，且基本不會有後續活動。本腳本獲取greasyfork用戶註冊時間，並顯示在用戶名旁邊。如果用戶名旁邊顯示的時間是未來的時間，那麼這個用戶很可能是惡意註冊的賬號。
// @description:zh-SG 如果你的脚本干涉了某些人的利益，收到恶意差评并不意外。恶意差评有两个特点，一是账号通常新注册，二是注册后不久就会给差评，且基本不会有后续活动。本脚本获取greasyfork用户注册时间，并显示在用户名旁边。如果用户名旁边显示的时间是未来的时间，那么这个用户很可能是恶意注册的账号。
// @description:zh-TW 如果你的腳本干涉了某些人的利益，收到惡意差評並不意外。惡意差評有兩個特點，一是賬號通常新註冊，二是註冊後不久就會給差評，且基本不會有後續活動。本腳本獲取greasyfork用戶註冊時間，並顯示在用戶名旁邊。如果用戶名旁邊顯示的時間是未來的時間，那麼這個用戶很可能是惡意註冊的賬號。
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_xmlhttpRequest
// @match             *://greasyfork.org/*
// @match             *://sleazyfork.org/*
// @require           https://code.jquery.com/jquery-3.7.1.min.js
// @author            yysk.org,人民的勤务员 <china.qinwuyuan@gmail.com>
// @namespace         https://github.com/ChinaGodMan/UserScripts
// @supportURL        https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL       https://github.com/ChinaGodMan/UserScripts
// @license           MIT
// @icon              https://raw.githubusercontent.com/ChinaGodMan/UserScriptsHistory/main/scriptsIcon/greasyfork-webhook-sync-enhanced.svg
// @compatible        chrome
// @compatible        firefox
// @compatible        edge
// @compatible        opera
// @compatible        safari
// @compatible        kiwi
// @version           2025.03.10.0959
// @created           2025-03-10 09:59:11
// @modified          2025-03-10 09:59:11
// ==/UserScript==
/**
 * File: greasyfork-user-registration-time.user.js
 * Project: UserScripts
 * File Created: 2025/03/10,Monday 09:59:36
 * Author: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * Last Modified: 2025/03/10,Monday 12:34:06
 * Modified By: 人民的勤务员@ChinaGodMan (china.qinwuyuan@gmail.com)
 * -----
 * License: MIT License
 * Copyright © 2024 - 2025 ChinaGodMan,Inc
 */


(function () {
    'use strict'
    const interval = 3000
    const absoluteTime = 'relative-time1'//随便修改个类名,显示精确时间.比如relative-time1
    var lang = document.querySelector('html').lang.toLowerCase() || navigator.language.toLowerCase()

    if (!['en', 'zh-cn', 'zh-tw', 'ja', 'ru', 'kr'].includes(lang)) lang = 'en'
    const i18n = {
        en: {
            title: 'Registration time',
            prefix: 'R'
        },
        'zh-cn': {
            title: '注册时间',
            prefix: '注'
        },
        'zh-tw': {
            title: '註冊時間',
            prefix: '注'
        },
        ja: {
            title: '登録時間',
            prefix: 'R'
        },
        ru: {
            title: 'время регистрации',
            prefix: 'R'
        },
        kr: {
            title: '등록 시간',
            prefix: 'R'
        }
    }
    const title = i18n[lang].title
    const prefix = i18n[lang].prefix

    function pad(s, d) {
        s = `000000${s}`
        return s.substring(s.length - d)
    }

    const formatUFn = (dt) => {
        return `${dt.getFullYear()}.${pad(dt.getMonth() + 1, 2)}.${pad(dt.getDate(), 2)} ${pad(dt.getHours(), 2)}:${pad(dt.getMinutes(), 2)}:${pad(dt.getSeconds(), 2)}`
    }

    const formatFrFn = (dt) => {
        return `${pad(dt.getDate(), 2)}.${pad(dt.getMonth() + 1, 2)}.${dt.getFullYear()} ${pad(dt.getHours(), 2)}:${pad(dt.getMinutes(), 2)}:${pad(dt.getSeconds(), 2)}`
    }

    function formatTime(utcTime, lang = 'en') {
        const dt = new Date(utcTime)

        let formatFn = (lang === 'fr' || lang.startsWith('fr-')) ? formatFrFn : formatUFn

        return formatFn(dt)
    }



    async function genregtime(uid) {
        if (GM_getValue(uid) !== undefined && GM_getValue(uid) !== null) {
            return GM_getValue(uid)
        }
        const user_api = `https://api.greasyfork.org/users/${uid}.json`
        var created_at
        try {
            const response = await fetch(user_api)
            const data = await response.json()
            created_at = data.created_at
            console.log('🔍 ~ created_at:', created_at)
        } catch (error) {
            console.error('请求失败:', error)
        }
        GM_setValue(uid, created_at)
        return created_at
    }
    function gensnippet(regtime, uid) {
        return `<span class="regtime" style="margin-left: 10px; font-weight: bold; color: red;" title="uid ${uid} ${title}">${prefix} <${absoluteTime} datetime="${regtime}+00:00" prefix="">${regtime}</${absoluteTime}></span>`
    }
    let isProcessing = false
    function run() {
        if (isProcessing) return
        isProcessing = true
        var maxuid = 0
        const uids = document.documentElement.innerHTML.matchAll(/\/users\/(\d+)/g)
        for (const uid of uids) {
            if (parseInt(uid[1]) > maxuid) maxuid = parseInt(uid[1])
        }
        if (window.location.href.match(/(greasyfork|sleazyfork).org\/\w+-\w+\/users\/\d+(-[^/]*)?$/) && jQuery('section#about-user > span.regtime').length === 0) {
            let uid = jQuery('section#about-user > a.report-link').attr('href').match(/item_id=(\d+)/)[1]
            genregtime(uid).then(regtime => {
                regtime = formatTime(regtime, lang)
                jQuery('section#about-user > h2').after(gensnippet(regtime, uid))
            })

        }
        jQuery('a.user-link, dd.script-list-author > span > a, dd.script-show-author > span > a, table.log-table > tbody > tr > td > a, i:contains(\'Deleted user \')').each(function (i, el) {
            var lastele = jQuery(el).parent().children().last()
            if (lastele.attr('class') === 'regtime' || lastele.attr('class') === 'small-btn') return
            var button = jQuery('<button>').text(i18n[lang].prefix).addClass('small-btn')
            var m = (el.tagName === 'A') ? jQuery(el).attr('href').match(/\/users\/(\d+)/) : jQuery(el).text().match(/Deleted user (\d+)/)
            if (!m) return

            button.on('click', function () {
                isProcessing = true
                genregtime(m[1]).then(regtime => {
                    regtime = formatTime(regtime, lang)
                    lastele.after(gensnippet(regtime, m[1]))
                })
                button.remove()
            })

            // 如果存在时间就直接插入,不存在显示按钮
            if (GM_getValue(m[1]) !== undefined && GM_getValue(m[1]) !== null) {
                lastele.after(gensnippet(formatTime(GM_getValue(m[1]), lang), m[1]))
            } else {
                lastele.after(button)
            }

        })
        isProcessing = false

        return run
    }
    setInterval(run(), interval)
})()
