import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}
@Injectable()
export class FileService {
  createFile(type: FileType, file) {
    try {
      const fileExtension;
      // 41:31
      const fileName = uuid.v4() + fileExtension;
      const filePath = path.resolve(__dirname, '..', 'static', fileName);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  removeFile(fileName: string) {}
}
