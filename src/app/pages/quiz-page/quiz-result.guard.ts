import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { QuizPageService } from './quiz-page.service';

@Injectable({
  providedIn: 'root',
})
export class QuizResultGuard implements CanActivate {
  constructor(private quizPageSvc: QuizPageService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if there is responses, we can go
    if (this.quizPageSvc.responses) {
      return true;
    } else {
      // else we go back to the quiz page
      this.router.navigate(['/quiz']);
      return false;
    }
  }
}
