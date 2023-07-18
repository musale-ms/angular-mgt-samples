import { Component, OnInit } from '@angular/core';
import { Providers, Msal2Provider, TemplateHelper } from '@microsoft/mgt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Providers.globalProvider = new Msal2Provider({
      clientId: 'YOUR CLIENT ID',
    });
    TemplateHelper.setBindingSyntax('[[', ']]');
  }
}
