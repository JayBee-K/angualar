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

    public ngOnInit(): void {}
}
