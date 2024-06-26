import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ILogin, Data, Profile, ILogoutRes, IUpdateProfileReq, IUpdateProfileRes, IUpdateProfileResData } from '../../../features/auth/models/ilogin';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('mainNav', { static: true }) mainNav!: ElementRef<HTMLDivElement>;
  routePath: string = '';
  loggedInRole: string = localStorage.getItem('role') ?? '';
  userName: string = localStorage.getItem('userName') ?? '';
  loggedInUser: any = {
    data: {
      accessToken: '',
      profile: {
        _id: '',
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        status: '',
      },
      refreshToken: '',
    },
    message: '',
  };
  items: any[] = [];

  
  @Input() sidebarCollapsed: boolean = false;
  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _Router: Router, 
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    ) {  }

  ngOnInit(): void {
    this.handleRouteEvents();
    this.handleRouteChange();
    this.getLoggedInUserData();
  }

  getLoggedInUserData(): void {
    this._AuthService.loggedInUser$.subscribe((loggedInUser: ILogin) => {
      this.loggedInUser = loggedInUser;
      
    });
  }


  private handleRouteChange(): void {
    const fullPath = this._Router.url;
  
    const segments = fullPath.split('/');

    if (segments.length > 0) {
      const specificSegment = segments[segments.length - 1];
      this.routePath = specificSegment;
    }
  }

  
  handleRouteEvents(): void {
    this._Router.events
      .pipe(filter((event) => event instanceof NavigationEnd)) 
      .subscribe(() => {
        this.handleRouteChange();
      });
  }

  onCloseSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.closeSidebar.emit(this.sidebarCollapsed);
  }

  
  logout(): void {
    localStorage.clear();
    this._Router.navigate(['/auth/login']);
  }


  
  onUpdateProfile(){
    this._Router.navigate(['/auth/update-profile'])
  }

  onLogout(){
    this._AuthService.logout().subscribe({
      next:(res:ILogoutRes)=>{
        this._ToastrService.success(res.message)
        localStorage.removeItem('userToken')
      },
      error:(err:HttpErrorResponse)=>{
        this._ToastrService.error(err.error.message)
      },complete:()=>{
        this._Router.navigate(['/auth/login'])
      }
    })
  }

  openChangePass(){
    this._Router.navigate(['/auth/changePassword'])
  }

}