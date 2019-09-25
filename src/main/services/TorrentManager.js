import Webtorrent from 'webtorrent';

class TorrentManager extends Webtorrent {
  /**
   * Add torrent and waits for the metadata
   * @param {*} torrent
   */
  addAsync(torrent: string): Promise<Webtorrent.Torrent> {
    return new Promise(resolve => this.add(torrent, {}, resolve));
  }
}

export default TorrentManager;
