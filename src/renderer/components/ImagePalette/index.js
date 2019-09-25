import React, { useEffect, useState } from 'react';
import vibrant from 'node-vibrant';

type Props = {
  src: String,
  children: React.Component,
};

export default function ImagePalette({ src, children }: Props) {
  const [loading, setLoading] = useState(false);
  const [palette, setPalette] = useState({});

  useEffect(() => {
    setLoading(true);

    vibrant
      .from(src)
      .getPalette()
      .then(colors => setPalette(colors))
      .then(() => setLoading(false));
  }, [src]);

  return <>{children({ palette, loading })}</>;
}
