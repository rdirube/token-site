import { EventEmitter, Injectable } from '@angular/core';
import Web3 from 'web3';
import { ProviderRpcError } from 'src/shared/types/types';
import Swal from 'sweetalert2'

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
  public walletTokenAbr:string = '';
  walletTokenEmitter = new EventEmitter<string>()

  constructor() { 
    //consulto si existe metamask
    if(typeof window.ethereum !== undefined) {
      this.web3 = new Web3(window.ethereum);
      const ethereum = window.ethereum;
      console.log(ethereum) 
      if(window.ethereum.selectedAddress !== null) {
        this.adressSetter()

      }
    } else {
      Swal.fire({
        icon:'error',
        title:'Ooops..',
        text:'No tienes instalado MetaMask'
      })
    }
    
  }


 private adressSetter():void {
  const ethereum = window.ethereum;
  this.walletToken = ethereum.selectedAddress;
  this.walletTokenAbr =  ethereum.selectedAddress.slice(0,2)+ "..." + ethereum.selectedAddress.slice(ethereum.selectedAddress.length - 4, ethereum.selectedAddress.length);
  console.log(ethereum) 
}


  public connection():void {
    const ethereum = window.ethereum;
    ethereum.request({method: 'eth_requestAccounts'}) 
  }

  public disconnectWallet():void {
  }
}
