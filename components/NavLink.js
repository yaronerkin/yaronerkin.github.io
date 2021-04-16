import React from 'react';
import Link from 'next/link'

const NavLink = ({ url, as, className, children }) => {
  return (
    <Link href={url} as={as}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
};

NavLink.defaultProps = {
  url: '/'
};

export default NavLink
