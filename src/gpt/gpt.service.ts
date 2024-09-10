import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCases } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';

@Injectable()
export class GptService {
  //Solo va a llamar casos de uso
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCases({
      prompt: orthographyDto.prompt
    });
  }
}
