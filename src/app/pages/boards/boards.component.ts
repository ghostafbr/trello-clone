import { Component } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Subitem 1.1',
        },
        {
          label: 'Subitem 1.2',
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Subitem 2.1',
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Subitem 3.1',
        },
        {
          label: 'Subitem 3.2',
        },
        {
          label: 'Subitem 3.3',
        }
      ]
    }
  ];

}
