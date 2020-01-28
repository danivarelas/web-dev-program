import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit, OnChanges {

    iconWidth: number;
    @Input() bar: number;
    @Output() barClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(): void {
        this.updateWidth();
    }

    ngOnChanges(): void {
        this.updateWidth();
    }

    private updateWidth(): void {
        this.iconWidth = this.bar * 52 / 5;
    }

    onClick(): void {
        this.barClicked.emit('The bar ' + this.bar + ' was clicked!');
    }

}
