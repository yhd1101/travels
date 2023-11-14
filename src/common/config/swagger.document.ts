import { DocumentBuilder } from '@nestjs/swagger';

export class BaseApIDocument {
  public builder = new DocumentBuilder();

  public initializeOptions() {
    return this.builder
      .setTitle('Travel Survey')
      .setDescription('public Travel Survey')
      .setVersion('1.0')
      .build();
  }
}
