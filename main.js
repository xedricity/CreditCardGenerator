// You can insert any kind of text or code between opening and closing <div> tag below. Watch on the quotation - single quatations ' can only be
// placed on the start and the end of the string. If you need to use single quotations you must put  \  character before any of  '
// without any spaces so it looks like    id=\'something\'

var nameList = ['James' , 'Christopher' , 'Jackson' , 'Jayden' , 'Etha' , 'Tyler' , 'Aiden' , 'Joseph' , 'Noah' , 'Matthew' , 'Jose' , 'Jes' , 'William' , 'Landon' , 'Hunter' ,  'David'  , 'Andrew' ,  'Jos' ,
'Gabriel' , 'Joshua' , 'Daniel' , 'Anthony' , 'Elijah' , 'Michael' , 'Ryan' , 'Ava', 'Anna' , 'Hannah' , 'Alyssa' , 'Addison' , 'Brooklyn' , 'Natalie' , 'Samantha' , 'Julia' , 'Grace' , 'Alexis' ,
'Ashley' , 'Chloe' , 'Katherine' , 'Elizabeth' , 'Isabella' , 'Sophia' , 'Emily' , 'Emma' , 'Madison' , 'Olivia' , 'Abigail' , 'Mia' , 'Brianna',"Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];

var secondNameList = [
'Abbott',
'Acevedo',
'Acosta',
'Adams',
'Adkins',
'Aguilar',
'Aguirre',
'Albert',
'Alexander',
'Alford',
'Allen',
'Allison',
'Alston',
'Alvarado',
'Alvarez',
'Anderson',
'Andrews',
'Anthony',
'Armstrong',
'Arnold',
'Ashley',
'Atkins',
'Atkinson',
'Austin',
'Avery',
'Avila',
'Ayala',
'Ayers',
'Bailey',
'Baird',
'Baker',
'Baldwin',
'Ball',
'Ballard',
'Banks',
'Barber',
'Barker',
'Barlow',
'Barnes',
'Barnett',
'Barr',
'Barrera',
'Barrett',
'Barron',
'Barry',
'Bartlett',
'Barton',
'Bass',
'Bates',
'Battle',
'Bauer',
'Baxter',
'Beach',
'Bean',
'Beard',
'Beasley',
'Beck',
'Becker',
'Bell',
'Bender',
'Benjamin',
'Bennett',
'Benson',
'Bentley',
'Benton',
'Berg',
'Berger',
'Bernard',
'Berry',
'Best',
'Bird',
'Bishop',
'Black',
'Blackburn',
'Blackwell',
'Blair',
'Blake',
'Blanchard',
'Blankenship',
'Blevins',
'Bolton',
'Bond',
'Bonner',
'Booker',
'Boone',
'Booth',
'Bowen',
'Bowers',
'Bowman',
'Boyd',
'Boyer',
'Boyle',
'Bradford',
'Bradley',
'Bradshaw',
'Brady',
'Branch',
'Bray',
'Brennan',
'Brewer',
'Bridges',
'Briggs',
'Bright',
'Britt',
'Brock',
'Brooks',
'Brown',
'Browning',
'Bruce',
'Bryan',
'Bryant',
'Buchanan',
'Buck',
'Buckley',
'Buckner',
'Bullock',
'Burch',
'Burgess',
'Burke',
'Burks',
'Burnett',
'Burns',
'Burris',
'Burt',
'Burton',
'Bush',
'Butler',
'Byers',
'Byrd',
'Cabrera',
'Cain',
'Calderon',
'Caldwell',
'Calhoun',
'Callahan',
'Camacho',
'Cameron',
'Campbell',
'Campos',
'Cannon',
'Cantrell',
'Cantu',
'Cardenas',
'Carey',
'Carlson',
'Carney',
'Carpenter',
'Carr',
'Carrillo',
'Carroll',
'Carson',
'Carter',
'Carver',
'Case',
'Casey',
'Cash',
'Castaneda',
'Castillo',
'Castro',
'Cervantes',
'Chambers',
'Chan',
'Chandler',
'Chaney',
'Chang',
'Chapman',
'Charles',
'Chase',
'Chavez',
'Chen',
'Cherry',
'Christensen',
'Christian',
'Church',
'Clark',
'Clarke',
'Clay',
'Clayton',
'Clements',
'Clemons',
'Cleveland',
'Cline',
'Cobb',
'Cochran',
'Coffey',
'Cohen',
'Cole',
'Coleman',
'Collier',
'Collins',
'Colon',
'Combs',
'Compton',
'Conley',
'Conner',
'Conrad',
'Contreras',
'Conway',
'Cook',
'Cooke',
'Cooley',
'Cooper',
'Copeland',
'Cortez',
'Cote',
'Cotton',
'Cox',
'Craft',
'Craig',
'Crane',
'Crawford',
'Crosby',
'Cross',
'Cruz',
'Cummings',
'Cunningham',
'Curry',
'Curtis',
'Dale',
'Dalton',
'Daniel',
'Daniels',
'Daugherty',
'Davenport',
'David',
'Davidson',
'Davis',
'Dawson',
'Day',
'Dean',
'Decker',
'Dejesus',
'Delacruz',
'Delaney',
'Deleon',
'Delgado',
'Dennis',
'Diaz',
'Dickerson',
'Dickson',
'Dillard',
'Dillon',
'Dixon',
'Dodson',
'Dominguez',
'Donaldson',
'Donovan',
'Dorsey',
'Dotson',
'Douglas',
'Downs',
'Doyle',
'Drake',
'Dudley',
'Duffy',
'Duke',
'Duncan',
'Dunlap',
'Dunn',
'Duran',
'Durham',
'Dyer',
'Eaton',
'Edwards',
'Elliott',
'Ellis',
'Ellison',
'Emerson',
'England',
'English',
'Erickson',
'Espinoza',
'Estes',
'Estrada',
'Evans',
'Everett',
'Ewing',
'Farley',
'Farmer',
'Farrell',
'Faulkner',
'Ferguson',
'Fernandez',
'Ferrell',
'Fields',
'Figueroa',
'Finch',
'Finley',
'Fischer',
'Fisher',
'Fitzgerald',
'Fitzpatrick',
'Fleming',
'Fletcher',
'Flores',
'Flowers',
'Floyd',
'Flynn',
'Foley',
'Forbes',
'Ford',
'Foreman',
'Foster',
'Fowler',
'Fox',
'Francis',
'Franco',
'Frank',
'Franklin',
'Franks',
'Frazier',
'Frederick',
'Freeman',
'French',
'Frost',
'Fry',
'Frye',
'Fuentes',
'Fuller',
'Fulton',
'Gaines',
'Gallagher',
'Gallegos',
'Galloway',
'Gamble',
'Garcia',
'Gardner',
'Garner',
'Garrett',
'Garrison',
'Garza',
'Gates',
'Gay',
'Gentry',
'George',
'Gibbs',
'Gibson',
'Gilbert',
'Giles',
'Gill',
'Gillespie',
'Gilliam',
'Gilmore',
'Glass',
'Glenn',
'Glover',
'Goff',
'Golden',
'Gomez',
'Gonzales',
'Gonzalez',
'Good',
'Goodman',
'Goodwin',
'Gordon',
'Gould',
'Graham',
'Grant',
'Graves',
'Gray',
'Green',
'Greene',
'Greer',
'Gregory',
'Griffin',
'Griffith',
'Grimes',
'Gross',
'Guerra',
'Guerrero',
'Guthrie',
'Gutierrez',
'Guy',
'Guzman',
'Hahn',
'Hale',
'Haley',
'Hall',
'Hamilton',
'Hammond',
'Hampton',
'Hancock',
'Haney',
'Hansen',
'Hanson',
'Hardin',
'Harding',
'Hardy',
'Harmon',
'Harper',
'Harrell',
'Harrington',
'Harris',
'Harrison',
'Hart',
'Hartman',
'Harvey',
'Hatfield',
'Hawkins',
'Hayden',
'Hayes',
'Haynes',
'Hays',
'Head',
'Heath',
'Hebert',
'Henderson',
'Hendricks',
'Hendrix',
'Henry',
'Hensley',
'Henson',
'Herman',
'Hernandez',
'Herrera',
'Herring',
'Hess',
'Hester',
'Hewitt',
'Hickman',
'Hicks',
'Higgins',
'Hill',
'Hines',
'Hinton',
'Hobbs',
'Hodge',
'Hodges',
'Hoffman',
'Hogan',
'Holcomb',
'Holden',
'Holder',
'Holland',
'Holloway',
'Holman',
'Holmes',
'Holt',
'Hood',
'Hooper',
'Hoover',
'Hopkins',
'Hopper',
'Horn',
'Horne',
'Horton',
'House',
'Houston',
'Howard',
'Howe',
'Howell',
'Hubbard',
'Huber',
'Hudson',
'Huff',
'Huffman',
'Hughes',
'Hull',
'Humphrey',
'Hunt',
'Hunter',
'Hurley',
'Hurst',
'Hutchinson',
'Hyde',
'Ingram',
'Irwin',
'Jackson',
'Jacobs',
'Jacobson',
'James',
'Jarvis',
'Jefferson',
'Jenkins',
'Jennings',
'Jensen',
'Jimenez',
'Johns',
'Johnson',
'Johnston',
'Jones',
'Jordan',
'Joseph',
'Joyce',
'Joyner',
'Juarez',
'Justice',
'Kane',
'Kaufman',
'Keith',
'Keller',
'Kelley',
'Kelly',
'Kemp',
'Kennedy',
'Kent',
'Kerr',
'Key',
'Kidd',
'Kim',
'King',
'Kinney',
'Kirby',
'Kirk',
'Kirkland',
'Klein',
'Kline',
'Knapp',
'Knight',
'Knowles',
'Knox',
'Koch',
'Kramer',
'Lamb',
'Lambert',
'Lancaster',
'Landry',
'Lane',
'Lang',
'Langley',
'Lara',
'Larsen',
'Larson',
'Lawrence',
'Lawson',
'Le',
'Leach',
'Leblanc',
'Lee',
'Leon',
'Leonard',
'Lester',
'Levine',
'Levy',
'Lewis',
'Lindsay',
'Lindsey',
'Little',
'Livingston',
'Lloyd',
'Logan',
'Long',
'Lopez',
'Lott',
'Love',
'Lowe',
'Lowery',
'Lucas',
'Luna',
'Lynch',
'Lynn',
'Lyons',
'Macdonald',
'Macias',
'Mack',
'Madden',
'Maddox',
'Maldonado',
'Malone',
'Mann',
'Manning',
'Marks',
'Marquez',
'Marsh',
'Marshall',
'Martin',
'Martinez',
'Mason',
'Massey',
'Mathews',
'Mathis',
'Matthews',
'Maxwell',
'May',
'Mayer',
'Maynard',
'Mayo',
'Mays',
'Mcbride',
'Mccall',
'Mccarthy',
'Mccarty',
'Mcclain',
'Mcclure',
'Mcconnell',
'Mccormick',
'Mccoy',
'Mccray',
'Mccullough',
'Mcdaniel',
'Mcdonald',
'Mcdowell',
'Mcfadden',
'Mcfarland',
'Mcgee',
'Mcgowan',
'Mcguire',
'Mcintosh',
'Mcintyre',
'Mckay',
'Mckee',
'Mckenzie',
'Mckinney',
'Mcknight',
'Mclaughlin',
'Mclean',
'Mcleod',
'Mcmahon',
'Mcmillan',
'Mcneil',
'Mcpherson',
'Meadows',
'Medina',
'Mejia',
'Melendez',
'Melton',
'Mendez',
'Mendoza',
'Mercado',
'Mercer',
'Merrill',
'Merritt',
'Meyer',
'Meyers',
'Michael',
'Middleton',
'Miles',
'Miller',
'Mills',
'Miranda',
'Mitchell',
'Molina',
'Monroe',
'Montgomery',
'Montoya',
'Moody',
'Moon',
'Mooney',
'Moore',
'Morales',
'Moran',
'Moreno',
'Morgan',
'Morin',
'Morris',
'Morrison',
'Morrow',
'Morse',
'Morton',
'Moses',
'Mosley',
'Moss',
'Mueller',
'Mullen',
'Mullins',
'Munoz',
'Murphy',
'Murray',
'Myers',
'Nash',
'Navarro',
'Neal',
'Nelson',
'Newman',
'Newton',
'Nguyen',
'Nichols',
'Nicholson',
'Nielsen',
'Nieves',
'Nixon',
'Noble',
'Noel',
'Nolan',
'Norman',
'Norris',
'Norton',
'Nunez',
'Obrien',
'Ochoa',
'Oconnor',
'Odom',
'Odonnell',
'Oliver',
'Olsen',
'Olson',
'Oneal',
'Oneil',
'Oneill',
'Orr',
'Ortega',
'Ortiz',
'Osborn',
'Osborne',
'Owen',
'Owens',
'Pace',
'Pacheco',
'Padilla',
'Page',
'Palmer',
'Park',
'Parker',
'Parks',
'Parrish',
'Parsons',
'Pate',
'Patel',
'Patrick',
'Patterson',
'Patton',
'Paul',
'Payne',
'Pearson',
'Peck',
'Pena',
'Pennington',
'Perez',
'Perkins',
'Perry',
'Peters',
'Petersen',
'Peterson',
'Petty',
'Phelps',
'Phillips',
'Pickett',
'Pierce',
'Pittman',
'Pitts',
'Pollard',
'Poole',
'Pope',
'Porter',
'Potter',
'Potts',
'Powell',
'Powers',
'Pratt',
'Preston',
'Price',
'Prince',
'Pruitt',
'Puckett',
'Pugh',
'Quinn',
'Ramirez',
'Ramos',
'Ramsey',
'Randall',
'Randolph',
'Rasmussen',
'Ratliff',
'Ray',
'Raymond',
'Reed',
'Reese',
'Reeves',
'Reid',
'Reilly',
'Reyes',
'Reynolds',
'Rhodes',
'Rice',
'Rich',
'Richard',
'Richards',
'Richardson',
'Richmond',
'Riddle',
'Riggs',
'Riley',
'Rios',
'Rivas',
'Rivera',
'Rivers',
'Roach',
'Robbins',
'Roberson',
'Roberts',
'Robertson',
'Robinson',
'Robles',
'Rocha',
'Rodgers',
'Rodriguez',
'Rodriquez',
'Rogers',
'Rojas',
'Rollins',
'Roman',
'Romero',
'Rosa',
'Rosales',
'Rosario',
'Rose',
'Ross',
'Roth',
'Rowe',
'Rowland',
'Roy',
'Ruiz',
'Rush',
'Russell',
'Russo',
'Rutledge',
'Ryan',
'Salas',
'Salazar',
'Salinas',
'Sampson',
'Sanchez',
'Sanders',
'Sandoval',
'Sanford',
'Santana',
'Santiago',
'Santos',
'Sargent',
'Saunders',
'Savage',
'Sawyer',
'Schmidt',
'Schneider',
'Schroeder',
'Schultz',
'Schwartz',
'Scott',
'Sears',
'Sellers',
'Serrano',
'Sexton',
'Shaffer',
'Shannon',
'Sharp',
'Sharpe',
'Shaw',
'Shelton',
'Shepard',
'Shepherd',
'Sheppard',
'Sherman',
'Shields',
'Short',
'Silva',
'Simmons',
'Simon',
'Simpson',
'Sims',
'Singleton',
'Skinner',
'Slater',
'Sloan',
'Small',
'Smith',
'Snider',
'Snow',
'Snyder',
'Solis',
'Solomon',
'Sosa',
'Soto',
'Sparks',
'Spears',
'Spence',
'Spencer',
'Stafford',
'Stanley',
'Stanton',
'Stark',
'Steele',
'Stein',
'Stephens',
'Stephenson',
'Stevens',
'Stevenson',
'Stewart',
'Stokes',
'Stone',
'Stout',
'Strickland',
'Strong',
'Stuart',
'Suarez',
'Sullivan',
'Summers',
'Sutton',
'Swanson',
'Sweeney',
'Sweet',
'Sykes',
'Talley',
'Tanner',
'Tate',
'Taylor',
'Terrell',
'Terry',
'Thomas',
'Thompson',
'Thornton',
'Tillman',
'Todd',
'Torres',
'Townsend',
'Tran',
'Travis',
'Trevino',
'Trujillo',
'Tucker',
'Turner',
'Tyler',
'Tyson',
'Underwood',
'Valdez',
'Valencia',
'Valentine',
'Valenzuela',
'Vance',
'Vang',
'Vargas',
'Vasquez',
'Vaughan',
'Vaughn',
'Vazquez',
'Vega',
'Velasquez',
'Velazquez',
'Velez',
'Villarreal',
'Vincent',
'Vinson',
'Wade',
'Wagner',
'Walker',
'Wall',
'Wallace',
'Waller',
'Walls',
'Walsh',
'Walter',
'Walters',
'Walton',
'Ward',
'Ware',
'Warner',
'Warren',
'Washington',
'Waters',
'Watkins',
'Watson',
'Watts',
'Weaver',
'Webb',
'Weber',
'Webster',
'Weeks',
'Weiss',
'Welch',
'Wells',
'West',
'Wheeler',
'Whitaker',
'White',
'Whitehead',
'Whitfield',
'Whitley',
'Whitney',
'Wiggins',
'Wilcox',
'Wilder',
'Wiley',
'Wilkerson',
'Wilkins',
'Wilkinson',
'William',
'Williams',
'Williamson',
'Willis',
'Wilson',
'Winters',
'Wise',
'Witt',
'Wolf',
'Wolfe',
'Wong',
'Wood',
'Woodard',
'Woods',
'Woodward',
'Wooten',
'Workman',
'Wright',
'Wyatt',
'Wynn',
'Yang',
'Yates',
'York',
'Young',
'Zamora',
'Zimmerman'
];


var leftAdsContent = ['<div id="leftAdsId">  </div>'];
var rightAdsContent = ['<div id="rightAdsId">  </div>'];



// makes random visa number

var visaDigits = [4];
var visaDigSum = 8;

function randomsOneVisaNumber() {

	visaDigits = [4];
	visaDigSum = 8;

	for (var i = 0; i < 14 ; i++) {
		var randomDigit = Math.floor(Math.random() * 10);
		visaDigits.push(randomDigit);
		if (i % 2 == 1) {
			randomDigit *= 2;
			if (randomDigit>9) {
				randomDigit -=9;
			};
		};
		visaDigSum += randomDigit;
	};

	var lastDigit = 10 - (visaDigSum % 10);
	if (visaDigSum % 10 == 0) {
		lastDigit = 0;
	};
	visaDigits.push(lastDigit);
}

// makes random mastercard number

var masterCardDigits = [5];
var masterCardDigSum = 1;

function randomsOneMasterCardNumber() {

	masterCardDigits = [5];
	masterCardDigSum = 1;

	var randomDigit = Math.floor(Math.random() * 5 + 1);
	masterCardDigits.push(randomDigit);
	masterCardDigSum += randomDigit;

	for (var i = 0; i < 13 ; i++) {
		randomDigit = Math.floor(Math.random() * 10);
		masterCardDigits.push(randomDigit);
		if (i % 2 == 0) {
			randomDigit *= 2;
			if (randomDigit>9) {
				randomDigit -=9;
			};
		};
		masterCardDigSum += randomDigit;
	};

	var lastDigit = 10 - (masterCardDigSum % 10);
	if (masterCardDigSum % 10 == 0) {
		lastDigit = 0;
	};
	masterCardDigits.push(lastDigit);
}

// makes random discover number

var discoverDigits = [6,0,1,1];
var discoverDigSum = 6;

function randomsOneDiscoverCardNumber() {

	discoverDigits = [6,0,1,1];
	discoverDigSum = 6;

	for (var i = 0; i < 11 ; i++) {
		var randomDigit = Math.floor(Math.random() * 10);
		discoverDigits.push(randomDigit);
		if (i % 2 == 0) {
			randomDigit *= 2;
			if (randomDigit>9) {
				randomDigit -=9;
			};
		};
		discoverDigSum += randomDigit;
	};

	var lastDigit = 10 - (discoverDigSum % 10);
	if (discoverDigSum % 10 == 0) {
		lastDigit = 0;
	};
	discoverDigits.push(lastDigit);
}

// makes random American Express number

var americanExpressDigits = [3];
var americanExpressDigSum = 3;

function randomsOneAmericanExpressCardNumber() {

	americanExpressDigits = [3];
	americanExpressDigSum = 3;

	var randomDigit = Math.floor(Math.random()*2);
	if (randomDigit == 0) {randomDigit = 4;};
	if (randomDigit == 1) {randomDigit = 7;};
	americanExpressDigits.push(randomDigit);
	randomDigit *= 2;
	if (randomDigit>9) {
		randomDigit -=9;
	};
	americanExpressDigSum += randomDigit;

	for (var i = 0; i < 12 ; i++) {
		randomDigit = Math.floor(Math.random() * 10);
		americanExpressDigits.push(randomDigit);
		if (i % 2 == 1) {
			randomDigit *= 2;
			if (randomDigit>9) {
				randomDigit -=9;
			};
		};
		americanExpressDigSum += randomDigit;
	};

	var lastDigit = 10 - (americanExpressDigSum % 10);
	if (americanExpressDigSum % 10 == 0) {
		lastDigit = 0;
	};
	americanExpressDigits.push(lastDigit);
}

// makes random JCB number

var jcbDigits = [3,5];
var jcbDigSum = 11;

function randomsOneJcbCardNumber() {

	jcbDigits = [3,5];
	jcbDigSum = 11;

	var randomDigit = Math.floor(Math.random() * 7 + 2);
	jcbDigits.push(randomDigit);
	randomDigit *= 2;
	if (randomDigit>9) {
		randomDigit -=9;
	};
	jcbDigSum += randomDigit;

	randomDigit = Math.floor(Math.random() * 2 + 8);
	jcbDigits.push(randomDigit);
	jcbDigSum += randomDigit;

	for (var i = 0; i < 11 ; i++) {
		randomDigit = Math.floor(Math.random() * 10);
		jcbDigits.push(randomDigit);
		if (i % 2 == 0) {
			randomDigit *= 2;
			if (randomDigit>9) {
				randomDigit -=9;
			};
		};
		jcbDigSum += randomDigit;
	};

	var lastDigit = 10 - (jcbDigSum % 10);
	if (jcbDigSum % 10 == 0) {
		lastDigit = 0;
	};
	jcbDigits.push(lastDigit);
}

var dinerDigits = [];
var dinerDigSum = [];

function randomsOneDinerClubCardNumber()
{

	var pos;
	var str = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	var sum = 0;
	var final_digit = 0;
	var t = 0;
	var len_offset = 0;
	var len = 0;
	var issuer;

	var dinersPrefixList = [
					[3, 6],
					[3, 8],
					[5]
					];

					var random = Math.floor(Math.random() * (0 - 3) ) + 3;

					if(random == 0)
					{
						str[0] = 3;
						str[1] = 6;
						pos = 2;
						len = 14;

					}
					else if(random == 1)
					{
						str[0] = 3;
						str[1] = 8;
						pos = 2;
						len = 14;
					}
					else if(random == 2)
					{
						str[0] = 5;
						pos = 1;
						len = 16;
					}
				//	console.log(random);


	while (pos < len - 1) {
		str[pos++] = Math.floor(Math.random() * 10) % 10;
	}


	len_offset = (len + 1) % 2;
	for (pos = 0; pos < len - 1; pos++) {
		if ((pos + len_offset) % 2) {
			t = str[pos] * 2;
			if (t > 9) {
				t -= 9;
			}
			sum += t;
		}
		else {
			sum += str[pos];
		}
	}


	final_digit = (10 - (sum % 10)) % 10;
	str[len - 1] = final_digit;

	// Output the CC value.
	t = str.join('');
	t = t.substr(0, len);
	dinerDigits = t.split("");
	//console.log(dinerDigits);
}

//   randoms a name, adress...




var addressList = ['Cedar Lane', 'Franklin Court', 'Andover Court', 'Country Club Road', 'Highland Drive', 'Crescent Street', 'Linden Avenue', 'King Street', 'Ann Street', 'Jefferson Avenue', 'Maiden Lane',
'Forest Street', 'Arlington Avenue', 'Franklin Avenue', 'Laurel Lane', 'Rose Street', 'White Street', 'Warren Avenue', 'Briarwood Drive', 'Madison Avenue', 'Hanover Court', 'Windsor Drive', 'Summit Avenue',
'Charles Street', 'Cedar Avenue', 'John Street', 'River Street', 'Grand Avenue', 'Route 1', 'Devon Court', 'Monroe Street', 'Woodland Drive', 'Garfield Avenue', 'Main Street', 'Essex Court',
'Front Street North', 'Williams Street', 'Orchard Avenue', 'Willow Avenue', 'Laurel Drive', 'Pleasant Street', 'Atlantic Avenue', 'Fairway Drive', 'Clay Street', 'Olive Street', 'Route 30',
'Cottage Street', 'Broad Street', 'Court Street', 'Heather Lane',"2153 Curabitur Avenue", "P.O. Box 904, 9885 Nibh Road", "319-4626 Nec Street", "533-3344 Nullam Avenue", "946-7480 Et Ave", "P.O. Box 390, 2964 Curabitur St.", "Ap #938-7570 Erat Av.", "Ap #917-1152 Lorem Street", "493-1230 Gravida Avenue", "816-908 Vivamus Av.", "6188 Odio Avenue", "6074 Arcu. Street", "717-2449 Dolor. St.", "542-9585 A Avenue", "3254 Id Ave", "432-6367 Adipiscing St.", "P.O. Box 658, 3369 Ut Street", "2807 Cum Rd.", "Ap #680-1405 Adipiscing Avenue", "841-9942 Sed Rd.", "Ap #275-7664 Aliquet. Ave", "9113 Eget Av.", "P.O. Box 862, 1230 Egestas Ave", "6832 Et St.", "356-1742 Morbi Ave", "P.O. Box 932, 3304 Neque St.", "Ap #612-6901 Metus Road", "1543 Nibh. Road", "P.O. Box 170, 1105 Neque St.", "P.O. Box 304, 1036 Integer St.", "183 Nisl Av.", "Ap #270-6505 Amet Ave", "149-9741 Non Ave", "8075 Malesuada Avenue", "107-2841 Lectus Rd.", "161-3692 Lectus St.", "Ap #388-9461 Orci Road", "825-621 Egestas. Rd.", "P.O. Box 605, 4105 Aliquet Av.", "8763 Erat Rd.", "407-5653 Odio Street", "226-8863 Sed Av.", "745-451 Habitant St.", "Ap #445-3644 Tellus Street", "8218 Nunc. Ave", "257-5497 Duis Rd.", "1240 Justo Ave", "284-6490 Egestas. Rd.", "P.O. Box 941, 6371 Lorem Rd.", "805-5367 Maecenas Rd.", "Ap #950-3174 Vehicula. St.", "8882 Nec, St.", "619-8003 Nisl St.", "Ap #476-9942 Risus. Rd.", "Ap #646-2060 Et, Rd.", "552-1849 Morbi Road", "1155 In St.", "2260 Lorem Road", "Ap #273-9741 Egestas St.", "1550 Ipsum Road", "670-3383 Cras Avenue", "Ap #863-8006 Porttitor St.", "9261 A, Avenue", "645-2366 Aliquam Street", "8368 Leo. Av.", "P.O. Box 955, 2384 Amet Road", "4524 Nisl St.", "960-2914 Gravida Road", "7808 Eu Ave", "Ap #416-9463 Eleifend Street", "Ap #381-1472 Lacus St.", "9419 Aliquet Avenue", "P.O. Box 985, 5106 Luctus Av.", "Ap #114-2467 Iaculis Road", "P.O. Box 144, 6164 Dui Rd.", "Ap #547-7656 Facilisis Ave", "P.O. Box 225, 4050 Vitae, Rd.", "6935 Diam. Av.", "359-567 Enim, Rd.", "111-3206 Penatibus Av.", "Ap #805-4726 Magna Avenue", "2824 Montes, St.", "886-4806 Posuere, St.", "450 Tellus Ave", "Ap #970-4226 Augue Ave", "735-3644 Hendrerit Avenue", "Ap #814-6087 Nulla. St.", "681-5094 Luctus Avenue", "Ap #232-9293 Parturient Avenue", "P.O. Box 538, 8349 Donec St.", "7348 Molestie Rd.", "P.O. Box 118, 9747 Euismod Rd.", "238-2535 Diam Avenue", "658-4081 Et Ave", "6975 A, Av.", "5880 Cubilia Road", "3382 Adipiscing Ave", "319-9522 Aliquam Rd.", "566 Imperdiet St.", "806-7688 Adipiscing, Road"];

var countryList = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

var nameRandomed = [];
var secondNameRandomed = [];
var addressRandomed = [];
var coutryRandomed = [];
var year = new Date().getFullYear()
var month = new Date().getMonth() + 1;
var yearRandomed = 0;
var monthRandomed = 0;

function randomsANameAndAddress() {
	nameRandomed = [];
	secondNameRandomed = [];
	addressRandomed = [];
	coutryRandomed = [];
	var aName = nameList[Math.floor(Math.random()*nameList.length)];
	var aSecondName = secondNameList[Math.floor(Math.random()*secondNameList.length)];
	nameRandomed.push(aName);
	secondNameRandomed.push(aSecondName);
	var aAddress = addressList[Math.floor(Math.random()*addressList.length)];
	addressRandomed.push(aAddress);
	var aCountry = countryList[Math.floor(Math.random()*countryList.length)];
	coutryRandomed.push(aCountry);
  var increamentYear = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  yearRandomed = parseInt(increamentYear) + year;
	monthRandomed = Math.floor(Math.random()*12 + 1);
	if (yearRandomed == year) {
		var monthsToEnd = 12 - month;
		monthRandomed = Math.floor(Math.random()* monthsToEnd + 1) + month;
	};
	if (yearRandomed == (year+7)) {
		monthRandomed = Math.floor(Math.random()* (month-1) + 1);
	};
}


// generates American Express JSONs

function generatesAmericanExpressJSONs() {
	var amerExpressJsonsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	amerExpressJsonsContent.push('[<br>');

	for (var i = 0; i < (numberOfCards); i++) {
		randomsOneAmericanExpressCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		amerExpressJsonsContent.push('&nbsp; &nbsp; {<br>');
		amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
		amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "American Express",<br>');
		amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + americanExpressDigits.join('') +'",<br>');
    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
        }
    }
    else
    {
        amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
        }
    }
    else
    {
        amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
        }
    }
    else
    {
        amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
        }
    }
    else
    {
        amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
    }

    amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
        }
    }
    else
    {
        amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
        if(monthRandomed<10){amerExpressJsonsContent.push('0')};
    		amerExpressJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
    }


		amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
		amerExpressJsonsContent.push('&nbsp; &nbsp; },<br>');
	};

	randomsOneAmericanExpressCardNumber();
	randomsANameAndAddress();
	/*amerExpressJsonsContent.push('&nbsp; &nbsp; {<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "American Express",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + americanExpressDigits.join('') +'",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
	if(monthRandomed<10){amerExpressJsonsContent.push('0')};
	amerExpressJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
	amerExpressJsonsContent.push('&nbsp; &nbsp; }<br>');
  */
	amerExpressJsonsContent.push(']');

	$('#bulkGenerateModalBody p').html(amerExpressJsonsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>AMERICAN EXPRESS CARD</span> IN <span>JSON</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "american_express.json", "text/plain");
	});

}

