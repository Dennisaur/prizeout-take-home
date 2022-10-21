import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PrizeoutOffer, PrizeoutOfferValueOptions } from './offers-slice';

export interface CheckoutSlice {
    isCollapsedCheckoutPanelOpen: boolean;
    loading: boolean;
    view: ViewEnum;
    selectedOffer?: PrizeoutOffer;
    selectedGiftcard?: PrizeoutOfferValueOptions;
}

export interface PrizeoutRequestBody {
    checkout_value_id: string;
    cost_in_cents: number;
    name: string;
    value_in_cents: number;
}

export type ViewEnum = 'checkout' | 'checkout-confirmation';

export const checkoutInitialState: CheckoutSlice = {
    isCollapsedCheckoutPanelOpen: false,
    loading: false,
    selectedGiftcard: null,
    selectedOffer: null,
    view: 'checkout',
};

export const prizeout = createAsyncThunk('prizeout', async (prizeoutRequestBody: PrizeoutRequestBody) => {
    console.log('Prizeout request body:', prizeoutRequestBody);
    const res = await fetch('/mockAPI', {
        body: JSON.stringify(prizeoutRequestBody),
        method: 'POST',
    });
    const data = await res.json();
    return data;
});

export const checkoutSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(prizeout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(prizeout.fulfilled, (state) => {
            state.loading = false;
            state.view = 'checkout-confirmation';
        });
        builder.addCase(prizeout.rejected, (state) => {
            state.loading = false;
        });
    },
    initialState: checkoutInitialState,
    name: 'checkout',
    reducers: {
        selectGiftcard(state, action: PayloadAction<PrizeoutOfferValueOptions>) {
            state.selectedGiftcard = action.payload;
        },
        selectOffer(state, action: PayloadAction<PrizeoutOffer>) {
            state.selectedOffer = action.payload;
            state.selectedGiftcard = null;
        },
        setCheckoutView(state, action: PayloadAction<ViewEnum>) {
            state.view = action.payload;
        },
        toggleIsCollapsedCheckoutPanelOpen(state) {
            state.isCollapsedCheckoutPanelOpen = !state.isCollapsedCheckoutPanelOpen;
        },
        toggleIsLoading(state) {
            state.loading = !state.loading;
        },
    },
});

export const { setCheckoutView, toggleIsCollapsedCheckoutPanelOpen, selectGiftcard, selectOffer, toggleIsLoading } =
    checkoutSlice.actions;

export const selectLoading = ({ checkout: { loading } }: RootState): boolean => loading;

export const selectCheckoutView = ({ checkout: { view } }: RootState): ViewEnum => view;

export const selectIsCollapsedCheckoutPanelOpen = ({
    checkout: { isCollapsedCheckoutPanelOpen },
}: RootState): boolean => isCollapsedCheckoutPanelOpen;

export const selectedOffer = ({ checkout }: RootState): PrizeoutOffer => checkout.selectedOffer;

export const selectedGiftcard = ({ checkout }: RootState): PrizeoutOfferValueOptions => checkout.selectedGiftcard;

export default checkoutSlice.reducer;
