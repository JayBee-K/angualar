import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public arrFruit = [
        'Táo',
        'Bưởi',
        'Cam',
    ]

    public objFruit = [
        {
            name: 'Táo',
            price: 19000,
            sale: true
        },
        {
            name: 'Bưởi',
            price: 21000,
            sale: true
        },
        {
            name: 'Cam',
            price: 22000,
            sale: false
        },
        {
            name: 'Quýt',
            price: -15000,
            sale: true
        },
    ]

    public ngOnInit(): void {
    }
}
