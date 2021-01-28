import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedCDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document('1', 'mannie', 'Make Money', 'https://byui.instructure.com', null),
    new Document('2', 'stien', 'Make Money', 'https://byui.instructure.com', null),
    new Document('3', 'CIT', 'Make Money', 'https://byui.instructure.com', null),
    new Document('4', 'Sam', 'Make Money', 'https://byui.instructure.com', null),
    new Document('5', 'Jane', 'Make Money', 'https://byui.instructure.com', null),
    new Document('6', 'Prince', 'Make Money', 'https://byui.instructure.com', null),
    new Document('7', 'Kyla', 'Make Money', 'https://byui.instructure.com', null)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedCDocumentEvent.emit(document);
  }
}
