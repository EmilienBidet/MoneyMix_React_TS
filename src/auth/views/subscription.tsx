import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import appEnv from 'app/app.env';
import AppHeader from 'common/app.header';
import AppFooter from 'common/app.footer';
import AppSidebar from 'common/app.sidebar';
import useToast from 'common/hooks/useToast';
import { loadStripe } from '@stripe/stripe-js';
import { appRouteConstants } from 'app/app-route.constant';
import useSubscriptions from 'auth/hooks/useSubscriptions';
import { pricingDetailConstant } from 'common/common.constant';
import CircularSpinner from 'common/components/spinner/circular-spinner';
import { getAccountsCount, postSubscriptionCheckout } from 'api/request.api';
import { ReactComponent as PricingTickIcon } from 'assets/images/pricing/tick-icon.svg';
import { ReactComponent as SubscriptionWarning } from 'assets/images/subscription/warning.svg';
import { ReactComponent as PricingTickIconCS } from 'assets/images/pricing/tick-icon-cs.svg';

const stripePromise = loadStripe(appEnv.STRIPE_PUBLIC_KEY);

const Subscription = ({ subscriptionEnded = true }) => {
  const [openRightNav, setOpenRightNav] = useState<boolean>(false);
  const [openLeftNav, setOpenLeftNav] = useState<boolean>(false);

  const closeRightNav = () => {
    setOpenRightNav(false);
  };
  return (
    <>
      <AppHeader
        toggleLeftMenu={() => setOpenLeftNav(!openLeftNav)}
        toggleRightMenu={() => setOpenRightNav(!openRightNav)}
        open={openRightNav}
        shadow={true}
      />
      <AppSidebar openLeft={openLeftNav} openRight={openRightNav} />
      <div className='mm-slider-bg-overlay' onClick={closeRightNav} role='button' />
      <div className='sub-ended-wrapper'>
        {subscriptionEnded && <PricingTopSection />}
        <SubscriptionPlansTable />
      </div>
    </>
  );
};
export default Subscription;
export const PricingTopSection = () => {


  return (

    <div className='container'>
      <div className='row'>
        <div className='subs-ended-msg-box'>
          <div className='subs-ended-left'>
            <h4>You don't have a Money Minx plan!</h4>
            <p>With the free plan you can only access the community. Choose a plan below to use the rest of Money Minx.</p>
          </div>
          <span className='warning-icon'>
            <SubscriptionWarning />
          </span>
        </div>
      </div>
    </div>

  );
};