// generates American Express XMLs

function generatesAmericanExpressXMLs() {
	var amerExpressXMLsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	amerExpressXMLsContent.push('&#x0003C;root&#x0003E;<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneAmericanExpressCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		amerExpressXMLsContent.push('&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>');
		amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;American Express&#x0003C;/IssuingNetwork&#x0003E;<br>');
		amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + americanExpressDigits.join('') +'&#x0003C;/CardNumber&#x0003E;<br>');

    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
        }
    }
    else
    {
        amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
        }
    }
    else
    {
        amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
        }
    }
    else
    {
        amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
        }
    }
    else
    {
        amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
    }

    amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;');
          if(monthRandomed<10){amerExpressXMLsContent.push('0')};
      		amerExpressXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp><br>');
        }
    }
    else
    {
        amerExpressXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;');
        if(monthRandomed<10){amerExpressXMLsContent.push('0')};
    		amerExpressXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp><br>');
    }


		amerExpressXMLsContent.push('&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>');
	};
	amerExpressXMLsContent.push('&#x0003C;/root&#x0003E;');

	$('#bulkGenerateModalBody p').html(amerExpressXMLsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>AMERICAN EXPRESS CARD</span> IN <span>XML</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "american_express.xml", "text/plain");
	});

}

// generates American CSVs

