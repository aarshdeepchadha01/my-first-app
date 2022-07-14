import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline'; // you can also write it like this


    getServerStatus() {
        return this.serverStatus;
    }
}  

