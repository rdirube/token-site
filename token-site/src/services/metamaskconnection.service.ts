import { EventEmitter, Injectable } from '@angular/core';
import Web3 from 'web3';
import { ProviderRpcError } from 'src/shared/types/types';
import Swal from 'sweetalert2'
import { timer } from 'rxjs';

declare let window :any;
// instancia window y le indica que existe y es de tipo any

@Injectable({
  providedIn: 'root'
})
export class MetamaskconnectionService {

  web3:any = null;
  get web3Instance() { return this.web3 };
  public chainIds: string[] = ['0x1'];
  public walletToken:string = "Disconnected";
  public walletTokenAbr:string = 'Disconnected';
  public isConnected!:boolean;
  public walletActivate!:boolean;
  public balance!:string;
  walletTokenEmitter = new EventEmitter<string>()

  constructor() { 
    this.walletActivate = false;
    //consulto si existe metamask
    if(typeof window.ethereum !== undefined) {
      this.web3 = new Web3(window.ethereum);
      console.log(window.ethereum)
      if(window.ethereum.selectedAddress !== null) {
        this.adressSetter()
        this.isConnected = true;
        this.getBalance().then(data => {
          console.log(data.slice(0, data.length - 1))
          this.balance = parseFloat(data.slice(0, data.length - 1)).toFixed(1)
        })
      } else {
        this.isConnected = false;
      }
    } else {
      Swal.fire({
        icon:'error',
        title:'Ooops..',
        text:'No tienes instalado MetaMask'
      })
    }
    // window.ethereum.on('disconnect', () => {
    //   this.walletToken = "Disconnected";
    //   this.walletTokenAbr = "Disconnected";
    // })
   
  }


 private adressSetter():void {
  const ethereum = window.ethereum;
  this.walletToken = ethereum.selectedAddress;
  this.walletTokenAbr =  ethereum.selectedAddress.slice(0,3)+ "..." + ethereum.selectedAddress.slice(ethereum.selectedAddress.length - 4, ethereum.selectedAddress.length);   
}


  public connection():void {
    const ethereum = window.ethereum;
    ethereum.request({method: 'eth_requestAccounts'}) 
    this.adressSetter()
  }

  private async getBalance():Promise<any> {
   const balance = await this.web3.eth.call({method: 'eth_getBalance'});
   return balance
  }

  public disconnectWallet():void {
    
  }
}