function generatesAmericanCSVs() {
	var americanExpressCSVsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

  if( document.getElementById("randomNameCheckbox")  )
  {
      if( document.getElementById("randomNameCheckbox").checked )
      {
        var keyName = ',Name';

      }
      else {
        var keyName = ''
      }
  }
  else
  {
      var keyName = ',Name';

  }

  if( document.getElementById("randomAddressCheckbox")  )
  {
      if( document.getElementById("randomAddressCheckbox").checked )
      {
        var keyAddress = ',Address';
        ;
      }
      else {
        var keyAddress = '';
      }
  }
  else
  {
      var keyAddress = ',Address';

  }

  if( document.getElementById("randomCountryCheckbox")  )
  {
      if( document.getElementById("randomCountryCheckbox").checked )
      {
        var keyCountry = ',Country';

      }
      else {
        var keyCountry = '';
      }
  }
  else
  {
      var keyCountry = ',Country';
  }

  if( document.getElementById("randomCVVCheckbox")  )
  {
      if( document.getElementById("randomCVVCheckbox").checked )
      {
        var keyCVV = ',CVV';
      }
      else {
        var keyCVV = '';
      }
  }
  else
  {
      var keyCVV = ',CVV';
  }

  if( document.getElementById("randomDateCheckbox")  )
  {
      if( document.getElementById("randomDateCheckbox").checked )
      {
        var keyExp = ',Exp';
      }
      else {
        var keyExp = '';
      }
  }
  else
  {
      var keyExp = ',Exp';
  }

	americanExpressCSVsContent.push('IssuingNetwork,CardNumber'+keyName+''+keyAddress+''+keyCountry+''+keyCVV+',Limit'+keyExp+'<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneAmericanExpressCardNumber();
		randomsANameAndAddress();
    if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}

    if(keyName == '')
    {
      valName = '';
    }
    else {
      valName = ','+nameRandomed.join('') + ' ' + secondNameRandomed.join('');
    }

    if(keyAddress == '')
    {
      valAddress = '';
    }
    else {
      valAddress = ','+addressRandomed.join('');
    }

    if(keyCountry == '')
    {
      valCountry  = '';
    }
    else {
      valCountry = ','+coutryRandomed;
    }

    if(keyCVV == '')
    {
      valCVV  = '';
    }
    else {
      valCVV = ','+ Math.floor(Math.random()*900 + 100);
    }

    if(keyExp == '')
    {
      valExp  = '';
    }
    else {
      valExp = ',' + monthRandomed + '/' + yearRandomed.toString();
    }

    americanExpressCSVsContent.push('American Express,' + americanExpressDigits.join('') + '' + valName + '' + valAddress + '' + valCountry + '' + valCVV + ',' + Math.floor(Math.random()*4901 + 100) + '$' + '' + valExp + '<br>' );
		//if(monthRandomed<10){americanExpressCSVsContent.push('0')};
		//americanExpressCSVsContent.push(monthRandomed + '/' + yearRandomed.toString() + '<br>');
	};

	$('#bulkGenerateModalBody p').html(americanExpressCSVsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>AMERICAN EXPRESS CARD</span> IN <span>CSV</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "american_express.text", "text/plain");
	});

}

//   generates Visa JSONs

function generatesVisaJSONs() {
	var visaJsonsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	visaJsonsContent.push('[<br>');

	for (var i = 0; i < (numberOfCards -1); i++) {
		randomsOneVisaNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		visaJsonsContent.push('&nbsp; &nbsp; {<br>');
		visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
		visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa",<br>');
		visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + visaDigits.join('') +'",<br>');
    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
        }
    }
    else
    {
        visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
        }
    }
    else
    {
        visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
        }
    }
    else
    {
        visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
        }
    }
    else
    {
        visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
    }

    visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      		if(monthRandomed<10){visaJsonsContent.push('0')};
      		visaJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
        }
    }
    else
    {
      visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      if(monthRandomed<10){visaJsonsContent.push('0')};
      visaJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
    }


		visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
		visaJsonsContent.push('&nbsp; &nbsp; },<br>');
	};

	randomsOneVisaNumber();
	randomsANameAndAddress();
	/*visaJsonsContent.push('&nbsp; &nbsp; {<br>');
  visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + visaDigits.join('') +'",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
	if(monthRandomed<10){visaJsonsContent.push('0')};
	visaJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
	visaJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
	visaJsonsContent.push('&nbsp; &nbsp; }<br>');
  */
	visaJsonsContent.push(']');
	$('#bulkGenerateModalBody p').html(visaJsonsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>VISA CARD</span> IN <span>JSON</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "visa.json", "text/plain");
	});
}

