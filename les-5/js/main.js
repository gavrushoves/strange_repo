class Account {
	constructor(typeOfCard, numberOfcard, pin, balance, dateOfcreate, owner, typeOfUser) {
		this._typeOfCard = typeOfCard;
		this._numberOfcard = numberOfcard;
		this._pin = pin;
		this._balance = balance;
		this._dateOfcreate = dateOfcreate;
		this._owner = owner;
		this._typeOfUser = typeOfUser;
	}

	get typeOfCard() {
		return this._typeOfCard;
	}
	set typeOfCard(val) {
		this._typeOfCard = val;
	}

	get numberOfcard() {
		return this._numberOfcard;
	}
	set numberOfcard(val) {
		this._numberOfcard = val;
	}

	get pin() {
		return this._pin;
	}
	set pin(val) {
		this._pin = val;
	}

	get balance() {
		return this._balance;
	}
	set balance(val) {
		this._balance = val;
	}

	get dateOfcreate() {
		return this._dateOfcreate;
	}
	set dateOfcreate(val) {
		this._dateOfcreate = val;
	}

	get owner() {
		return this._owner;
	}
	set owner(val) {
		this._owner = val;
	}

	get typeOfUser() {
		return this._typeOfUser;
	}
	set typeOfUser(val) {
		this._typeOfUser = val;
	}
	toString() {
		console.log(`значения "${this._typeOfCard}" "${this._numberOfcard}" "${this._pin}" "${this._balance}" "${this._dateOfcreate}" "${this._owner}" "${this._typeOfUser}" `)
	}
}


// Расчетный счет

class checkingAccount extends Account {
	constructor(typeOfCard, numberOfcard, pin, balance, dateOfcreate, owner, typeOfUser, typeOfMoney, dateOfend, location) {
		super(typeOfCard, numberOfcard, pin, balance, dateOfcreate, owner, typeOfUser);
		this._typeOfMoney = typeOfMoney;
		this._dateOfend = dateOfend;
		this._location = location;
	}

	get typeOfMoney() {
		return this._typeOfMoney;
	}
	set typeOfMoney(val) {
		this._typeOfMoney = val;
	}

	get dateOfend() {
		return this._dateOfend;
	}
	set dateOfend(val) {
		this._dateOfend = val;
	}

	get location() {
		return this._location;
	}
	set location(val) {
		this._location = val;
	}

  toString(){
  	console.log(`значения "${this._typeOfCard}" "${this._numberOfcard}" "${this._pin}" "${this._balance}" "${this._dateOfcreate}" "${this._owner}" "${this._typeOfUser}" "${this._typeOfMoney}" "${this._dateOfend}" "${this._location}" `)
  } 
}

// Накопительный счет

class savingsAccount extends Account {
	constructor(typeOfCard, numberOfcard, pin, balance, dateOfcreate, owner, typeOfUser, typeOfDeposit, percent, minDeposit) {
		super(typeOfCard, numberOfcard, pin, balance, dateOfcreate, owner, typeOfUser);
		this._typeOfDeposit = typeOfDeposit;
		this._percent = percent;
		this._minDeposit = minDeposit;
	}

	get typeOfDeposit() {
		return this._typeOfDeposit;
	}
	set typeOfDeposit(val) {
		this._typeOfDeposit = val;
	}

	get percent() {
		return this._percent;
	}
	set percent(val) {
		this._percent = val;
	}

	get minDeposit() {
		return this._minDeposit;
	}
	set minDeposit(val) {
		this._minDeposit = val;
	}

  toString(){
  	console.log(`значения "${this._typeOfCard}" "${this._numberOfcard}" "${this._pin}" "${this._balance}" "${this._dateOfcreate}" "${this._owner}" "${this._typeOfUser}" "${this._typeOfDeposit}" "${this._percent}" "${this._minDeposit}" `)
  } 
}


// Тесты
var a = new checkingAccount(1,2,3,4,5,6,7,8,9,10);
console.log(a.toString());
var b = new savingsAccount(1,2,3,4,5,6,7,21,11,12);
console.log(b.toString());
var с = new Account(1,2,3,4,5,6,7);
console.log(с.toString());