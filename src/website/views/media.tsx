import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import MMToolTip from 'common/components/tooltip';
import WebsiteLayout from 'website/website.layout';
import OwnerOneImg from 'assets/images/about/hussein.png';
import OwnerTwoImg from 'assets/images/about/jessica.png';
import OwnerLeftImg from 'assets/images/about/owner-left-img.png';
import { ReactComponent as OwnerTwitterIcon } from 'assets/images/about/owner-twitter-icon.svg';
import { ReactComponent as SecurityTickIcon } from 'assets/images/security/tick-icon.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/download-arrow.svg';
import GalleryIntro from 'assets/images/media/gallery-intro.png';
import GalleryNetWorth from 'assets/images/media/gallery-networth.png';
import GalleryAssetAllocation from 'assets/images/media/gallery-asset-allocation.png';
import GalleryAllAccounts from 'assets/images/media/gallery-all-accounts.png';
import GalleryMultiCurrency from 'assets/images/media/gallery-multi-currency.png';
import GalleryProjections from 'assets/images/media/gallery-projections.png';
import MoneyMinxLogo from 'assets/images/media/money-minx-logo.png';
import MoneyMinxIcon from 'assets/images/media/money-minx-icon.png';
import MoneyMinxIconPurple from 'assets/images/media/money-minx-icon-purple.png';
import ScreenshotAllocation from 'assets/images/media/money-minx-allocation.png'
import ScreenshotAllocationScreen from 'assets/images/media/money-minx-allocation-screen.png'
import ScreenshotNetWorth from 'assets/images/media/money-minx-net-worth.png'
import ScreenshotNetWorthScreen from 'assets/images/media/money-minx-net-worth-screen.png'
import MoneyMinxArticle from 'assets/images/media/money-minx-featured.png'
import MoneyMinxArticle2 from 'assets/images/media/money-minx-featured-2.png'
import MoneyMinxArticle3 from 'assets/images/media/money-minx-featured-3.png'
import MoneyMinxArticle4 from 'assets/images/media/money-minx-featured-4.png'
import { ReactComponent as InfoIcon } from 'assets/images/signup/info.svg';

