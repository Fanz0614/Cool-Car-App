import React from 'react';
import { Dialog } from '../Dialog/index';

export const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{ backgroundColor: '#e3f2fd', paddingLeft: '30px' }}
    >
      <a class="navbar-brand" href="/">
        Fast Exotic Cars
      </a>

      <span class="navbar-text" style={{ marginLeft: '50px' }}>
        Explore and share your cool cars here
      </span>
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
        style={{ marginLeft: '50px' }}
      >
        Add New
      </button>
      <Dialog />
    </nav>
  );
};
