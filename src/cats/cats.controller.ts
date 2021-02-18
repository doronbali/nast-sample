import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    public findAll(): string{
        return "all cats"
    }
}
