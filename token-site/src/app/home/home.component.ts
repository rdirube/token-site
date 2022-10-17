import { Component, OnInit } from '@angular/core';
import { Attributes, TimeText } from 'src/shared/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public productAttributes!:Attributes[];
  public timeText!:TimeText[];
  constructor() {
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

}
