import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {SelectedFactPage} from '../selected-fact-page/selected-fact-page';
import {GitHubService} from '../../services/github';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  providers: [GitHubService]
})
export class HomePage {
    public foundRepos;
    public username;
  constructor(private github: GitHubService, private _navController: NavController) {
  }
  
  getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => this._navController.push(SelectedFactPage, {paramUser: this.foundRepos})
        );
    } 
    
    
    goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
  
  GoToGitFact(){
    
    this._navController.push(SelectedFactPage, {paramUser: this.foundRepos})
  }
}
