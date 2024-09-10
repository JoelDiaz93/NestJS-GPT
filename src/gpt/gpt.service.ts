import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCases } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  //Solo va a llamar casos de uso
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCases(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
