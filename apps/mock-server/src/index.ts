/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createServer } from '@mswjs/http-middleware';
import handlers from './handlers';

const httpServer = createServer({}, ...handlers);

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
httpServer.listen(9090);