// generates Visa XMLs

function generatesvisaXMLs() {
	var visaXMLsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	visaXMLsContent.push('&#x0003C;root&#x0003E;<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneVisaNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		visaXMLsContent.push('&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>');
		visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Visa&#x0003C;/IssuingNetwork&#x0003E;<br>');
		visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + visaDigits.join('') +'&#x0003C;/CardNumber&#x0003E;<br>');

    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
        }
    }
    else
    {
        visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
        }
    }
    else
    {
        visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
        }
    }
    else
    {
        visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
        }
    }
    else
    {
        visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
    }

    visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
          if(monthRandomed<10){visaXMLsContent.push('0')};
      		visaXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp&#x0003E;<br>');
        }
    }
    else
    {
        visaXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        if(monthRandomed<10){visaXMLsContent.push('0')};
    		visaXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp&#x0003E;<br>');
    }



		visaXMLsContent.push('&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>');
	};
	visaXMLsContent.push('&#x0003C;/root&#x0003E;');

	$('#bulkGenerateModalBody p').html(visaXMLsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>VISA CARD</span> IN <span>XML</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "visa.xml", "text/plain");
	});


}

// generates Visa CSVs

function generatesVisaCSVs() {
	var visaCSVsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

  if( document.getElementById("randomNameCheckbox")  )
  {
      if( document.getElementById("randomNameCheckbox").checked )
      {
        var keyName = ',Name';

      }
      else {
        var keyName = ''
      }
  }
  else
  {
      var keyName = ',Name';

  }

  if( document.getElementById("randomAddressCheckbox")  )
  {
      if( document.getElementById("randomAddressCheckbox").checked )
      {
        var keyAddress = ',Address';
        ;
      }
      else {
        var keyAddress = '';
      }
  }
  else
  {
      var keyAddress = ',Address';

  }

  if( document.getElementById("randomCountryCheckbox")  )
  {
      if( document.getElementById("randomCountryCheckbox").checked )
      {
        var keyCountry = ',Country';

      }
      else {
        var keyCountry = '';
      }
  }
  else
  {
      var keyCountry = ',Country';
  }

  if( document.getElementById("randomCVVCheckbox")  )
  {
      if( document.getElementById("randomCVVCheckbox").checked )
      {
        var keyCVV = ',CVV';
      }
      else {
        var keyCVV = '';
      }
  }
  else
  {
      var keyCVV = ',CVV';
  }

  if( document.getElementById("randomDateCheckbox")  )
  {
      if( document.getElementById("randomDateCheckbox").checked )
      {
        var keyExp = ',Exp';
      }
      else {
        var keyExp = '';
      }
  }
  else
  {
      var keyExp = ',Exp';
  }

  visaCSVsContent.push('IssuingNetwork,CardNumber'+keyName+''+keyAddress+''+keyCountry+''+keyCVV+',Limit'+keyExp+'<br>');


	 for (var i = 0; i < numberOfCards; i++) {
		randomsOneVisaNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}

    if(keyName == '')
    {
      valName = '';
    }
    else {
      valName = ','+nameRandomed.join('') + ' ' + secondNameRandomed.join('');
    }

    if(keyAddress == '')
    {
      valAddress = '';
    }
    else {
      valAddress = ','+addressRandomed.join('');
    }

    if(keyCountry == '')
    {
      valCountry  = '';
    }
    else {
      valCountry = ','+coutryRandomed;
    }

    if(keyCVV == '')
    {
      valCVV  = '';
    }
    else {
      valCVV = ','+ Math.floor(Math.random()*900 + 100);
    }

    if(keyExp == '')
    {
      valExp  = '';
    }
    else {
      valExp = ',' + monthRandomed + '/' + yearRandomed.toString();
    }

    visaCSVsContent.push('Visa,' +visaDigits.join('') + '' + valName + '' + valAddress + '' + valCountry + '' + valCVV + ',' + Math.floor(Math.random()*4901 + 100) + '$' + '' + valExp + '<br>' );

	};

	$('#bulkGenerateModalBody p').html(visaCSVsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>VISA CARD</span> IN <span>CSV</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "visa.txt", "text/plain");
	});

}

//   generates Master Card JSONs

function generatesMasterCardJSONs() {
	var masterCardJsonsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	masterCardJsonsContent.push('[<br>');

	for (var i = 0; i < (numberOfCards); i++) {
		randomsOneMasterCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		masterCardJsonsContent.push('&nbsp; &nbsp; {<br>');
		masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
		masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",<br>');
		masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + masterCardDigits.join('') +'",<br>');
    if( document.getElementById("randomNameCheckbox") )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
        }
    }
    else
    {
        masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
    }

    if( document.getElementById("randomAddressCheckbox") )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
        }
    }
    else
    {
        masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
    }

    if( document.getElementById("randomCountryCheckbox") )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
        }
    }
    else
    {
        masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
    }

    if( document.getElementById("randomCVVCheckbox") )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
        }
    }
    else
    {
        masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
    }

    masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');

    if( document.getElementById("randomDateCheckbox") )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      		if(monthRandomed<10){masterCardJsonsContent.push('0')};
      		masterCardJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
        }
    }
    else
    {
      masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      if(monthRandomed<10){masterCardJsonsContent.push('0')};
      masterCardJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
    }


		masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
		masterCardJsonsContent.push('&nbsp; &nbsp; },<br>');
	};

	randomsOneMasterCardNumber();
	randomsANameAndAddress();
  /*
  masterCardJsonsContent.push('&nbsp; &nbsp; {<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + masterCardDigits.join('') +'",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
	if(monthRandomed<10){masterCardJsonsContent.push('0')};
	masterCardJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
	masterCardJsonsContent.push('&nbsp; &nbsp; }<br>');
  */
	masterCardJsonsContent.push(']');

	$('#bulkGenerateModalBody p').html(masterCardJsonsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>MASTER CARD</span> IN <span>JSON</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "master_card.json", "text/plain");
	});

}

// generates Master XMLs

function generatesMasterXMLs() {
	var masterXMLsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	masterXMLsContent.push('&#x0003C;root&#x0003E;<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneMasterCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		masterXMLsContent.push('&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>');
		masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Master Card&#x0003C;/IssuingNetwork&#x0003E;<br>');
		masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + masterCardDigits.join('') +'&#x0003C;/CardNumber&#x0003E;<br>');

    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
        }
    }
    else
    {
        masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
        }
    }
    else
    {
        masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
        }
    }
    else
    {
        masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
        }
    }
    else
    {
        masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
    }

    masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        }
    }
    else
    {
        masterXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        if(monthRandomed<10){masterXMLsContent.push('0')};
        masterXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp&#x0003E;<br>');
    }

    masterXMLsContent.push('&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>');

  };
	masterXMLsContent.push('&#x0003C;/root&#x0003E;');

	$('#bulkGenerateModalBody p').html(masterXMLsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>MASTER CARD</span> IN <span>XML</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "master_card.xml", "text/plain");
	});

}

// generates Master CSVs

function generatesMasterCSVs() {
	var MasterCSVsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

  if( document.getElementById("randomNameCheckbox")  )
  {
      if( document.getElementById("randomNameCheckbox").checked )
      {
        var keyName = ',Name';

      }
      else {
        var keyName = ''
      }
  }
  else
  {
      var keyName = ',Name';

  }

  if( document.getElementById("randomAddressCheckbox")  )
  {
      if( document.getElementById("randomAddressCheckbox").checked )
      {
        var keyAddress = ',Address';
        ;
      }
      else {
        var keyAddress = '';
      }
  }
  else
  {
      var keyAddress = ',Address';

  }

  if( document.getElementById("randomCountryCheckbox")  )
  {
      if( document.getElementById("randomCountryCheckbox").checked )
      {
        var keyCountry = ',Country';

      }
      else {
        var keyCountry = '';
      }
  }
  else
  {
      var keyCountry = ',Country';
  }

  if( document.getElementById("randomCVVCheckbox")  )
  {
      if( document.getElementById("randomCVVCheckbox").checked )
      {
        var keyCVV = ',CVV';
      }
      else {
        var keyCVV = '';
      }
  }
  else
  {
      var keyCVV = ',CVV';
  }

  if( document.getElementById("randomDateCheckbox")  )
  {
      if( document.getElementById("randomDateCheckbox").checked )
      {
        var keyExp = ',Exp';
      }
      else {
        var keyExp = '';
      }
  }
  else
  {
      var keyExp = ',Exp';
  }

  MasterCSVsContent.push('IssuingNetwork,CardNumber'+keyName+''+keyAddress+''+keyCountry+''+keyCVV+',Limit'+keyExp+'<br>');


	for (var i = 0; i < numberOfCards; i++) {
		randomsOneMasterCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}

    if(keyName == '')
    {
      valName = '';
    }
    else {
      valName = ','+nameRandomed.join('') + ' ' + secondNameRandomed.join('');
    }

    if(keyAddress == '')
    {
      valAddress = '';
    }
    else {
      valAddress = ','+addressRandomed.join('');
    }

    if(keyCountry == '')
    {
      valCountry  = '';
    }
    else {
      valCountry = ','+coutryRandomed;
    }

    if(keyCVV == '')
    {
      valCVV  = '';
    }
    else {
      valCVV = ','+ Math.floor(Math.random()*900 + 100);
    }

    if(keyExp == '')
    {
      valExp  = '';
    }
    else {
      valExp = ',' + monthRandomed + '/' + yearRandomed.toString();
    }

    MasterCSVsContent.push('Master Card,' + masterCardDigits.join('') + '' + valName + '' + valAddress + '' + valCountry + '' + valCVV + ',' + Math.floor(Math.random()*4901 + 100) + '$' + '' + valExp + '<br>' );

	};

	$('#bulkGenerateModalBody p').html(MasterCSVsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>MASTER CARD</span> IN <span>CSV</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "master_card.text", "text/plain");
	});

}

//   generates Discover JSONs

function generatesDiscoverJSONs() {
	var discoverJsonsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	discoverJsonsContent.push('[<br>');

	for (var i = 0; i < (numberOfCards - 1); i++) {
		randomsOneDiscoverCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		discoverJsonsContent.push('&nbsp; &nbsp; {<br>');
		discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
		discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Discover",<br>');
		discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + discoverDigits.join('') +'",<br>');
    if( document.getElementById("randomNameCheckbox") )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
        }
    }
    else
    {
    discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
    }

    if( document.getElementById("randomAddressCheckbox") )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
        }
    }
    else
    {
      discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
    }

    if( document.getElementById("randomCountryCheckbox") )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
        }
    }
    else
    {
      discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
    }

    if( document.getElementById("randomCVVCheckbox") )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
        }
    }
    else
    {
      discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
    }

    discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');

    if( document.getElementById("randomDateCheckbox") )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      		if(monthRandomed<10){discoverJsonsContent.push('0')};
      		discoverJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
        }
    }
    else
    {
      discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
  		if(monthRandomed<10){discoverJsonsContent.push('0')};
  		discoverJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
    }


		discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
		discoverJsonsContent.push('&nbsp; &nbsp; },<br>');
	};

	randomsOneDiscoverCardNumber();
	randomsANameAndAddress();
	/*discoverJsonsContent.push('&nbsp; &nbsp; {<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Discover",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + discoverDigits.join('') +'",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
	if(monthRandomed<10){discoverJsonsContent.push('0')};
	discoverJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
  discoverJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
	discoverJsonsContent.push('&nbsp; &nbsp; }<br>');
  */
  discoverJsonsContent.push(']');

	$('#bulkGenerateModalBody p').html(discoverJsonsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>DISCOVER CARD</span> IN <span>JSON</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "discover_card.json", "text/plain");
	});

}

// generates Discover XMLs

