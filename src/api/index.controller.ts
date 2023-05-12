import { Router } from 'express';
import { wrapper } from '../common/utils/express';
import { BadRequestException } from '../common/exceptions/http';

export const controller = Router();

controller

  .get(
    '/',
    wrapper(function () {
      return {
        message: 'Hello, World!',
      };
    }),
  )

  .get(
    '/error',
    wrapper(function () {
      throw new BadRequestException('Example error');
    }),
  );
