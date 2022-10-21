import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks';
import { selectedGiftcard, selectedOffer, selectGiftcard } from '../../../slices/checkout-slice';
import { AppDispatch } from '../../../store';
import { Button, GiftCard } from '../../common';
import checkoutPanelViewWrapper from '../view-wrapper';
import CheckoutButton from './checkout-button';

import './checkout.less';

const CheckoutPanelView: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const offer = useAppSelector(selectedOffer);
    const giftcard = useAppSelector(selectedGiftcard);

    const centsToDollarString = (number: number): string => {
        return `$${(number / 100).toFixed(2)}`;
    };

    const giftcardGridColumns = (): string => {
        switch (offer.giftcard_list.length) {
            case 1:
                return '';
            case 2:
                return 'grid--two-columns';
            case 3:
                return 'grid--three-columns';
            default:
                return 'grid--four-columns';
        }
    };

    const giftcardOptions = () => {
        const giftcards = offer?.giftcard_list.map((giftcard_item) => {
            const dollarString = centsToDollarString(giftcard_item.value_in_cents);
            return (
                <Button
                    key={giftcard_item.checkout_value_id}
                    type="button"
                    color={giftcard_item === giftcard ? 'primary' : 'unselected'}
                    size="small"
                    text={dollarString}
                    ariaLabel={dollarString}
                    onClick={() => {
                        dispatch(selectGiftcard(giftcard_item));
                    }}
                />
            );
        });

        return <div className={`grid ${giftcardGridColumns()} redemption-amount-list`}>{giftcards}</div>;
    };

    const redemptionDetails = () => {
        return (
            giftcard && (
                <div className="grid grid--two-columns redemption-details">
                    <div className="grid__item--x-start">Redemption Amount</div>
                    <div className="grid__item--x-end">{centsToDollarString(giftcard.cost_in_cents)}</div>

                    <div className="grid__item--x-start color--primary">
                        Prizeout Bonus (+${giftcard.display_bonus}%)
                    </div>
                    <div className="grid__item--x-end color--primary">
                        {centsToDollarString(giftcard.value_in_cents - giftcard.cost_in_cents)}
                    </div>

                    <div className="grid__item--x-start">You Get</div>
                    <div className="grid__item--x-end">{centsToDollarString(giftcard.value_in_cents)}</div>
                </div>
            )
        );
    };

    return (
        offer && (
            <section className="checkout">
                <div className="grid grid--top-bottom grid--stretch-top">
                    <div className="grid__item">
                        <section className="checkout__brand">
                            <GiftCard
                                name={offer.name}
                                imgUrl={offer.image_url}
                                altText={offer.name}
                                className="offer"
                            />
                        </section>
                        <section className="checkout__redemption-amount">
                            <h5>Select Redemption Amount</h5>
                            {giftcardOptions()}
                            {redemptionDetails()}
                        </section>
                    </div>
                    <div className="grid__item">
                        <section className="checkout__calculation">
                            <CheckoutButton />
                        </section>
                    </div>
                </div>
            </section>
        )
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