const Media = () => {
  return (
    <WebsiteLayout>
      <HelmetProvider>
        <Helmet>
         <title>Media Kit | Money Minx</title>
          <meta name='description' content='Media Kit for Money Minx, a net worth calculator and investments tracker.' />
        </Helmet>
      </HelmetProvider>
      <div className='mm-new-container'>
        <AboutTopSection />
        <AboutOwnerSection />
        <ReasonsWhy />
        <MediaAssets />
      </div>
    </WebsiteLayout>
  );
};
export default Media;
export const AboutTopSection = () => {
  return (
    <section>
      <div className='row mm-about-top-section'>
        <div className='col-12 col-xl-7'>
          <div className=''>
            <h1>Media Kit</h1>
            <div className='p-b-10'>
              <p className='text'>
              Thank you for your interest in Money Minx. We are super excited you are on this page!
                Feel free to reach out to us at <a href='mailto:hello@moneyminx.com?Subject=Press%20Question'>hello@moneyminx.com</a>  if you have any questions or want to discuss
                your article. We would love to help.
            </p>
              <p>The download button below includes a zip file our logo, screenshots and other imagery you can use.
                Scroll down for individual logos and images you can download</p>
            </div>
            <a href='https://moneyminx-files.s3.amazonaws.com/assets/Money+Minx+Media+Kit.zip' download>
              <button className='mm-btn-animate mm-btn-primary'>Download Media Kit</button>
            </a>
            <p className='info-text'>Zip file of all assets</p>
          </div>
        </div>
        <div className='col-12 col-xl-5'>
          <div className='mm-about-right-banner'>
            <img src={MoneyMinxArticle3} alt='Money Minx Banner' className='feature-image-small'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutOwnerSection = () => {
  return (
    <section>
      <div className='mm-about-owner-section bg-white'>
        <div className='row'>
          <div className='col-xl-5 mm-owner-section-img'>
            <div className='left-owner-img'>
              <img alt='OWNER IMG' src={OwnerLeftImg} />
            </div>
          </div>
          <div className='col-xl-7 mm-owner-section-info'>
            <div className='owner-info'>
              <h2 className='mb-3'>Money Minx Founders</h2>
              <p className='text'>
                Money Minx was started by Jessica and Hussein Yahfoufi, a husband/wife team and investors from Southern California.
              </p>
              <p className='text'>
                Hussein is a veteran technologist with time as CIO for multiple financial service companies. Jessica is a
                market research and communications pro who loves to work for start-ups. As we expanded our investments
                outside of 401K, IRAs and the stock market, we needed a way to track it all in one place. Like most
                investors, we used Excel…but we knew there should be a better way. Something user-friendly, accessible and
                nice to look at - something like Money Minx. We hope our tools help you grow and diversify your portfolio.
                Be invested!
              </p>
              <ul className='owner-list'>
                <li>
                  <img alt='Owner' src={OwnerOneImg} />
                  <h3>Hussein</h3>
                  <a href='https://www.twitter.com/husseinyahfoufi' target='_blank' rel='noopener noreferrer'>
                    @husseinyahfoufi
                    <span className='twitter-icon'>
                        <OwnerTwitterIcon />
                      </span>
                  </a>
                </li>
                <li>
                  <img alt='Owner' src={OwnerTwoImg} />
                  <h3>Jessica</h3>
                  <a href='http://www.twitter.com/jessicayahfoufi' target='_blank' rel='noopener noreferrer'>
                    @jessicayahfoufi
                    <span className='twitter-icon'>
                      <OwnerTwitterIcon />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ReasonsWhy = () => {
  return (
    <div>
      <div className='mm-container-right SecurityPractice'>
        <div className='row security-top'>
          <div className='col-12'>
            <h2 className='large-heading-light'>5 Reasons for Money Minx</h2>
            <p className='text text-gap'>
              We are biased and have 100 reasons why Money Minx should exist. However, we limited ourselves to 5 reasons that
              may be more relevant to your audience.
            </p>
          </div>
          <div className='col-12'>
            <ul className='security-list'>
              <li>
                <div className='tick-icon'>
                  <SecurityTickIcon />
                </div>
                <p className='text'>
                  The current generation wants to handle their business on their own.
                  Finding a home (Zillow/Redfin), Stock Investing (Robin Hood), Filing Taxes (Turbo Tax),
                  Working on Demand (Uber, Instacart, Lyft) etc. Money Minx is providing easy-to-use tools to those that want to handle managing their portfolio on their own.
                </p>
              </li>
              <li>
                <div className='tick-icon'>
                  <SecurityTickIcon />
                </div>
                <p className='text'>
                  With the number of crowdfunding sites on the rise and more options on how to invest,
                  it's becoming harder and harder to keep track of your investments.
                  Most diversified investors are turning to Excel or Google Sheets to keep track of it all.
                  Money Minx replaces these spreadsheets and keeps your account balances up to date in one place.
                </p>
              </li>
              <li>
                <div className='tick-icon'>
                  <SecurityTickIcon />
                </div>
                <p className='text'>
                  More people are investing in crypto currencies. As this grows, investors need a way to track
                  their cryptocurrencies as an integrated part of their portfolio.
                </p>
              </li>
              <li>
                <div className='tick-icon'>
                  <SecurityTickIcon />
                </div>
                <p className='text'>
                  Money Minx provides tools that makes it easy to understand what investments you have,
                  how your investments are doing and what your current allocation is.
                  You can view your portfolio in a number of ways - charts/graphs, detailed data,
                  projections, and more - and all in a straight-forward, user friendly.
                  This makes the tool robust for the experienced investor, and welcoming (i.e. not intimidating)
                  and easy to understand for the less experienced.
                </p>
              </li>
              <li>
                <div className='tick-icon'>
                  <SecurityTickIcon />
                </div>
                <p className='text'>
                  Ever wonder how you compare to your peers? With Money Minx you can track your net worth
                  and asset allocation and compare them to others with a similar profile.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MediaAssets = () => {
  return (
    <section className='testimonial'>
      <div>
        <div className='black title-in-post medium-heading-light pb-3'>Media Assets</div>
        <div className='highlighted-text-light'>Logo and Icons</div>
        <div className='cards-row'>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={MoneyMinxLogo} alt='Money Minx Logo'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Money Minx Logo</span>
              <a href={MoneyMinxLogo} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={MoneyMinxIcon} alt='Money Minx Icon'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Money Minx Icon</span>
              <a href={MoneyMinxIcon} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={MoneyMinxIconPurple} alt='Money Minx Icon Purple'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Money Minx Icon Purple</span>
              <a href={MoneyMinxIconPurple} download><DownloadIcon/></a>
            </div>
          </div>
        </div>
        <div className='highlighted-text-light'>Video</div>
        <div className='cards-row'>
          <div className='cards-single'>
            <div className='gallery-card'>
              <iframe allowTransparency title='About Money Minx Video' allowFullScreen frameBorder='0'
                      scrolling='no' className='wistia_embed' name='wistia_embed'
                      src='https://fast.wistia.net/embed/iframe/ijjsaq6uez' />
            </div>
            <div className='card-caption mt-3'>
              <span>Wistia </span>
              <MMToolTip
              placement='top'
              message='Click on the ellipses (3 dots) on the video to get the embed code.'
            >
              <InfoIcon className='mt-n1' />
            </MMToolTip>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <iframe width='560' height='315' src='https://www.youtube.com/embed/T0hi3mfe2Tw'
                      frameBorder='0' title='Money Minx Video'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen />
            </div>
            <div className='card-caption mt-3'>
              <span>Youtube </span>
              <MMToolTip
                placement='top'
                message='View on Youtube then click on Share to get the embed code'
              >
                <InfoIcon className='mt-n1' />
              </MMToolTip>
            </div>
          </div>
        </div>
        <div className='highlighted-text-light'>Features Highlight</div>
        <div className='cards-row'>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={GalleryIntro} alt='Money Minx Overview'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Overview</span>
            <a href={GalleryIntro} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={GalleryNetWorth} alt='Money Minx Net Worth'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Net Worth</span>
              <a href={GalleryNetWorth} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={GalleryAssetAllocation} alt='Money Minx Asset Allocation'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Asset Allocation</span>
              <a href={GalleryAssetAllocation} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={GalleryMultiCurrency} alt='Money Minx Multi-Currency'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Multi Currency</span>
              <a href={GalleryMultiCurrency} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={GalleryAllAccounts} alt='Money Minx All Accounts'/>
            </div>
            <div className='card-caption mt-3'>
              <span>All Accounts</span>
              <a href={GalleryAllAccounts} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={GalleryProjections} alt='Money Minx Projections'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Projections</span>
              <a href={GalleryProjections} download><DownloadIcon/></a>
            </div>
          </div>
        </div>
        <div className='highlighted-text-light'>Screenshots</div>
        <div className='cards-row'>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={ScreenshotNetWorth} alt='Money Minx Net Worth Screenshot'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Net Worth</span>
              <a href={ScreenshotNetWorth} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={ScreenshotNetWorthScreen} alt='Money Minx Net Worth Screen'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Net Worth Screen</span>
              <a href={ScreenshotNetWorthScreen} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={ScreenshotAllocation} alt='Money Minx Allocation Screenshot'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Asset Allocation</span>
              <a href={ScreenshotAllocation} download><DownloadIcon/></a>
            </div>
          </div>
          <div className='cards-single'>
            <div className='gallery-card'>
              <img className='gallery-image' src={ScreenshotAllocationScreen} alt='Money Minx Allocation Screen'/>
            </div>
            <div className='card-caption mt-3'>
              <span>Asset Allocation Screen</span>
              <a href={ScreenshotAllocationScreen} download><DownloadIcon/></a>
            </div>
          </div>
        </div>
        <div className='highlighted-text-light'>Article Image</div>
        <div className='cards-row'>
          <div className='cards-single'>
          <div className='gallery-card'>
            <img className='gallery-image' src={MoneyMinxArticle} alt='Money Minx High Level'/>
          </div>
          <div className='card-caption mt-3'>
            <span>High Level</span>
            <a href={MoneyMinxArticle} download><DownloadIcon/></a>
          </div>
        </div>
          <div className='cards-single'>
          <div className='gallery-card'>
            <img className='gallery-image' src={MoneyMinxArticle2} alt='Money Minx Logo on White'/>
          </div>
          <div className='card-caption mt-3'>
            <span>Logo on White</span>
            <a href={MoneyMinxArticle2} download><DownloadIcon/></a>
          </div>
        </div>
          <div className='cards-single'>
          <div className='gallery-card'>
            <img className='gallery-image' src={MoneyMinxArticle3} alt='Money Minx Logo Overlay'/>
          </div>
          <div className='card-caption mt-3'>
            <span>Logo Overlay</span>
            <a href={MoneyMinxArticle3} download><DownloadIcon/></a>
          </div>
        </div>
          <div className='cards-single'>
          <div className='gallery-card'>
            <img className='gallery-image' src={MoneyMinxArticle4} alt='Money Minx Logo on Purple'/>
          </div>
          <div className='card-caption mt-3'>
            <span>Logo on Purple</span>
            <a href={MoneyMinxArticle4} download><DownloadIcon/></a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
