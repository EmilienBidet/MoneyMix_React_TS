import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import WebsiteLayout from 'website/website.layout';
import CryptosImg from 'assets/images/features/investment-assets-cryptos.svg';
import SyncCryptoAccountsImg from 'assets/images/features/sync-crypto-accounts.svg';

const FeaturesCryptos = () => {
  return (
    <WebsiteLayout>
      <HelmetProvider>
        <Helmet>
          <title>Crypto Portfolio Tracker | Money Minx</title>
          <meta name='description' content='Track your cryptocurrencies as part of your overall investments portfolio by using Money Minx.' />
        </Helmet>
      </HelmetProvider>
      <div className='mm-new-container'>
        <FeaturesCryptosTopSection />
        <FeaturesCryptosBottomSection />
      </div>
    </WebsiteLayout>
  );
};
export default FeaturesCryptos;

export const FeaturesCryptosTopSection = () => {
  return (
    <section>
      <div className='row mm-about-top-section'>
        <div className='col-12 col-xl-7'>
          <div>
            <h1>Crypto Portfolio Tracker</h1>
            <div className='p-b-10'>
              <p className='text'>
                A well diversified portfolio is not complete without a little bit of cryptocurrencies in it.
                In addition to supporting bank accounts, loans, credit cards, and other investments, Money Minx also supports
                tracking and managing your cryptocurrencies.
              </p>
            </div>
            <Link to='/signup'>
              <button className='mm-btn-animate mm-btn-primary'>Get Started</button>
            </Link>
            <p className='info-text'>No credit card needed.</p>
          </div>
        </div>
        <div className='col-12 col-xl-5'>
          <img src={CryptosImg} alt={'Add Cryptos'} />
        </div>
      </div>
    </section>
  );
};

export const FeaturesCryptosBottomSection = () => {
  return (
    <section className='feature-section feature-section-reversed'>
      <div className='row'>
        <div className='col-lg-7 feature-image'>
          <img src={SyncCryptoAccountsImg} alt='Sync Crypto Wallets' />
        </div>
        <div className='col-lg-5 feature-content'>
          <h2>Cryptocurrency Wallets</h2>
          <p className='text'>
            Sync your Money Minx accounts with most popular crypto wallets like Coinbase, Gemini, Binance and more.
          </p>
        </div>
      </div>
    </section>
  );
};
