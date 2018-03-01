import {Component} from '@angular/core';

@Component({
    selector: 'app-conta-pagar',
    templateUrl: './conta-pagar.component.html',
    styleUrls: ['./conta-pagar.component.css']
})
export class ContaPagarComponent {

    listaContasPagar = [
        {nome: 'Supermercado', valor: 600},
        {nome: 'Cartão de crédito', valor: 2500},
        {nome: 'Conta de luz', valor: 120},
        {nome: 'Conta de agua', valor: 150},
    ];

    nome = '';

    valor = 0;

    inserirConta() {
        this.listaContasPagar.push({nome: this.nome, valor: this.valor});
    }

}
