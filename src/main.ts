import { createServer } from 'http';
import { parse } from 'url';
import nextApp from './next-app';
import expressApp from './express-app';
import detectPort from 'detect-port';
import apiControllers from './api';
import {
  errorNotFoundHandler,
  errorRequestHandler,
} from './common/utils/express';

async function main() {
  const port = await detectPort(3000);
  const nextRequestHandler = nextApp.getRequestHandler();

  console.clear();

  expressApp.use('/api', apiControllers);

  await nextApp.prepare();

  const server = createServer(async (request, response) => {
    const parsedUrl = parse(request.url ?? '', true);
    const { pathname } = parsedUrl;

    if (!pathname?.startsWith('/api')) {
      await nextRequestHandler(request, response, parsedUrl);
      return;
    }

    expressApp(request, response);
  });

  expressApp.use(errorNotFoundHandler(), errorRequestHandler());

  server.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}

void main();
