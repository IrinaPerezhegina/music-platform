import { Injectable } from '@nestjs/common';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name)
    private commentModel: Model<CommentDocument>,
  ) {}
  async create() {
    const track = await this.trackModel.create({});
  }
  async getAll() {}
  async getOne() {}
  async delete() {}
}
