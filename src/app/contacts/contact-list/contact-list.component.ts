import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  private subscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contacts = this.contactService.getContacts();
     this.contactService.contactChangedEvent.subscribe((contacts: Contact[]) => {
      this.contacts = contacts.slice();
    });

    this.subscription = this.contactService.contactListChangedEvent
    .subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
