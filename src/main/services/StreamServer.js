import http from 'http';
import Webtorrent from 'webtorrent';

const getHeaders = (start, end, size) => ({
  'Content-Range': `bytes ${start}-${end}/${size}`,
  'Accept-Ranges': 'bytes',
  'Content-Length': end - start + 1,
  'Content-Type': 'video/mp4',
});

const extractRangeStart = (range = '') => {
  const start = range.replace(/bytes=/, '').split('-')[0];
  return Number(start);
};

class StreamServer {
  constructor() {
    this.server = http
      .createServer((req, res) => this.handleRequest(req, res))
      .listen(3000);
  }

  handleRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    if (this.file) {
      this.handleStreaming(req, res);
    } else {
      res.writeHead(204);
      res.end();
    }
  }

  handleStreaming(req: http.IncomingMessage, res: http.ServerResponse) {
    const { file } = this;
    const size = file.length;
    const start = extractRangeStart(req.headers.range);
    const end = size - 1;
    const stream = file.createReadStream({ start, end });

    res.writeHead(206, getHeaders(start, end, size));

    stream.pipe(
      res,
      { end: false },
    );

    stream.on('error', res.end);
    stream.on('close', res.end);
  }

  beginStreaming(file: Webtorrent.TorrentFile) {
    this.file = file;
  }
}

export default StreamServer;
