import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { LoggingServiceComponent } from '../logging-service.component';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingServiceComponent]
  // providers: [LoggingService, AccountsService]

   providers: [LoggingService]

})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // constructor(private loggingService: LoggingServiceComponent) {}
   constructor(private loggingService: LoggingService,
               private accountsService: AccountsService) {}



  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);

    this.accountsService.statusUpdated.emit(status);

    console.log ('A server status changed, new status: ' + status);
  }

}
