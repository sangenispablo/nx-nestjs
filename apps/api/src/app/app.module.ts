import { Module } from '@nestjs/common';

import { CoursesModule } from './modules/courses/courses.module';
import { AuthModule } from './modules/auth/auth.module';
import { VideosModule } from './modules/videos/videos.module';
import { AwardsModule } from './modules/awards/awards.module';

@Module({
  imports: [CoursesModule, AuthModule, VideosModule, AwardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
