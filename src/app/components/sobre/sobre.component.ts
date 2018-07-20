import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  selectedTab: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.loadTab();
  }

  private loadTab(): void {
    this.route.params.subscribe((parametro: Params) => {
      const idTab = parametro.tab;
      if (idTab === undefined) {
        this.selectedTab = 'sobre';
      } else if (idTab === 'privacidade' || idTab === 'termos') {
        this.selectedTab = idTab;
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  changeTab($event: NgbTabChangeEvent): void {
    if ($event.nextId === 'sobre') {
      this.router.navigate(['/sobre']);
    } else {
      this.router.navigate(['/sobre/' + $event.nextId]);
    }
  }

}
