import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{

	quantidade:number = 0;

  constructor() { }

	incrementar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -=1;
	}

	// checked → content → view

	// quando o primeiro conteudo e iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	// depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	// após alguma alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	// após alguma alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}
  ngOnInit(): void {
		console.log("ngOnInit");
  }

	ngOnDestroy(): void {
		console.log("Goodbye, my friend");
	}

}
