import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';
import { UserRole } from '@prisma/client';
import { Roles } from './roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

export function Authorization(...roles: UserRole[]) {
  if (roles.length > 0) {
    // Apply Roles decorator and RolesGuard to the route
    return applyDecorators(Roles(...roles), UseGuards(JwtGuard, RolesGuard));
  }

  // Apply JWT guard to the route
  return applyDecorators(UseGuards(JwtGuard));
}
