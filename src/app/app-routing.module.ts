import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatCompComponent } from './chat-comp/chat-comp.component';

const routes: Routes = [
    {path:'', redirectTo:'chat-comp', pathMatch:'full'},

    { path:'chat-comp', component: ChatCompComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
