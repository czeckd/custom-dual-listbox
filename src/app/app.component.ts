import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	
	target = [];
	key = 'id';
	display = 'station';
	

	sourceCustom=[
			{
				"id": 1,
				"station": "Antonito",
				"state": "CO"
			},
			{
				"id": 2,
				"station": "Big Horn",
				"state": "NM"
			},
			{
				"id": 3,
				"station": "Sublette",
				"state": "NM"
			},
			{
				"id": 4,
				"station": "Toltec",
				"state": "NM"
			},
			{
				"id": 5,
				"station": "Osier",
				"state": "CO"
			}
		]

	message;

	compare(a: any, b: any) {
		const arr =this.sourceCustom;
		return arr.indexOf(a._id) - arr.indexOf(b._id);
	}

	showMessage(e: any) {
		this.message = { selectChange: e };
	}
}

