import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GitHubService} from '../../services/github';


@Component({
  templateUrl: 'build/pages/selected-fact-page/selected-fact-page.html',
  providers: [GitHubService]
})
export class SelectedFactPage {

  private user:string;
  public foundRepos;
  public username;
  
  constructor(private github: GitHubService, private _navController: NavController, private _navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.foundRepos = this._navParams.data.paramUser;
  }

  goBack(){
    this._navController.pop();
  }
  
  getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
}
