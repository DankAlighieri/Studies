import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
    ) {

      // params
    // localhost:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

      // query params
    // localhost:4200/portifolio/1?{name=felipe&token=123}
      this.activeRoute.queryParams.subscribe(
        resp => console.log(resp)
      )
   }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
