import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { EventsComponent } from './client/events/events.component';

import { PosterComponent } from './poster/poster.component';
import { CreatePostComponent } from './poster/create-post/create-post.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { EditUserComponent} from './admin/edit-user/edit-user.component';
import { UsersTableComponent } from './admin/users-table/users-table.component';

import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { PosterGuard } from './poster.guard';
import { MyPostsComponent } from './poster/my-posts/my-posts.component';
import { PostComponent } from './client/post/post.component';


const posterRoutes: Routes = [
  { path: 'CreatePost', component: CreatePostComponent, canActivate: [PosterGuard] },
  { path: 'EditPost/:id', component: CreatePostComponent, canActivate: [PosterGuard] },
  { path: 'MyPosts', component: MyPostsComponent, canActivate: [PosterGuard] },
  { path: 'login', component: LoginComponent }
];

const adminRoutes: Routes = [
  { path: 'AllUsers', component: UsersTableComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'EditUser/:name', component: EditUserComponent },
  { path: 'DeleteUser/:name', component: EditUserComponent },
  { path: 'login', component: LoginComponent }
];

const userRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'posts', component: EventsComponent},
  { path: 'posts/:id', component: PostComponent},
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

const appRoutes: Routes = [
  { path: 'Posts', component: ClientComponent },
  { path: 'Posts', component: ClientComponent, children: userRoutes },
  { path: 'Poster', component: PosterComponent, canActivate: [PosterGuard] },
  { path: 'Poster', component: PosterComponent, children: posterRoutes },
  { path: 'Admin', component: AdminComponent, canActivate: [AdminGuard]},
  { path: 'Admin', component: AdminComponent, children: adminRoutes , canActivate: [AdminGuard]},
  // { path: 'Registration', component: RegisterComponent  },
  // { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: '/Posts', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