const SubscriptionPlansTable = () => {
  const history = useHistory();
  const { mmToast } = useToast();
  const [type, setType] = useState<string>('monthly');
  const { loading, error, subscriptions } = useSubscriptions();
  const [connectedAccountState, setConnectedAccounts] = useState<number>(0);
  const [manualAccountState, setManualAccounts] = useState<number>(0);

  if (loading && !subscriptions && error) {
    return <CircularSpinner />;
  }

  const monthlyPricingList = subscriptions?.filter((sub: any) => sub.duration === 'month' && sub.active === true && sub.name !== 'Free');
  const annualPricingList = subscriptions?.filter((sub: any) => sub.duration === 'year' && sub.active === true && sub.name !== 'Free');

  const pricingList = type === 'monthly' ? monthlyPricingList : annualPricingList;

  const getAccountCount = async () => {
    const {
      data: { connectedAccounts, manualAccounts },
    } = await getAccountsCount();
    setConnectedAccounts(connectedAccounts);
    setManualAccounts(manualAccounts);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAccountCount();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const connectStripe = async (priceId: string) => {
    if (!priceId) {
      return mmToast('Price Id not found', { type: 'error' });
    }

    const stripe = await stripePromise;

    const payload = {
      subscriptionPriceId: priceId,
    };

    const { data, error: apiError } = await postSubscriptionCheckout(payload);
    if (apiError) {
      return mmToast('Can not stripe checkout id', { type: 'error' });
    }

    const checkoutId = data?.checkoutId;
    if (checkoutId && stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutId,
      });

      if (result.error) {
        return mmToast('Something went wrong with Stripe', { type: 'error' });
      }
    }
  };

  const handleBuyPlan = (stripePlan: any) => {
    if (
      connectedAccountState >= stripePlan?.details[pricingDetailConstant.CONNECTED_ACCOUNT] ||
      manualAccountState >= stripePlan?.details[pricingDetailConstant.MANUAL_ACCOUNT]
    ) {
      history.push(appRouteConstants.subscription.REVIEW);
    } else {
      connectStripe(stripePlan?.priceId);
    }
  };

  return (
    <>
      <div className='container-fluid'>
      <div className='row'>
        <div className='plan-section'>
          <div className='mm-plan-radios'>
            <input
              type='radio'
              id='mm-plan-month'
              value='monthly'
              name='mm-radio-time-interval'
              checked={type === 'monthly'}
              aria-checked={type === 'monthly'}
            />
            <label className='labels' htmlFor='mm-plan-month' onClick={() => setType('monthly')} role='button'>
              Monthly
            </label>
            <input
              type='radio'
              id='mm-plan-year'
              value='annually'
              name='mm-radio-time-interval'
              checked={type === 'yearly'}
              aria-checked={type === 'yearly'}
            />
            <label className='labels' htmlFor='mm-plan-year' onClick={() => setType('yearly')} role='button'>
              Annually
            </label>
            <span className='save-text' />
            <div className='mm-radio-bg' />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='pricing-table-wrapper'>
          {pricingList?.map((pt: any, index: number) => {
            return (
              <div className='price-table' key={index}>
                <div className='price-heading'>
                  <span className='price-plan-name'>{pt.name}</span>
                  <p>
                    {type === 'yearly' ? `$${pt.price}/Year` : `$${pt.price}/Month`}
                    {type === 'yearly' ? <span className='save-percentage'>Save ${pt.save}</span> : null}
                  </p>
                </div>
                <ul className='features-list'>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    {pt.details[pricingDetailConstant.CONNECTED_ACCOUNT]} connected accounts
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    {pt.details[pricingDetailConstant.MANUAL_ACCOUNT]} manual accounts
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    {'Current and '}
                    {pt.details[pricingDetailConstant.ALLOCATION_CHART_HISTORY] === 'Unlimited'
                      ? 'historical '
                      : `last ${pt.details[pricingDetailConstant.ALLOCATION_CHART_HISTORY]} months `}
                    asset allocation charts
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    {pt.details[pricingDetailConstant.CURRENCY] === 'USD'
                      ? 'USD support only '
                      : `USD, EUR, JPY, CHF and more currencies supported `}
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    Support for syncing with over 21,000 institutions
                  </li>
                  {pt.details[pricingDetailConstant.CRYPTO] === 'Yes' ? (
                    <li>
                      <div className='tick-icon'>
                        <PricingTickIcon />
                      </div>Sync your crypto wallets
                    </li>
                  ) : null}
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    Add custom manual accounts, positions and transactions
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    Calculate net worth projections
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIcon />
                    </div>
                    {pt.details[pricingDetailConstant.NAME]} badge
                  </li>
                </ul>
                <ul className='features-coming-soon-list'>
                  <li className='cs-list'>
                    <div className='highlighted-text-light'>Coming Soon!</div>
                  </li>
                  <li>
                    <div className='tick-icon'>
                      <PricingTickIconCS />
                    </div>
                    Compare your net worth and asset allocation to others.
                  </li>
                </ul>
                <button
                  className='mm-btn-animate trial-btn ml-3 btn-xs-block'
                  onClick={() => {
                    handleBuyPlan(pt);
                  }}
                >
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
      <AppFooter />
      </>
  );
};
