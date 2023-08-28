import { Injectable } from "@angular/core";

@Injectable()
export class MyLogService {

    LogMessage(name: string, price: number) {
        console.log('New Course with title "' + name + '" and price "' + price + '" has been added');

    }
}