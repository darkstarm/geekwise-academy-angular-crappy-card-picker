import ICard from "./../interfaces/ICard";

export default class Deck {
	private _maxCardsInDeck: number = 52;
	private _cards:ICard[];
	private readonly _cardRanks:string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	private readonly _cardSuits:string[] = ["♡", "♤", "♧", "♢"];

	private _buildCards():void {
		this._cardRanks.forEach(rank => {
			this._cardSuits.forEach(suit => {
				this._cards.push({
					rank,
					suit
				});
			});
		});

		this._maxCardsInDeck = this._cards.length;
		this._consoleCardCount();
	}

	private _consoleCardCount(){
		console.log((this._cards.length) + " cards counted in deck.")
	}

	constructor() {
		console.log("Deck instantiated.");

		this._cards = [];
		this._buildCards();
	}

	public drawCard():ICard {
		const randomCardIndex = Math.floor(Math.random() * this._cards.length);   // fancy psuedo-random stuff
		const card = this._cards[randomCardIndex];                                // fetch myself a reference to the card I'm drawing
		this._cards.splice(randomCardIndex, 1);                                   // remove it from the array so it won't be drawn again

		return card;
	}

	public getCardCount(){
		return this._cards.length;
	}

	public getMaxCardCount(){
		return this._maxCardsInDeck;
	}

	public returnCardToDeck(card:ICard):void {
		this._cards.push(card);
		this._consoleCardCount();
	}
}
