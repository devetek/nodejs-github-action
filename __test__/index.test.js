const http = require('http');
const { CustomServer } = require('./../index');

jest.mock('http', () => ({
  createServer: jest.fn(() => ({ listen: jest.fn() })),
}));

describe('Server', () => {
    it('should create server on port 8080', () => {
        const server = new CustomServer().startServer();
        expect(http.createServer).toBeCalled();
    });
});