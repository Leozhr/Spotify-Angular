import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Device } from '../common/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const device = new Device();

    if (device.type() == false) {
      return this.NotCompatible();
    }

    return true;
  }

  NotCompatible() {
    localStorage.clear();
    this.router.navigate(['/incompatible']);
    return false;
  }
}
