/* eslint-disable class-methods-use-this */
import http from 'http';

class StreamServer {
  constructor() {
    this.server = http.createServer((req, res) => this.handleRequest(req, res)).listen(3000);
  }

  handleRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    const { file } = this;
    const size = file.length;
    const start = Number((req.headers.range || '').replace(/bytes=/, '').split('-')[0]);
    const end = size - 1;
    const stream = file.createReadStream({ start, end });

    res.writeHead(206, this.getHeaders(start, end, size));

    stream.pipe(
      res,
      { end: false },
    );

    stream.on('error', res.end);
    stream.on('close', res.end);
  }

  getHeaders(start, end, size) {
    const chunkSize = end - start + 1;

    return {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    };
  }

  beginStreaming(file: File) {
    this.file = file;
  }
}

export default StreamServer;
