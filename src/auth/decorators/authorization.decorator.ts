import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';

export function Authorization() {
  // Apply JWT guard to the route
  return applyDecorators(UseGuards(JwtGuard));
}
