import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks';
import {
    prizeout,
    PrizeoutRequestBody,
    selectedOffer,
    selectedGiftcard,
    selectLoading,
} from '../../../slices/checkout-slice';
import { AppDispatch } from '../../../store';
import { Button } from '../../common';

const CheckoutButton: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const isCheckoutPanelLoading = useAppSelector(selectLoading);
    const offer = useAppSelector(selectedOffer);
    const giftcard = useAppSelector(selectedGiftcard);

    const [requestBody, setRequestBody] = useState<PrizeoutRequestBody | null>(null);

    const buttonText = 'Prizeout Gift Card';

    const buttonHandler = () => {
        // Checkout logic here
        dispatch(prizeout(requestBody));
    };

    useEffect(() => {
        if (offer && giftcard) {
            setRequestBody({
                ...giftcard,
                name: offer.name,
            });
        } else {
            setRequestBody(null);
        }
    }, [offer, giftcard, setRequestBody]);

    return (
        <>
            <Button
                ariaLabel="Prizeout your gift card"
                color={`primary`}
                onClick={buttonHandler}
                size="medium"
                text={buttonText}
                type="submit"
                isLoading={isCheckoutPanelLoading}
                isDisabled={requestBody === null}
            />
        </>
    );
};

export default CheckoutButton;