function generatesDiscoverXMLs() {
	var discoverXMLsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	discoverXMLsContent.push('&#x0003C;root&#x0003E;<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneDiscoverCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		discoverXMLsContent.push('&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>');
		discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Discover&#x0003C;/IssuingNetwork&#x0003E;<br>');
		discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + discoverDigits.join('') +'&#x0003C;/CardNumber&#x0003E;<br>');

    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
        }
    }
    else
    {
        discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
        }
    }
    else
    {
        discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
        }
    }
    else
    {
        discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
        }
    }
    else
    {
        discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
    }

    discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        }
    }
    else
    {
        discoverXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        if(monthRandomed<10){discoverXMLsContent.push('0')};
    		discoverXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp&#x0003E;<br>');
    }


		discoverXMLsContent.push('&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>');
	};
	discoverXMLsContent.push('&#x0003C;/root&#x0003E;');

	$('#bulkGenerateModalBody p').html(discoverXMLsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>DISCOVER CARD</span> IN <span>XML</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "discover_card.xml", "text/plain");
	});

}

// generates Discover CSVs

function generatesDiscoverCSVs() {
	var discoverCSVsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

  if( document.getElementById("randomNameCheckbox")  )
  {
      if( document.getElementById("randomNameCheckbox").checked )
      {
        var keyName = ',Name';

      }
      else {
        var keyName = ''
      }
  }
  else
  {
      var keyName = ',Name';

  }

  if( document.getElementById("randomAddressCheckbox")  )
  {
      if( document.getElementById("randomAddressCheckbox").checked )
      {
        var keyAddress = ',Address';
        ;
      }
      else {
        var keyAddress = '';
      }
  }
  else
  {
      var keyAddress = ',Address';

  }

  if( document.getElementById("randomCountryCheckbox")  )
  {
      if( document.getElementById("randomCountryCheckbox").checked )
      {
        var keyCountry = ',Country';

      }
      else {
        var keyCountry = '';
      }
  }
  else
  {
      var keyCountry = ',Country';
  }

  if( document.getElementById("randomCVVCheckbox")  )
  {
      if( document.getElementById("randomCVVCheckbox").checked )
      {
        var keyCVV = ',CVV';
      }
      else {
        var keyCVV = '';
      }
  }
  else
  {
      var keyCVV = ',CVV';
  }

  if( document.getElementById("randomDateCheckbox")  )
  {
      if( document.getElementById("randomDateCheckbox").checked )
      {
        var keyExp = ',Exp';
      }
      else {
        var keyExp = '';
      }
  }
  else
  {
      var keyExp = ',Exp';
  }

  discoverCSVsContent.push('IssuingNetwork,CardNumber'+keyName+''+keyAddress+''+keyCountry+''+keyCVV+',Limit'+keyExp+'<br>');




	for (var i = 0; i < numberOfCards; i++) {
		randomsOneDiscoverCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}

    if(keyName == '')
    {
      valName = '';
    }
    else {
      valName = ','+nameRandomed.join('') + ' ' + secondNameRandomed.join('');
    }

    if(keyAddress == '')
    {
      valAddress = '';
    }
    else {
      valAddress = ','+addressRandomed.join('');
    }

    if(keyCountry == '')
    {
      valCountry  = '';
    }
    else {
      valCountry = ','+coutryRandomed;
    }

    if(keyCVV == '')
    {
      valCVV  = '';
    }
    else {
      valCVV = ','+ Math.floor(Math.random()*900 + 100);
    }

    if(keyExp == '')
    {
      valExp  = '';
    }
    else {
      valExp = ',' + monthRandomed + '/' + yearRandomed.toString();
    }

    discoverCSVsContent.push('Discover,' + discoverDigits.join('') + '' + valName + '' + valAddress + '' + valCountry + '' + valCVV + ',' + Math.floor(Math.random()*4901 + 100) + '$' + '' + valExp + '<br>' );

	};

	$('#bulkGenerateModalBody p').html(discoverCSVsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>DISCOVER CARD</span> IN <span>CSV</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "discover_card.text", "text/plain");
	});

}

//   generates JCB JSONs

function generatesJcbJSONs() {
	var jcbJsonsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	jcbJsonsContent.push('[<br>');

	for (var i = 0; i < (numberOfCards - 1); i++) {
		randomsOneJcbCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		jcbJsonsContent.push('&nbsp; &nbsp; {<br>');
		jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
		jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "JCB",<br>');
		jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + jcbDigits.join('') +'",<br>');
    if( document.getElementById("randomNameCheckbox") )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
        }
    }
    else
    {
      jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
    }

    if( document.getElementById("randomAddressCheckbox") )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
        }
    }
    else
    {
      jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
    }

    if( document.getElementById("randomCountryCheckbox") )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
        }
    }
    else
    {
      jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
    }

    if( document.getElementById("randomCVVCheckbox") )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
        }
    }
    else
    {
      jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
    }

    jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');

    if( document.getElementById("randomDateCheckbox") )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      		if(monthRandomed<10){jcbJsonsContent.push('0')};
      		jcbJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
        }
    }
    else
    {
      jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
  		if(monthRandomed<10){jcbJsonsContent.push('0')};
  		jcbJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
    }


		jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
		jcbJsonsContent.push('&nbsp; &nbsp; },<br>');
	};

	randomsOneJcbCardNumber();
	randomsANameAndAddress();
	/*jcbJsonsContent.push('&nbsp; &nbsp; {<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "JCB",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + jcbDigits.join('') +'",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
	if(monthRandomed<10){jcbJsonsContent.push('0')};
	jcbJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
  jcbJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
	jcbJsonsContent.push('&nbsp; &nbsp; }<br>');
  */
  jcbJsonsContent.push(']');

	$('#bulkGenerateModalBody p').html(jcbJsonsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>JCB CARD</span> IN <span>JSON</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "JCB_card.json", "text/plain");
	});

}

// generates JCB XMLs

function generatesJCBXMLs() {
	var jcbXMLsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	jcbXMLsContent.push('&#x0003C;root&#x0003E;<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneJcbCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		jcbXMLsContent.push('&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>');
		jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;JCB&#x0003C;/IssuingNetwork&#x0003E;<br>');
		jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + jcbDigits.join('') +'&#x0003C;/CardNumber&#x0003E;<br>');

    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
        }
    }
    else
    {
        jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
        }
    }
    else
    {
        jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
        }
    }
    else
    {
        jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
        }
    }
    else
    {
        jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
    }

    jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        }
    }
    else
    {
        jcbXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        if(monthRandomed<10){jcbXMLsContent.push('0')};
    		jcbXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp&#x0003E;<br>');
    }


		jcbXMLsContent.push('&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>');
	};
	jcbXMLsContent.push('&#x0003C;/root&#x0003E;');

	$('#bulkGenerateModalBody p').html(jcbXMLsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>JCB CARD</span> IN <span>XML</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "JCB_card.xml", "text/plain");
	});

}

// generates JCB CSVs

function generatesJCBCSVs() {
	var jcbCSVsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

  if( document.getElementById("randomNameCheckbox")  )
  {
      if( document.getElementById("randomNameCheckbox").checked )
      {
        var keyName = ',Name';

      }
      else {
        var keyName = ''
      }
  }
  else
  {
      var keyName = ',Name';

  }

  if( document.getElementById("randomAddressCheckbox")  )
  {
      if( document.getElementById("randomAddressCheckbox").checked )
      {
        var keyAddress = ',Address';
        ;
      }
      else {
        var keyAddress = '';
      }
  }
  else
  {
      var keyAddress = ',Address';

  }

  if( document.getElementById("randomCountryCheckbox")  )
  {
      if( document.getElementById("randomCountryCheckbox").checked )
      {
        var keyCountry = ',Country';

      }
      else {
        var keyCountry = '';
      }
  }
  else
  {
      var keyCountry = ',Country';
  }

  if( document.getElementById("randomCVVCheckbox")  )
  {
      if( document.getElementById("randomCVVCheckbox").checked )
      {
        var keyCVV = ',CVV';
      }
      else {
        var keyCVV = '';
      }
  }
  else
  {
      var keyCVV = ',CVV';
  }

  if( document.getElementById("randomDateCheckbox")  )
  {
      if( document.getElementById("randomDateCheckbox").checked )
      {
        var keyExp = ',Exp';
      }
      else {
        var keyExp = '';
      }
  }
  else
  {
      var keyExp = ',Exp';
  }

  jcbCSVsContent.push('IssuingNetwork,CardNumber'+keyName+''+keyAddress+''+keyCountry+''+keyCVV+',Limit'+keyExp+'<br>');


	for (var i = 0; i < numberOfCards; i++) {
		randomsOneJcbCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}

    if(keyName == '')
    {
      valName = '';
    }
    else {
      valName = ','+nameRandomed.join('') + ' ' + secondNameRandomed.join('');
    }

    if(keyAddress == '')
    {
      valAddress = '';
    }
    else {
      valAddress = ','+addressRandomed.join('');
    }

    if(keyCountry == '')
    {
      valCountry  = '';
    }
    else {
      valCountry = ','+coutryRandomed;
    }

    if(keyCVV == '')
    {
      valCVV  = '';
    }
    else {
      valCVV = ','+ Math.floor(Math.random()*900 + 100);
    }

    if(keyExp == '')
    {
      valExp  = '';
    }
    else {
      valExp = ',' + monthRandomed + '/' + yearRandomed.toString();
    }

    jcbCSVsContent.push('JCB,' + jcbDigits.join('') + '' + valName + '' + valAddress + '' + valCountry + '' + valCVV + ',' + Math.floor(Math.random()*4901 + 100) + '$' + '' + valExp + '<br>' );

	};

	$('#bulkGenerateModalBody p').html(jcbCSVsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>JCB CARD</span> IN <span>CSV</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "JCB_card.text", "text/plain");
	});

}


function generatesDinersClubJSONs() {
	var dinersClubJsonsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	dinersClubJsonsContent.push('[<br>');

	for (var i = 0; i < (numberOfCards - 1); i++) {
		randomsOneDinerClubCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		dinersClubJsonsContent.push('&nbsp; &nbsp; {<br>');
		dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
		dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Diners Club",<br>');
		dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + dinerDigits.join('') +'",<br>');
    if( document.getElementById("randomNameCheckbox") )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
        }
    }
    else
    {
      dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
    }

    if( document.getElementById("randomAddressCheckbox") )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
        }
    }
    else
    {
      dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
    }

    if( document.getElementById("randomCountryCheckbox") )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
        }
    }
    else
    {
      dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
    }

    if( document.getElementById("randomCVVCheckbox") )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
        }
    }
    else
    {
      dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
    }

    dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');

    if( document.getElementById("randomDateCheckbox") )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
      		if(monthRandomed<10){dinersClubJsonsContent.push('0')};
      		dinersClubJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
        }
    }
    else
    {
      dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
  		if(monthRandomed<10){dinersClubJsonsContent.push('0')};
  		dinersClubJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
    }


		dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
		dinersClubJsonsContent.push('&nbsp; &nbsp; },<br>');
	};

	randomsOneDinerClubCardNumber();
	randomsANameAndAddress();
	/*dinersClubJsonsContent.push('&nbsp; &nbsp; {<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "dinersClub",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + dinerDigits.join('') +'",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "');
	if(monthRandomed<10){dinersClubJsonsContent.push('0')};
	dinersClubJsonsContent.push(monthRandomed + '/' + yearRandomed.toString() +'"<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; }<br>');
	dinersClubJsonsContent.push('&nbsp; &nbsp; }<br>');
  */
	dinersClubJsonsContent.push(']');

	$('#bulkGenerateModalBody p').html(dinersClubJsonsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>DINERS CLUB CARD</span> IN <span>JSON</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "dinersClub_card.json", "text/plain");
	});

}


