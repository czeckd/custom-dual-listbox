import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	/* tslint:disable quotemark */
	static tube:Array<string> = [
		"Harrow & Wealdstone",
		"Kenton",
		"South Kenton",
		"North Wembley",
		"Wembley Central",
		"Stonebridge Park",
		"Harlesden",
		"Willesden Junction",
		"Kensal Green",
		"Queen's Park",
		"Kilburn Park",
		"Maida Vale",
		"Warwick Avenue",
		"Paddington",
		"Edgware Road",
		"Marylebone",
		"Baker Street",
		"Regent's Park",
		"Oxford Circus",
		"Piccadilly Circus",
		"Charing Cross",
		"Embankment",
		"Waterloo",
		"Lambeth North",
		"Elephant & Castle"
	];
	/* tslint:enable quotemark */

	target = [];

	message;
	source = AppComponent.tube;

	compare(a:any, b:any) {
		const arr = AppComponent.tube;
		return arr.indexOf(a._id) - arr.indexOf(b._id);
	}

	showMessage(e:any) {
		this.message = { selectChange: e };
	}
}

