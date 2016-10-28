import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    players = [];
    newPlayerName = '';

    public addPlayer() {
        if (!this.newPlayerName) {
            return false;
        }

        this.players.push({
            name: this.newPlayerName,
            level: 1,
        })

        this.newPlayerName = '';
    }

    public incrementLevel(player) {
        player.level += 1;
    }

    public decrementLevel(player) {
        if (player.level > 1) {
            player.level -= 1;
        }
    }

    public removePlayer(player) {
        this.players.splice(this.players.indexOf(player), 1);
    }

    public sortPlayers() {
        this.players.sort((a, b) => {
            if (a.level > b.level) {
                return -1
            } else if (a.level < b.level) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}
