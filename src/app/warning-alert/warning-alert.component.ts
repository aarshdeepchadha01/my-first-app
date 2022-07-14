import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
    <p>This is the warning, you are in danger</p>
    `,
    styles: [
        `p {
            padding: 20px;
            background-color: red;
            border: 1px black;
        }`
    ]

})
export class WarningAlertComponent{

}