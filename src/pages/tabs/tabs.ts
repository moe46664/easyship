import { Component } from '@angular/core';

import {SendPage} from '../send/send';
import { ManagePage } from '../manage/manage';
import { HomePage } from '../home/home';
import {SettingsPage} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SendPage;
  tab3Root = ManagePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
