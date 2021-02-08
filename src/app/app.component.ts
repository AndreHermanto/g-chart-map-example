import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'g-chart-map-example';
  data = [
    [
      -37.7647,
      144.9393,
      "test@gmail.com"
    ],
    [
      40.4165,
      -3.7026,
      "ea@gmail.com"
    ],
    [
      -33.8591,
      151.2002,
      "test@utas.edu.au"
    ],
    [
      40.4165,
      -3.7026,
      "ea@gmail.com"
    ],
    [
      40.9481,
      -4.1184,
      "boom@gmail.com"
    ],
    [
      12.9719,
      77.5937,
      "qwer@gmail.com"
    ],
    [
      -37.8159,
      144.9669,
      "me@mama.org"
    ],
    [
      -33.9076,
      151.225,
      "kura@garvan.org.au"
    ],
    [
      40.9481,
      -4.1184,
      "boom@gmail.com"
    ],
    [
      -34.8794,
      150.6039,
      "tarno@org.au"
    ],
    [
      -34.845,
      150.6042,
      "trew@gmail.com"
    ],
    [
      22.2795,
      114.146,
      "trap@hust.edu.cn"
    ],
    [
      41.3888,
      2.159,
      "cok@gmail.com"
    ]
  ];
  columns = [
    "latitude",
    "longitude",
    "email"
  ];
  options = {}
}
