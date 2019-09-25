/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import icons from '../../theme/icons';

type Props = {
  name: string,
};

const Icon = ({ name }: Props) => {
  const [svgIcon, setSvgIcon] = useState(null);

  useEffect(() => {
    import(icons[name]).then(module => console.log(module));
  }, [name]);

  return <>{svgIcon && svgIcon()}</>;
};

export default Icon;
