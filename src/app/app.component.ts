import { Component, OnInit } from "@angular/core";
import Deck from "./../classes/Deck";
import ICard from "./../interfaces/ICard";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	// write your component code here; create the properties and methods you need to get the job
	// done as described in "app.html"; start by importing modules you need such as "./../classes/Deck"

	private _deck:Deck;

	constructor() {
		this._deck= new Deck;
		this.myHand = [];
	}

	public myHand:ICard[];

	drawCard(){
		this.myHand.unshift(this._deck.drawCard());
	}

	getDeckCardCount(){
		return this._deck.getCardCount();
	}

	lifeBarHeight(){
		const baseHeight = 100;

		return this._deck.getCardCount() / this._deck.getMaxCardCount() * baseHeight;
	}

	returnCard(card){
		this._deck.returnCardToDeck(card);
		this.myHand.splice(this.myHand.indexOf(card), 1);
	}

	public getLastPickedCardLabel(): string {
		if (!this.myHand.length) return;

		const lastPickedCard = this.myHand[0];

		return lastPickedCard.rank + " of " + lastPickedCard.suit;
	}

	public ngOnInit():void {

	}
}
