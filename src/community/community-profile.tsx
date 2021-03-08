import React, {useState, useEffect, useRef} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import env from 'app/app.env';
import {createForum} from '@peerboard/core';
import { useAuthState } from 'auth/auth.context';
import WebsiteLayout from 'website/website.layout';
import { getPeerboardToken } from 'api/request.api';

import CommunityLayout from './community.layout';

const boardID = env.PEERBOARD_BOARD_ID as number;
const pathPrefix = '/community';

function CommunityProfile() {
  const { isAuthenticated } = useAuthState();

  return isAuthenticated ? (
    <CommunityLayout>
      <PeerBoardContainer isAuthenticated={isAuthenticated} />
    </CommunityLayout>
  ) : (
    <WebsiteLayout isSignupToday={false}>
      <PeerBoardContainer isAuthenticated={isAuthenticated} />
    </WebsiteLayout>
  );
}

function PeerBoardContainer({ isAuthenticated }: Record<string, boolean>) {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const containerRef = useRef(null);

  const createPeerBoard = async () => {
    let options: any = {
      prefix: pathPrefix,
      minHeight: window.innerHeight,

      onTitleChanged: (title: string) => (window.document.title = title),

      onReady: () => setLoading(false),

      onFail: () => {
        setError('Failed to load forum...');
      },
    };

    if (isAuthenticated) {
      const { data } = await getPeerboardToken();

      if (data) {
        options = {
          ...options,
          jwtToken: data.token,
        };
      }
    }

    createForum(boardID, (containerRef.current as unknown) as HTMLElement, options);
  };

  useEffect(() => {
    createPeerBoard().catch((err: Record<string, string>) => {
      setError(err.message);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Community Profile | Money Minx</title>
          <meta
           property='og:description'
           content='Manage your Money Minx investor community profile.'
         />
       </Helmet>
      </HelmetProvider>
      {error}
      {loading && 'Loading...'}
      <div ref={containerRef} />
    </div>
  );
}


export default CommunityProfile;
