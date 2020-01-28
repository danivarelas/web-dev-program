import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    /*template: `
        <div>
            <h1> {{ title }} </h1>
            <div>Mi first component</div>
        </div>
    `*/
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = 'Angular Demo';
}
