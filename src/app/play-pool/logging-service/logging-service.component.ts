import { Component } from '@angular/core';

@Component({
  selector: 'app-logging-service',
  templateUrl: './logging-service.component.html',
  styleUrls: ['./logging-service.component.css']
})
export class LoggingServiceComponent {

accounts = [
  {
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Test Account',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }
];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