function generatesDinersClubXMLs() {
	var dinersClubXMLsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

	dinersClubXMLsContent.push('&#x0003C;root&#x0003E;<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneDinerClubCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}
		dinersClubXMLsContent.push('&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;<br>');
		dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Diners Club&#x0003C;/IssuingNetwork&#x0003E;<br>');
		dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + dinerDigits.join('') +'&#x0003C;/CardNumber&#x0003E;<br>');

    if( document.getElementById("randomNameCheckbox")  )
    {
        if( document.getElementById("randomNameCheckbox").checked )
        {
          dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
        }
    }
    else
    {
        dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;<br>');
    }

    if( document.getElementById("randomAddressCheckbox")  )
    {
        if( document.getElementById("randomAddressCheckbox").checked )
        {
          dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
        }
    }
    else
    {
        dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;<br>');
    }

    if( document.getElementById("randomCountryCheckbox")  )
    {
        if( document.getElementById("randomCountryCheckbox").checked )
        {
          dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
        }
    }
    else
    {
        dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;<br>');
    }

    if( document.getElementById("randomCVVCheckbox")  )
    {
        if( document.getElementById("randomCVVCheckbox").checked )
        {
          dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
        }
    }
    else
    {
        dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;<br>');
    }

    dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;<br>');

    if( document.getElementById("randomDateCheckbox")  )
    {
        if( document.getElementById("randomDateCheckbox").checked )
        {
          dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        }
    }
    else
    {
        dinersClubXMLsContent.push('&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp>');
        if(monthRandomed<10){dinersClubXMLsContent.push('0')};
    		dinersClubXMLsContent.push(monthRandomed + '/' + yearRandomed.toString() +'&#x0003C;/Exp&#x0003E;<br>');
    }



		dinersClubXMLsContent.push('&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;<br>');
	};
	dinersClubXMLsContent.push('&#x0003C;/root&#x0003E;');

	$('#bulkGenerateModalBody p').html(dinersClubXMLsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>DINERS CLUB CARD</span> IN <span>XML</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "Diners_club.xml", "text/plain");
	});

}

function generatesDinersClubCSVs() {
	var dinersClubCSVsContent = [];
	var numberOfCards = $('#numberOfEntriesHomePage').val();

  if( document.getElementById("randomNameCheckbox")  )
  {
      if( document.getElementById("randomNameCheckbox").checked )
      {
        var keyName = ',Name';

      }
      else {
        var keyName = ''
      }
  }
  else
  {
      var keyName = ',Name';

  }

  if( document.getElementById("randomAddressCheckbox")  )
  {
      if( document.getElementById("randomAddressCheckbox").checked )
      {
        var keyAddress = ',Address';
        ;
      }
      else {
        var keyAddress = '';
      }
  }
  else
  {
      var keyAddress = ',Address';

  }

  if( document.getElementById("randomCountryCheckbox")  )
  {
      if( document.getElementById("randomCountryCheckbox").checked )
      {
        var keyCountry = ',Country';

      }
      else {
        var keyCountry = '';
      }
  }
  else
  {
      var keyCountry = ',Country';
  }

  if( document.getElementById("randomCVVCheckbox")  )
  {
      if( document.getElementById("randomCVVCheckbox").checked )
      {
        var keyCVV = ',CVV';
      }
      else {
        var keyCVV = '';
      }
  }
  else
  {
      var keyCVV = ',CVV';
  }

  if( document.getElementById("randomDateCheckbox")  )
  {
      if( document.getElementById("randomDateCheckbox").checked )
      {
        var keyExp = ',Exp';
      }
      else {
        var keyExp = '';
      }
  }
  else
  {
      var keyExp = ',Exp';
  }

  dinersClubCSVsContent.push('IssuingNetwork,CardNumber'+keyName+''+keyAddress+''+keyCountry+''+keyCVV+',Limit'+keyExp+'<br>');

	for (var i = 0; i < numberOfCards; i++) {
		randomsOneDinerClubCardNumber();
		randomsANameAndAddress();
		if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
		{
				coutryRandomed = coutryRandomed;
		}
		else
		{
				 coutryRandomed = $('#personCountryInput').val();
		}

    if(keyName == '')
    {
      valName = '';
    }
    else {
      valName = ','+nameRandomed.join('') + ' ' + secondNameRandomed.join('');
    }

    if(keyAddress == '')
    {
      valAddress = '';
    }
    else {
      valAddress = ','+addressRandomed.join('');
    }

    if(keyCountry == '')
    {
      valCountry  = '';
    }
    else {
      valCountry = ','+coutryRandomed;
    }

    if(keyCVV == '')
    {
      valCVV  = '';
    }
    else {
      valCVV = ','+ Math.floor(Math.random()*900 + 100);
    }

    if(keyExp == '')
    {
      valExp  = '';
    }
    else {
      valExp = ',' + monthRandomed + '/' + yearRandomed.toString();
    }

		dinersClubCSVsContent.push('Diners Club,' + dinerDigits.join('') + '' + valName + '' + valAddress + '' + valCountry + '' + valCVV + ',' + Math.floor(Math.random()*4901 + 100) + '$' + '' + valExp + '<br>' );

	};

	$('#bulkGenerateModalBody p').html(dinersClubCSVsContent);
	$('#bulkGenerateModal .modal-title').html('BULK <span>DINERS CLUB CARD</span> IN <span>CSV</span> FORMAT');
	$('#bulkGenerateModal').modal('show');

	$( "#downloadButton" ).click(function() {
		var test123 = $('#bulkGenerateModalBody p').text();
		download(test123, "Diners_Club.text", "text/plain");
	});

}

// Buttons

// prevents input over 999

$('#numberOfEntriesHomePage').on('keyup keydown', function(e){
	if ($('#numberOfEntriesHomePage').val() > 999
        && e.keyCode != 46 // delete
        && e.keyCode != 8 // backspace
        ) {
		$('#numberOfEntriesHomePage').val(999);
}
});

// home page

$( "#buttonGenerateFileHomePage" ).click(function(event) {
	event.preventDefault();

	switch($('#typeOfCard').val()) {
		case "AE":
		switch($('#typeOfFile').val()) {
			case "JSON":
			generatesAmericanExpressJSONs();
			break;
			case "XML":
			generatesAmericanExpressXMLs();
			break;
			case "CSV":
			generatesAmericanCSVs();
		};
		break;
		case "D":
		switch($('#typeOfFile').val()) {
			case "JSON":
			generatesDiscoverJSONs();
			break;
			case "XML":
			generatesDiscoverXMLs();
			break;
			case "CSV":
			generatesDiscoverCSVs();
		};
		break;
		case "JCB":
		switch($('#typeOfFile').val()) {
			case "JSON":
			generatesJcbJSONs();
			break;
			case "XML":
			generatesJCBXMLs();
			break;
			case "CSV":
			generatesJCBCSVs();
		};
		break;
		case "MC":
		switch($('#typeOfFile').val()) {
			case "JSON":
			generatesMasterCardJSONs();
			break;
			case "XML":
			generatesMasterXMLs();
			break;
			case "CSV":
			generatesMasterCSVs();
		};
		break;
		case "V":
		switch($('#typeOfFile').val()) {
			case "JSON":
			generatesVisaJSONs();
			break;
			case "XML":
			generatesvisaXMLs();
			break;
			case "CSV":
			generatesVisaCSVs();
		};
		break;
		case "DC":
		switch($('#typeOfFile').val()) {
			case "JSON":
			generatesDinersClubJSONs();
			break;
			case "XML":
			generatesDinersClubXMLs();
			break;
			case "CSV":
			generatesDinersClubCSVs();
		};
		break;

	};
});

// visa bulk

$( "#visaBulkButton" ).click(function(event) {
	event.preventDefault();

	switch($('#typeOfFile').val()) {
		case "JSON":
		generatesVisaJSONs();
		break;
		case "XML":
		generatesvisaXMLs();
		break;
		case "CSV":
		generatesVisaCSVs();
	};
});

//master bulk

$( "#masterBulkButton" ).click(function(event) {
	event.preventDefault();
	switch($('#typeOfFile').val()) {
		case "JSON":
		generatesMasterCardJSONs();
		break;
		case "XML":
		generatesMasterXMLs();
		break;
		case "CSV":
		generatesMasterCSVs();
	};
});

// discover bulk

$( "#discoverBulkButton" ).click(function(event) {
	event.preventDefault();
	switch($('#typeOfFile').val()) {
		case "JSON":
		generatesDiscoverJSONs();
		break;
		case "XML":
		generatesDiscoverXMLs();
		break;
		case "CSV":
		generatesDiscoverCSVs();
	};
});

// american bulk

$( "#americanBulkButton" ).click(function(event) {
	event.preventDefault();
	switch($('#typeOfFile').val()) {
		case "JSON":
		generatesAmericanExpressJSONs();
		break;
		case "XML":
		generatesAmericanExpressXMLs();
		break;
		case "CSV":
		generatesAmericanCSVs();
	};
});

// JCB bulk

$( "#jcbBulkButton" ).click(function(event) {
	event.preventDefault();
	switch($('#typeOfFile').val()) {
		case "JSON":
		generatesJcbJSONs();
		break;
		case "XML":
		generatesJCBXMLs();
		break;
		case "CSV":
		generatesJCBCSVs();
	};
});



$( "#dinersClubBulkButton" ).click(function(event) {
	event.preventDefault();
	switch($('#typeOfFile').val()) {
		case "JSON":
		generatesDinersClubJSONs();
		break;
		case "XML":
		generatesDinersClubXMLs();
		break;
		case "CSV":
		generatesDinersClubCSVs();
	};
});


// first page -on option select- change OL

// generates American Express JSONs

