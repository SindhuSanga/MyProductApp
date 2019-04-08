import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './config.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }
  showConfigResponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

       
        this.config = { ... resp.body };
      });
  }
}
