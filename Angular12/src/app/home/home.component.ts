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
            sale: true,
            date: '2023-12-20',
        },
        {
            name: 'Bưởi',
            price: 21000,
            sale: true,
            date: '2023-12-20',
        },
        {
            name: 'Cam',
            price: 22000,
            sale: false,
            date: '2023/12/20',
        },
        {
            name: 'Quýt',
            price: -15000,
            sale: true,
            date: '2023-12-20',
        },
    ]

    public objCities = [
        {
            name: 'Cần Thơ',
            district: [
                'Quận Ninh Kiều',
                'Quận Cái Răng',
                'Quận Bình Thuỷ',
                'Huyện Phong Điền',
                'Huyện Ô Môn',
            ]
        }, {
            name: 'Sóc Trăng',
            district: [
                'Huyện Trần Đề',
                'Huyện Kế Sách',
                'Huyện Mỹ Xuyên',
                'Huyện Châu Thành',
            ]
        }
    ]
}
