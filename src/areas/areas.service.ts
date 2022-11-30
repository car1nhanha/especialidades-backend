import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area, AreaDocument } from './entities/area.entity';

@Injectable()
export class AreasService {
  constructor(@InjectModel(Area.name) private areaModel: Model<AreaDocument>) {}

  create(createAreaDto: CreateAreaDto) {
    try {
      return this.areaModel.create(createAreaDto);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      return this.areaModel.find();
    } catch (error) {
      return error;
    }
  }

  findOne(id: string) {
    try {
      return this.areaModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  update(id: string, updateAreaDto: UpdateAreaDto) {
    try {
      return this.areaModel.findByIdAndUpdate(id, updateAreaDto).exec();
    } catch (error) {
      return error;
    }
  }

  remove(id: string) {
    try {
      return this.areaModel.findByIdAndDelete(id).exec();
    } catch (error) {
      return error;
    }
  }
}
