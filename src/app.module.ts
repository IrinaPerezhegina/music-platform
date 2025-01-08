import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://ue6cq6qjzkpxiuzxlun9:NOF77cpXhc71Z1GxXxaR@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bclirkbgnf25vjs?replicaSet=rs0',
    ),
    TrackModule,
  ],
})
export class AppModule {}
