import { Component, Input, OnInit } from '@angular/core';
import { MetamaskconnectionService } from 'src/services/metamaskconnection.service';

@Component({
  selector: 'app-wallet-chart',
  templateUrl: './wallet-chart.component.html',
  styleUrls: ['./wallet-chart.component.scss']
})
export class WalletChartComponent implements OnInit {

  constructor(public connectionService: MetamaskconnectionService) { }

  ngOnInit(): void {
  }


  private getAdress():string {
    return document.getElementById('adress-text')?.innerHTML as string
  }

  public async copyAdress() {
      try {
        await navigator.clipboard.writeText(this.getAdress());
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }   
    }


    public chartActivate(act:boolean) {
      this.connectionService.walletActivate = act;
  }

}
