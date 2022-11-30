import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { encryption } from '../utils/auth/encryption';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password } = createUserDto;
      const { hash, salt } = await encryption.hashPassword(password);
      const data = {
        ...createUserDto,
        password: {
          hash,
          salt,
        },
      };
      return this.userModel.create(data);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      return this.userModel.find();
    } catch (error) {
      return error;
    }
  }

  findOne(id: string) {
    try {
      return this.userModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return this.userModel.updateOne({ _id: id }, updateUserDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: string) {
    try {
      return this.userModel.remove({ _id: id });
    } catch (error) {
      return error;
    }
  }
}
