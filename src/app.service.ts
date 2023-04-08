import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppDetails() {
    return {
      'project' :'requestasong-api',
      'version' : '0.01',
      'status'  : 'alive'
    }
  }
}
