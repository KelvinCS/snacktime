import Webtorrent from 'webtorrent';

class TorrentManager extends Webtorrent {
  addAsync(torrent: string): Promise<Webtorrent.Torrent> {
    return new Promise((resolve) => {
      const torrentFile = this.add(torrent);

      torrentFile.on('ready', () => resolve(torrentFile));
    });
  }
}

export default TorrentManager;