function homeOLAmericanExpressJSONs() {
	var amerExpressJsonsContent = [];
	randomsOneAmericanExpressCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	amerExpressJsonsContent.push('<li>[</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; {</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "American Express",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + americanExpressDigits.join('') +'",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + exp.join('') + '</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>');
	amerExpressJsonsContent.push('<li>&nbsp; &nbsp; }</li>');
	amerExpressJsonsContent.push('<li>]</li>');

	$('#exampleCard').html(amerExpressJsonsContent);
}

// generates American Express XMLs

function homeOLAmericanExpressXMLs() {
	var amerExpressXMLsContent = [];
	randomsOneAmericanExpressCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	amerExpressXMLsContent.push('<li>&#x0003C;root&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;American Express&#x0003C;/IssuingNetwork&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + americanExpressDigits.join('') +'&#x0003C;/CardNumber&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;' + exp.join('') + '&#x0003C;/Exp></li>');
	amerExpressXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>');
	amerExpressXMLsContent.push('<li>&#x0003C;/root&#x0003E;</li>');

	$('#exampleCard').html(amerExpressXMLsContent);
}

// generates American CSVs

function homeOLAmericanCSVs() {
	var americanExpressCSVsContent = [];
	randomsOneAmericanExpressCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	americanExpressCSVsContent.push('<li>IssuingNetwork,CardNumber,Name,Address,Country,CVV,Limit,Exp</li>');
	americanExpressCSVsContent.push('<li>American Express,' + americanExpressDigits.join('') + ',' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') + ',' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) + ',' + coutryRandomed + ',' + Math.floor(Math.random()*900 + 100) + ',' + Math.floor(Math.random()*4901 + 100) + '$,' + exp.join('') + '</li>');

	$('#exampleCard').html(americanExpressCSVsContent);
}

//   generates Visa JSONs

function homeOLVisaJSONs() {
	var visaJsonsContent = [];
	randomsOneVisaNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	visaJsonsContent.push('<li>[</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; {</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Visa",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + visaDigits.join('') +'",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + exp.join('') + '</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>');
	visaJsonsContent.push('<li>&nbsp; &nbsp; }</li>');
	visaJsonsContent.push('<li>]</li>');

	$('#exampleCard').html(visaJsonsContent);
}

// generates Visa XMLs

function homeOLvisaXMLs() {
	var visaXMLsContent = [];
	randomsOneVisaNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	visaXMLsContent.push('<li>&#x0003C;root&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Visa&#x0003C;/IssuingNetwork&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + visaDigits.join('') +'&#x0003C;/CardNumber&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;</li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;' + exp.join('') + '&#x0003C;/Exp></li>');
	visaXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>');
	visaXMLsContent.push('<li>&#x0003C;/root&#x0003E;</li>');

	$('#exampleCard').html(visaXMLsContent);
}

// generates Visa CSVs

function homeOLVisaCSVs() {
	var visaCSVsContent = [];
	randomsOneVisaNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	visaCSVsContent.push('<li>IssuingNetwork,CardNumber,Name,Address,Country,CVV,Limit,Exp</li>');
	visaCSVsContent.push('<li>Visa,' + visaDigits.join('') + ',' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') + ',' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) + ',' + coutryRandomed + ',' + Math.floor(Math.random()*900 + 100) + ',' + exp.join('') + '</li>');

	$('#exampleCard').html(visaCSVsContent);
}

//   generates Master Card JSONs

function homeOLMasterCardJSONs() {
	var masterCardJsonsContent = [];
	randomsOneMasterCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	masterCardJsonsContent.push('<li>[</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; {</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Master Card",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + masterCardDigits.join('') +'",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + exp.join('') + '</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>');
	masterCardJsonsContent.push('<li>&nbsp; &nbsp; }</li>');
	masterCardJsonsContent.push('<li>]</li>');

	$('#exampleCard').html(masterCardJsonsContent);
}

// generates Master XMLs

function homeOLMasterXMLs() {
	var masterXMLsContent = [];
	randomsOneMasterCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	masterXMLsContent.push('<li>&#x0003C;root&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Master Card&#x0003C;/IssuingNetwork&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + masterCardDigits.join('') +'&#x0003C;/CardNumber&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;</li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;' + exp.join('') + '&#x0003C;/Exp></li>');
	masterXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>');
	masterXMLsContent.push('<li>&#x0003C;/root&#x0003E;</li>');

	$('#exampleCard').html(masterXMLsContent);
}

// generates Master CSVs

function homeOLMasterCSVs() {
	var MasterCSVsContent = [];
	randomsOneMasterCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	MasterCSVsContent.push('<li>IssuingNetwork,CardNumber,Name,Address,Country,CVV,Limit,Exp</li>');
	MasterCSVsContent.push('<li>Master Card,' + masterCardDigits.join('') + ',' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') + ',' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) + ',' + coutryRandomed + ',' + Math.floor(Math.random()*900 + 100) + ',' + Math.floor(Math.random()*4901 + 100) + '$,' + exp.join('') + '</li>');

	$('#exampleCard').html(MasterCSVsContent);
}

//   generates Discover JSONs

function homeOLDiscoverJSONs() {
	var discoverJsonsContent = [];
	randomsOneDiscoverCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	discoverJsonsContent.push('<li>[</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; {</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "Discover",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + discoverDigits.join('') +'",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + exp.join('') + '</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>');
	discoverJsonsContent.push('<li>&nbsp; &nbsp; }</li>');
	discoverJsonsContent.push('<li>]</li>');

	$('#exampleCard').html(discoverJsonsContent);
}

// generates Discover XMLs

function homeOLDiscoverXMLs() {
	var discoverXMLsContent = [];
	randomsOneDiscoverCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	discoverXMLsContent.push('<li>&#x0003C;root&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;Discover&#x0003C;/IssuingNetwork&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + discoverDigits.join('') +'&#x0003C;/CardNumber&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;</li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;' + exp.join('') + '&#x0003C;/Exp></li>');
	discoverXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>');
	discoverXMLsContent.push('<li>&#x0003C;/root&#x0003E;</li>');

	$('#exampleCard').html(discoverXMLsContent);
}

// generates Discover CSVs

function homeOLDiscoverCSVs() {
	var discoverCSVsContent = [];
	randomsOneDiscoverCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	discoverCSVsContent.push('<li>IssuingNetwork,CardNumber,Name,Address,Country,CVV,Limit,Exp</li>');
	discoverCSVsContent.push('<li>Discover,' + discoverDigits.join('') + ',' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') + ',' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) + ',' + coutryRandomed + ',' + Math.floor(Math.random()*900 + 100) + ',' + Math.floor(Math.random()*4901 + 100) + '$,' + exp.join('') + '</li>');

	$('#exampleCard').html(discoverCSVsContent);
}

//   generates JCB JSONs

function homeOLJcbJSONs() {
	var jcbJsonsContent = [];
	randomsOneJcbCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	jcbJsonsContent.push('<li>[</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; {</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; "CreditCard": {</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "IssuingNetwork": "JCB",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CardNumber": "' + jcbDigits.join('') +'",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Name": "' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Address": "' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Country": "' + coutryRandomed +'",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CVV": "' + Math.floor(Math.random()*900 + 100) +'",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Limit": "' + Math.floor(Math.random()*4901 + 100) +'$",</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Exp": "' + exp.join('') + '</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; }</li>');
	jcbJsonsContent.push('<li>&nbsp; &nbsp; }</li>');
	jcbJsonsContent.push('<li>]</li>');

	$('#exampleCard').html(jcbJsonsContent);
}

// generates JCB XMLs

function homeOLJCBXMLs() {
	var jcbXMLsContent = [];
	randomsOneJcbCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	jcbXMLsContent.push('<li>&#x0003C;root&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;CreditCard&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;IssuingNetwork&#x0003E;JCB&#x0003C;/IssuingNetwork&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CardNumber&#x0003E;' + jcbDigits.join('') +'&#x0003C;/CardNumber&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Name&#x0003E;' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') +'&#x0003C;/Name&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Address&#x0003E;' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) +'&#x0003C;/Address&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Country&#x0003E;' + coutryRandomed +'&#x0003C;/Country&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;CVV&#x0003E;' + Math.floor(Math.random()*900 + 100) +'&#x0003C;/CVV&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Limit&#x0003E;' + Math.floor(Math.random()*4901 + 100) +'$&#x0003C;/Limit&#x0003E;</li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &nbsp; &nbsp; &#x0003C;Exp&#x0003E;' + exp.join('') + '&#x0003C;/Exp></li>');
	jcbXMLsContent.push('<li>&nbsp; &nbsp; &#x0003C;/CreditCard&#x0003E;</li>');
	jcbXMLsContent.push('<li>&#x0003C;/root&#x0003E;</li>');

	$('#exampleCard').html(jcbXMLsContent);
}

// generates JCB CSVs

function homeOLJCBCSVs() {
	var jcbCSVsContent = [];
	randomsOneJcbCardNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	jcbCSVsContent.push('<li>IssuingNetwork,CardNumber,Name,Address,Country,CVV,Limit,Exp</li>');
	jcbCSVsContent.push('<li>JCB,' + jcbDigits.join('') + ',' + nameRandomed.join('') + ' ' + secondNameRandomed.join('') + ',' + addressRandomed.join('') + ' ' + Math.floor(Math.random()*150 + 1) + ',' + coutryRandomed + ',' + Math.floor(Math.random()*900 + 100) + ',' + Math.floor(Math.random()*4901 + 100) + '$,' + exp.join('') + '</li>');

	$('#exampleCard').html(jcbCSVsContent);
}

// changes OL when option is changed  AE JSON default

$(function() {
	homeOLAmericanExpressJSONs();
});

$('.homePageOptions').change(function(){

	switch($('#typeOfCard').val()) {
		case "AE":
		switch($('#typeOfFile').val()) {
			case "JSON":
			homeOLAmericanExpressJSONs();
			break;
			case "XML":
			homeOLAmericanExpressXMLs();
			break;
			case "CSV":
			homeOLAmericanCSVs();
		};
		break;
		case "D":
		switch($('#typeOfFile').val()) {
			case "JSON":
			homeOLDiscoverJSONs();
			break;
			case "XML":
			homeOLDiscoverXMLs();
			break;
			case "CSV":
			homeOLDiscoverCSVs();
		};
		break;
		case "JCB":
		switch($('#typeOfFile').val()) {
			case "JSON":
			homeOLJcbJSONs();
			break;
			case "XML":
			homeOLJCBXMLs();
			break;
			case "CSV":
			homeOLJCBCSVs();
		};
		break;
		case "MC":
		switch($('#typeOfFile').val()) {
			case "JSON":
			homeOLMasterCardJSONs();
			break;
			case "XML":
			homeOLMasterXMLs();
			break;
			case "CSV":
			homeOLMasterCSVs();
		};
		break;
		case "V":
		switch($('#typeOfFile').val()) {
			case "JSON":
			homeOLVisaJSONs();
			break;
			case "XML":
			homeOLvisaXMLs();
			break;
			case "CSV":
			homeOLVisaCSVs();
		};
		break;
	};
});

// Generate one credit card pages

// Visa page

$( "#visaSingleGenerate" ).click(function() {
	randomsOneVisaNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	$('#inputiRandomIssue').html('Visa');
	$('#inputiRandomCardNumber').html(visaDigits);
	$('#inputiRandomName').html(nameRandomed + ' ' + secondNameRandomed);
	$('#inputiRandomAdress').html(addressRandomed + ' ' + Math.floor(Math.random()*150 + 1));
	$('#inputiRandomCountry').html(coutryRandomed);
	$('#inputiRandomCVV').html(Math.floor(Math.random()*900 + 100));
	$('#inputiRandomLimit').html(Math.floor(Math.random()*4900 + 100) + '$');
	$('#inputiRandomExp').html(exp);
});

// American page

$( "#americanSingleGenerate" ).click(function() {
	randomsOneAmericanExpressCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	$('#inputiRandomIssue').html('American Express');
	$('#inputiRandomCardNumber').html(americanExpressDigits);
	$('#inputiRandomName').html(nameRandomed + ' ' + secondNameRandomed);
	$('#inputiRandomAdress').html(addressRandomed + ' ' + Math.floor(Math.random()*150 + 1));
	$('#inputiRandomCountry').html(coutryRandomed);
	$('#inputiRandomCVV').html(Math.floor(Math.random()*900 + 100));
	$('#inputiRandomLimit').html(Math.floor(Math.random()*4900 + 100) + '$');
	$('#inputiRandomExp').html(exp);
});

// Discover page

$( "#discoverSingleGenerate" ).click(function() {
	randomsOneDiscoverCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	$('#inputiRandomIssue').html('Discover');
	$('#inputiRandomCardNumber').html(discoverDigits);
	$('#inputiRandomName').html(nameRandomed + ' ' + secondNameRandomed);
	$('#inputiRandomAdress').html(addressRandomed + ' ' + Math.floor(Math.random()*150 + 1));
	$('#inputiRandomCountry').html(coutryRandomed);
	$('#inputiRandomCVV').html(Math.floor(Math.random()*900 + 100));
	$('#inputiRandomLimit').html(Math.floor(Math.random()*4900 + 100) + '$');
	$('#inputiRandomExp').html(exp);
});

// JCB page

$( "#jcbSingleGenerate" ).click(function() {
	randomsOneJcbCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	$('#inputiRandomIssue').html('JCB');
	$('#inputiRandomCardNumber').html(jcbDigits);
	$('#inputiRandomName').html(nameRandomed + ' ' + secondNameRandomed);
	$('#inputiRandomAdress').html(addressRandomed + ' ' + Math.floor(Math.random()*150 + 1));
	$('#inputiRandomCountry').html(coutryRandomed);
	$('#inputiRandomCVV').html(Math.floor(Math.random()*900 + 100));
	$('#inputiRandomLimit').html(Math.floor(Math.random()*4900 + 100) + '$');
	$('#inputiRandomExp').html(exp);
});

// Master page

$( "#masterSingleGenerate" ).click(function() {
	randomsOneMasterCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	$('#inputiRandomIssue').html('Master Card');
	$('#inputiRandomCardNumber').html(masterCardDigits);
	$('#inputiRandomName').html(nameRandomed + ' ' + secondNameRandomed);
	$('#inputiRandomAdress').html(addressRandomed + ' ' + Math.floor(Math.random()*150 + 1));
	$('#inputiRandomCountry').html(coutryRandomed);
	$('#inputiRandomCVV').html(Math.floor(Math.random()*900 + 100));
	$('#inputiRandomLimit').html(Math.floor(Math.random()*4900 + 100) + '$');
	$('#inputiRandomExp').html(exp);
});

//randoms one card on load for generate pages

$(function() {
	if ($('#visaSingleGenerate')) {$('#visaSingleGenerate').trigger('click');};
	if ($('#masterSingleGenerate')) {$('#masterSingleGenerate').trigger('click');};
	if ($('#discoverSingleGenerate')) {$('#discoverSingleGenerate').trigger('click');};
	if ($('#americanSingleGenerate')) {$('#americanSingleGenerate').trigger('click');};
	if ($('#jcbSingleGenerate')) {$('#jcbSingleGenerate').trigger('click');};
});

// home page random lists

$("#randomVisaNumbersUl li").each(function(){
	randomsOneVisaNumber();
	$(this).text(visaDigits.join(''));
});

$("#randomMasterCardNumbersUl li").each(function(){
	randomsOneMasterCardNumber();
	$(this).text(masterCardDigits.join(''));
});

$("#randomDiscoverNumbersUl li").each(function(){
	randomsOneDiscoverCardNumber();
	$(this).text(discoverDigits.join(''));
});
$("#randomAmericanExpressNumbersUl li").each(function(){
	randomsOneAmericanExpressCardNumber();
	$(this).text(americanExpressDigits.join(''));
});
$("#randomJcbNumbersUl li").each(function(){
	randomsOneJcbCardNumber();
	$(this).text(jcbDigits.join(''));
});

// Validator

$( "#validateButton" ).click(function(event) {
	event.preventDefault();
	$('#cardImagesRow > div').removeClass('darkPic');
	var sumOfDigits = 0;
	var inputNumber = $('#validateInput').val().toString();
	var inputNumberReversed = $('#validateInput').val().toString().split("").reverse();
	for (var i = 0; i < inputNumberReversed.length; i++) {
		if (i % 2 == 0) {
			sumOfDigits += parseInt(inputNumberReversed[i]);
		}else {
			var digitSum = (parseInt(inputNumberReversed[i]) * 2);
			if (digitSum>9){digitSum-=9;};
			sumOfDigits+=digitSum;
		}
	};

	if (sumOfDigits % 10 == 0) {

		$('#underFirstRow2 p').html('The credit card number you entered  <strong>passed</strong>  the Luhn Check and is therefore a valid credit card number!');
		$('#underFirstRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Luhn Algorithm Check <span class="fa fa-check-circle validluhn" style="color: #28a745; font-size:18px ;display: inline-block;"></span>');
		$('#underSecondRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Major Industry Identifier');

		switch(inputNumber[0]) {
			case "0":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>ISO/TC 68 and other industry assignments</strong> industry.');
			$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			break;
			case "1":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Airlines</strong> industry.');
			$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			break;
			case "2":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Airlines, financial and other future industry assignments</strong> industry.');
			$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			break;
			case "3":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Travel and entertainment and banking and financial</strong> industry.');
			if ( ((parseInt(inputNumber.slice(0,4))) >= 3528 && (parseInt(inputNumber.slice(0,4))) <= 3589) && (inputNumber.length == 16) ){
				$('#underThirdRow2 p').html("This credit card's issuer is <strong>JCB</strong>.");
				$('#cardImagesRow > div').addClass('darkPic');
				$('#smallCardImageJCB').removeClass('darkPic');
				$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
				$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
				$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
			}else
			{
				if ( ((parseInt(inputNumber.slice(0,2))) == 34 || (parseInt(inputNumber.slice(0,2))) == 37) && (inputNumber.length == 15) ) {
					$('#underThirdRow2 p').html("This credit card's issuer is <strong>American Express</strong>.");
					$('#cardImagesRow > div').addClass('darkPic');
					$('#smallCardImageAmerican').removeClass('darkPic');
					$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
					$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
					$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
				}else
				{
					if ( ((parseInt(inputNumber.slice(0,2))) == 36 || parseInt(inputNumber.slice(0,1)) == 5 || (parseInt(inputNumber.slice(0,2))) == 38 || (parseInt(inputNumber.slice(0,2))) == 39 || ((parseInt(inputNumber.slice(0,3))) >= 300  && (parseInt(inputNumber.slice(0,3))) <= 305) ) && ( (inputNumber.length == 14) || (inputNumber.length == 16) ) ) {
						$('#underThirdRow2 p').html("This credit card's issuer is <strong>Diners</strong>.");
						$('#cardImagesRow > div').addClass('darkPic');
						$('#smallCardImageDiners').removeClass('darkPic');
						$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
						$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
						$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
					}else{
						$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
						$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
						$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
						$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
					}
				}
			}
			break;
			case "4":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Banking and financial</strong> industry.');
			if ( (inputNumber.length >= 13) && (inputNumber.length <= 16) ) {
				$('#underThirdRow2 p').html("This credit card's issuer is <strong>Visa</strong>.");
				$('#cardImagesRow > div').addClass('darkPic');
				$('#smallCardImageVisa').removeClass('darkPic');
				$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
				$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
				$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
			}
			else {
				$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
				$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
				$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
				$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			}
			break;
			case "5":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Banking and financial</strong> industry.');
			if ( ((parseInt(inputNumber.slice(0,2))) >= 51 && (parseInt(inputNumber.slice(0,2))) <= 55) && ( (inputNumber.length >= 16) && (inputNumber.length <= 19) ) ) {
				$('#underThirdRow2 p').html("This credit card's issuer is <strong>Master Card</strong>.");
				$('#cardImagesRow > div').addClass('darkPic');
				$('#smallCardImageMaster').removeClass('darkPic');
				$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
				$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
				$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
			}else
			{
				if ( ( ((parseInt(inputNumber.slice(0,2))) >= 56 && (parseInt(inputNumber.slice(0,2))) <= 58) || (parseInt(inputNumber.slice(0,2))) == 50) && ( (inputNumber.length >= 16) && (inputNumber.length <= 19) ) ) {
					$('#underThirdRow2 p').html("This credit card's issuer is <strong>Maestro</strong>.");
					$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
					$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
					$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
				}else {
					$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
					$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
					$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
					$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
				}
			}

			break;
			case "6":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Merchandising and banking/financial</strong> industry.');
			if ( ((parseInt(inputNumber.slice(0,4))) == 6011 || ((parseInt(inputNumber.slice(0,6))) >= 622126 && (parseInt(inputNumber.slice(0,6))) >= 622925 ) || ((parseInt(inputNumber.slice(0,3))) >= 644 && (parseInt(inputNumber.slice(0,3))) >= 649) || (parseInt(inputNumber.slice(0,2))) == 65  ) && (inputNumber.length == 16) ) {
				$('#underThirdRow2 p').html("This credit card's issuer is <strong>Discover</strong>.");
				$('#cardImagesRow > div').addClass('darkPic');
				$('#smallCardImageDiscover').removeClass('darkPic');
				$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number');
				$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number');
				$('#underFourthRow2 p').html("Your personal account number is <strong>" + inputNumber.slice(6,(inputNumber.length-1)) + "</strong> and your checksum is <strong>" + inputNumber.slice((inputNumber.length-1),inputNumber.length) + "</strong>.");
			}else {
				$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
				$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
				$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
				$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			}
			break;
			case "7":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Petroleum and other future industry assignments</strong> industry.');
			$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			break;
			case "8":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>Healthcare, telecommunications and other future industry assignments</strong> industry.');
			$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			break;
			case "9":
			$('#underSecondRow2 p').html('This credit card number belongs to the <strong>For assignment by national standards bodies</strong> industry.');
			$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number<span class="glyphicon glyphicon-remove iconnoiin" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number<span class="glyphicon glyphicon-remove iconnopa" style="color: red; display: inline-block;"></span>');
			$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
			break;
		}
	}else {
		$('#underFirstRow2 p').html("The credit card number you entered <strong style='color:#dc3545 !important;font-weight:700'>failed</strong> the Luhn Check. It's not valid, did you make a typo?");
		$('#underFirstRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Luhn Algorithm Check <span class="fa fa-times novalidluhn" style="color: red; display: inline-block;"></span>');
		$('#underSecondRow2 p').html("We couldn't find a major industry that matched your credit card number. Sorry.");
		$('#underSecondRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Major Industry Identifier <span class="fa fa-exclamation-circle iconmii" style="color: blue; display: none;"></span><span class="fa fa-times iconnomii" style="color: red; display: inline-block;"></span>');
		$('#underThirdRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
		$('#underThirdRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Issuer identification number <span class="fa fa-times iconnoiin" style="color: red; display: inline-block;"></span>');
		$('#underFourthRow1 h3').html('<img class="img-fluid" src="assets/images/credit-card.png" width="24" /> &nbsp;Personal Account Number <span class="fa fa-times iconnopa" style="color: red; display: inline-block;"></span>');
		$('#underFourthRow2 p').html("We couldn't find an institution that matched your credit card number. Sorry.");
	}
});


//Functions to Retrive Data


function getVisa()
{
	randomsOneVisaNumber();
	randomsANameAndAddress();

	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	var creditData = {};

	creditData['card_name'] = 'Visa';
	creditData['card_number'] = visaDigits.join('');
	creditData['card_person_name'] = nameRandomed + ' ' + secondNameRandomed;
	creditData['card_person_address'] = addressRandomed + ' ' + Math.floor(Math.random()*150 + 1);

	if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
	{
			creditData['card_person_country'] = coutryRandomed.join('');
	}
	else
	{
		   creditData['card_person_country'] = $('#personCountryInput').val();
	}

	creditData['card_ccv'] = Math.floor(Math.random()*900 + 100);
	creditData['card_limit'] = Math.floor(Math.random()*4900 + 100) + '$';
	creditData['exp'] = exp.join('');
	return creditData;

}

function getAmericanExpress(){
	randomsOneAmericanExpressCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	var creditData = {};

	creditData['card_name'] = 'American Express';
	creditData['card_number'] = americanExpressDigits.join('');
	creditData['card_person_name'] = nameRandomed + ' ' + secondNameRandomed;
	creditData['card_person_address'] = addressRandomed + ' ' + Math.floor(Math.random()*150 + 1);
	if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
	{
			creditData['card_person_country'] = coutryRandomed.join('');
	}
	else
	{
			 creditData['card_person_country'] = $('#personCountryInput').val();
	}
	creditData['card_ccv'] = Math.floor(Math.random()*900 + 100);
	creditData['card_limit'] = Math.floor(Math.random()*4900 + 100) + '$';
	creditData['exp'] = exp.join('');
	return creditData;
}


function getDiscover(){
	randomsOneDiscoverCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	var creditData = {};

	creditData['card_name'] = 'Discover';
	creditData['card_number'] = discoverDigits.join('');
	creditData['card_person_name'] = nameRandomed + ' ' + secondNameRandomed;
	creditData['card_person_address'] = addressRandomed + ' ' + Math.floor(Math.random()*150 + 1);
	if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
	{
			creditData['card_person_country'] = coutryRandomed.join('');
	}
	else
	{
			 creditData['card_person_country'] = $('#personCountryInput').val();
	}
	creditData['card_ccv'] = Math.floor(Math.random()*900 + 100);
	creditData['card_limit'] = Math.floor(Math.random()*4900 + 100) + '$';
	creditData['exp'] = exp.join('');
	return creditData;

}

// JCB page

function getJCB(){
	randomsOneJcbCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	var creditData = {};

	creditData['card_name'] = 'JCB';
	creditData['card_number'] = jcbDigits.join('');
	creditData['card_person_name'] = nameRandomed + ' ' + secondNameRandomed;
	creditData['card_person_address'] = addressRandomed + ' ' + Math.floor(Math.random()*150 + 1);
	if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
	{
			creditData['card_person_country'] = coutryRandomed.join('');
	}
	else
	{
			 creditData['card_person_country'] = $('#personCountryInput').val();
	}
	creditData['card_ccv'] = Math.floor(Math.random()*900 + 100);
	creditData['card_limit'] = Math.floor(Math.random()*4900 + 100) + '$';
	creditData['exp'] = exp.join('');
	return creditData;

}

// Master page

function getMasterCard(){
 	randomsOneMasterCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	var creditData = {};

	creditData['card_name'] = 'Master Card';
	creditData['card_number'] = masterCardDigits.join('');
	creditData['card_person_name'] = nameRandomed + ' ' + secondNameRandomed;
	creditData['card_person_address'] = addressRandomed + ' ' + Math.floor(Math.random()*150 + 1);
	if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
	{
			creditData['card_person_country'] = coutryRandomed.join('');
	}
	else
	{
			 creditData['card_person_country'] = $('#personCountryInput').val();
	}
	creditData['card_ccv'] = Math.floor(Math.random()*900 + 100);
	creditData['card_limit'] = Math.floor(Math.random()*4900 + 100) + '$';
	creditData['exp'] = exp.join('');
	return creditData;

}

function getDinerClub(){
 	randomsOneDinerClubCardNumber();
	randomsANameAndAddress();
	var exp = [];
	if(monthRandomed<10){exp.push('0')};
	exp.push(monthRandomed + '/' + yearRandomed.toString());

	var creditData = {};

	creditData['card_name'] = 'Diners Club';
	creditData['card_number'] = dinerDigits.join('');
	creditData['card_person_name'] = nameRandomed + ' ' + secondNameRandomed;
	creditData['card_person_address'] = addressRandomed + ' ' + Math.floor(Math.random()*150 + 1);
	if( $('#personCountryInput').val() == '' || $('#personCountryInput').val() == null || $('#personCountryInput').val() == 'null' )
	{
			creditData['card_person_country'] = coutryRandomed.join('');
	}
	else
	{
			 creditData['card_person_country'] = $('#personCountryInput').val();
	}
	creditData['card_ccv'] = Math.floor(Math.random()*900 + 100);
	creditData['card_limit'] = Math.floor(Math.random()*4900 + 100) + '$';
	creditData['exp'] = exp.join('');
	return creditData;

}
