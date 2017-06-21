import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';
import { Route } from '@angular/router';

export const routerConfig : Route[] = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    
];