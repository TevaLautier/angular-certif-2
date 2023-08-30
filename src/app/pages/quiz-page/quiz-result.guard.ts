import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { QuizPageService } from './quiz-page.service';

@Injectable({
  providedIn: 'root',
})
export class QuizResultGuard implements CanActivate {
  constructor(private quizPageSvc: QuizPageService,private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean {
      if(this.quizPageSvc.responses){
        return true;
      }else{
        this.router.navigate(['/quiz'])
        return false;
      }
  }
}