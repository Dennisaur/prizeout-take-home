import React, { useEffect } from 'react';
import Classnames from 'classnames';
import { PrizeoutOffer, PrizeoutOfferSettings } from '../../../../../slices/offers-slice';
import { OfferGiftCard } from '../offer-gift-card/offer-gift-card';
import { useAppSelector } from '../../../../../hooks';
import { selectIsCheckoutPanelCollapsed } from '../../../../../slices/common-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store';
import { toggleIsCollapsedCheckoutPanelOpen, selectOffer } from '../../../../../slices/checkout-slice';

import './vertical-offers.less';

interface OfferView {
    offers: PrizeoutOffer[];
    viewSettings?: PrizeoutOfferSettings;
}

const VerticalOffers: React.FC<OfferView> = ({ offers, viewSettings }): React.ReactElement => {
    const isCheckoutPanelCollapsedView = useAppSelector(selectIsCheckoutPanelCollapsed);
    const heading = viewSettings.title || 'Recommended for you';
    const classes: string = Classnames('vertical-offers');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(selectOffer(offers[0] || null));
    }, []);

    const offerClickHandler = (offer: PrizeoutOffer) => {
        if (isCheckoutPanelCollapsedView) {
            dispatch(toggleIsCollapsedCheckoutPanelOpen());
        }
        dispatch(selectOffer(offer));
    };

    const returnOffers = () => {
        return offers.map((offer) => (
            <OfferGiftCard
                key={`${heading}-${offer.name}`}
                offer={offer}
                onClickHandler={() => offerClickHandler(offer)}
            />
        ));
    };

    return (
        <div className={classes}>
            <h2>{heading}</h2>
            {offers && <div className="vertical-offers__gift-cards">{returnOffers()}</div>}
        </div>
    );
};

export default VerticalOffers;
