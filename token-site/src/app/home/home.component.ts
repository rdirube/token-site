import { Component, OnInit } from '@angular/core';
import { Attributes, TimeText } from 'src/shared/types/types';
import detectEthereumProvider from '@metamask/detect-provider';
import { MetamaskconnectionService } from 'src/services/metamaskconnection.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public productAttributes!:Attributes[];
  public timeText!:TimeText[];
  public web3!:any;
  public walletTokenAbr!:string;
  public walletConnected!:boolean;
  constructor(public connectionService: MetamaskconnectionService) {
    this.connectionService.walletActivate = false;
    this.walletConnected = false;
    this.productAttributes = [
      {
        image:'../../assets/images/reward.png',
        attribute: 'Instant Rewards'
      },
      {
        image: '../../assets/images/community.png',
        attribute: 'Community Powered'
      },
      {
        image: '../../assets/images/security.png',
        attribute: 'Secure & Safe'  
      },
      {
        image: '../../assets/images/tokens.png',
        attribute: '100% Token Sale'
      }
    ];

    this.timeText = [
      {
        currentTime:'00',
        timeType:'Days'
      },
      {
        currentTime:'00',
        timeType:'Hours'
      },
      {
        currentTime:'00',
        timeType:'Minutes'
      },
      {
        currentTime:'00',
        timeType:'Seconds'
      },
    ]

   

   }

  ngOnInit(): void {
  }


  public connectWithMetamask() {
    this.connectionService.connection()
  }

 



    public chartActivate(act:boolean) {
      if(this.connectionService.walletToken !== 'Disconnected') {
        this.connectionService.walletActivate = act;
      }
    }


    


}
