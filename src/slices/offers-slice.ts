import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
export interface OffersState {
    offers?: PrizeoutOffers;
}

// Define the initial state
export const offersInitialState: OffersState = {
    offers: [
        {
            data: [
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '775af84c-d388-4da7-b4cf-89f7fee1ebda',
                            cost_in_cents: 1470,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1500,
                        },
                        {
                            checkout_value_id: '21a2b9c5-f668-4c04-907b-019c53d72074',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: '24ed1a3d-8d86-4c7f-8bc8-1f4c3e6399b8',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/MAGZ-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Magazines.com',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'c4474fba-58d6-4a8d-9c6f-c6ada4e0f652',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: 'faf68334-95ed-4e2e-9576-2877f1f11afd',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/PETS-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: '1-800-PetSupplies',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '8f3f97dd-7888-4f74-8bdc-6bea021e49b8',
                            cost_in_cents: 1764,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1800,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/GCODESVE15_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'GCodes® Verizon Prepaid Plan $15 + $3 Taxes & Fees',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'd4ec7fb1-f214-4f76-9163-92a6cc6ef3a1',
                            cost_in_cents: 980,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1000,
                        },
                        {
                            checkout_value_id: '51df3cec-4277-4327-acd9-8c1e09c6c45e',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: '7257dd8d-fdf8-45de-abdc-7d565dd0d7e1',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/EBOOKUL_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Unlimited eBooks',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '55d3993c-3e47-4b16-a64f-6dd86b46eecd',
                            cost_in_cents: 980,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1000,
                        },
                        {
                            checkout_value_id: 'b499e360-e1c8-477e-907c-d49fc8ef0c8d',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/WEBKINZ_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Ganz Webkinz',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: 'Generated by the wegift import script',
                    giftcard_list: [
                        {
                            checkout_value_id: '6eb523cb-81ed-49f7-969a-2e37fb1f469e',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                        {
                            checkout_value_id: '2dbbf8be-efb5-487c-97c8-0bce02d2d2d8',
                            cost_in_cents: 7350,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 7500,
                        },
                        {
                            checkout_value_id: 'eec45e3a-cd8f-4d50-993f-f3e01f496e94',
                            cost_in_cents: 9800,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 10000,
                        },
                        {
                            checkout_value_id: 'fcb85aa9-3aaf-4dd6-8ff9-a9839af47a39',
                            cost_in_cents: 12250,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 12500,
                        },
                        {
                            checkout_value_id: '6e5e9373-4e8c-4ef7-971a-ff56da249709',
                            cost_in_cents: 14700,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 15000,
                        },
                        {
                            checkout_value_id: '7283d14e-8d03-4343-a98d-79b872538d54',
                            cost_in_cents: 19600,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 20000,
                        },
                        {
                            checkout_value_id: 'bdb718ba-cb11-403e-b535-0e2bb52f5aa8',
                            cost_in_cents: 24500,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 25000,
                        },
                        {
                            checkout_value_id: '7b2e9876-b588-45ba-bd0f-9af99dff4251',
                            cost_in_cents: 49000,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 50000,
                        },
                    ],
                    image_url: 'https://playground.wegift.io/static/product_assets/GHC-US/GHC-US-card.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Global Hotel Card US',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'c572620e-cd2c-4104-a7db-824bbde94531',
                            cost_in_cents: 490,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 500,
                        },
                        {
                            checkout_value_id: 'b6e068e5-a086-4864-9b5c-10a95bd726c1',
                            cost_in_cents: 980,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1000,
                        },
                        {
                            checkout_value_id: '130842d0-5d17-44ce-81c0-a031112b7562',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: 'bafced0a-fea4-4167-a5f7-b4d7ad25bf14',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                        {
                            checkout_value_id: 'a3fa3587-8d94-417c-8f0f-da5e2f61cb76',
                            cost_in_cents: 49000,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 50000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/SMCL-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: "Sam's Club",
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'bbee69a4-d795-45be-ac31-d10fd96487bd',
                            cost_in_cents: 980,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1000,
                        },
                        {
                            checkout_value_id: '63ed0fba-2863-4b4e-bd03-59a03c590b1c',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: 'a0c84738-ada2-42cc-b595-73b36ef55c65',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/IMVU-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'IMVU',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '849b2fdf-c7f7-4e11-98bc-a325f87536d8',
                            cost_in_cents: 490,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 500,
                        },
                        {
                            checkout_value_id: '681be73d-70f2-4ced-8fcc-37afad1852aa',
                            cost_in_cents: 980,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1000,
                        },
                        {
                            checkout_value_id: '23f6d358-797e-48c5-a6c9-600a9a6d1b40',
                            cost_in_cents: 1470,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1500,
                        },
                        {
                            checkout_value_id: '95acd5e1-56c8-43e3-a82d-0ab145ca1f33',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: 'dfeb9816-5e72-4ba6-8e9c-54026d8123b4',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/FACEBOOK_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Facebook Game Card',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'acc383df-153a-4e27-b73d-26bbd3ca958d',
                            cost_in_cents: 3528,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 3600,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/GCODESVE30_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'GCodes® Verizon Prepaid Plan $30 + $6 Taxes & Fees',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: null,
                    giftcard_list: [
                        {
                            checkout_value_id: 'd7a609b8-1d2b-4d46-b5f4-ae1f0ed408af',
                            cost_in_cents: 14700,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 15000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/WENT-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Wine Enthusiast',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'd15f6113-83a7-441c-88d3-c3a49adfd71b',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                        {
                            checkout_value_id: '5d332363-bd12-4f48-b9f8-d106d6b62aaa',
                            cost_in_cents: 9800,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 10000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/CLWY-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Callaway',
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '46795105-66dd-4f33-bd8f-f078aa0def3e',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/CPOP-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'CanvasPop',
                    stores: [],
                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '',
                    giftcard_list: [
                        {
                            checkout_value_id: '36bb5ec8-5ee3-451d-9135-87cb83a5bed4',
                            cost_in_cents: 2500,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: '068249f2-a834-43b2-95c3-203aee013ae4',
                            cost_in_cents: 5000,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                        {
                            checkout_value_id: 'c051464c-1ac0-4cba-8c54-04ff69aefe63',
                            cost_in_cents: 7500,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 7500,
                        },
                        {
                            checkout_value_id: '9669b8fe-bae4-4714-8e40-43b21c94c5f5',
                            cost_in_cents: 10000,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 10000,
                        },
                        {
                            checkout_value_id: '1c9b77ee-60eb-44ff-844a-49848e947ed2',
                            cost_in_cents: 12500,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 12500,
                        },
                        {
                            checkout_value_id: '9ec77bb8-215c-45e9-88a9-d68f4b435e92',
                            cost_in_cents: 15000,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 15000,
                        },
                        {
                            checkout_value_id: '8047da28-965f-48c5-a9d8-d98a2056e4ac',
                            cost_in_cents: 17500,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 17500,
                        },
                        {
                            checkout_value_id: '5657b32a-1611-48b2-b65b-fa46ec59fd76',
                            cost_in_cents: 20000,
                            display_bonus: 0,
                            display_monetary_bonus: null,
                            value_in_cents: 20000,
                        },
                    ],
                    image_url: 'https://dev.static.prizeout.com/campaign-creative/1605299018.527654-1234.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Instacart',
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'd6608903-2da9-49e0-8dc0-012e8427ad7a',
                            cost_in_cents: 1470,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 1500,
                        },
                        {
                            checkout_value_id: '32760be1-6c3e-478a-b3ff-42d362240932',
                            cost_in_cents: 2940,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 3000,
                        },
                        {
                            checkout_value_id: '7613733d-ab21-405d-9fcb-66d5effe70e9',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/SRXM-D-00-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'SiriusXM',
                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '8c968e91-8158-4057-8372-083f091ddbeb',
                            cost_in_cents: 1960,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/WGWOWSHIP_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Wargaming.net World of Warship',
                    stores: [],

                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: 'a586a1ce-f2f7-434f-851b-466569dbb0a0',
                            cost_in_cents: 490,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 500,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/PIRATE101_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'KingsIsle Pirate101',
                    stores: [],
                    support_creative_list: [],
                    tag: null,
                },
                {
                    checkout_hero_url: null,
                    currency_code: 'USD',
                    description: '0',
                    giftcard_list: [
                        {
                            checkout_value_id: '5b90aa99-cd39-4db9-9a48-d664e690b493',
                            cost_in_cents: 2450,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 2500,
                        },
                        {
                            checkout_value_id: 'd671f94f-0c5d-422e-a888-0e375dd5b9c7',
                            cost_in_cents: 4900,
                            display_bonus: 2.04,
                            display_monetary_bonus: null,
                            value_in_cents: 5000,
                        },
                    ],
                    image_url:
                        'https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/FNDG-D-01-16-1_fp01.png',
                    is_enabled: true,
                    logomark_url: null,
                    name: 'Fandango',
                    stores: [],
                    support_creative_list: [],
                    tag: null,
                },
            ],
            settings: {
                subtitle: null,
                title: 'Recommended for you',
            },
            type: 'vertical-offers',
        },
    ],
};

type PrizeoutOffers = PrizeoutOfferViews[];

export type PrizeoutOfferViews = {
    data: PrizeoutOffer[];
    settings?: PrizeoutOfferSettings;
    type: 'horizontal-offers' | 'vertical-offers';
};

export type PrizeoutOfferSettings = {
    subtitle?: string;
    title?: string;
};

export type PrizeoutOffer = {
    checkout_hero_url: string;
    currency_code: string;
    description: string;
    giftcard_list: PrizeoutOfferValueOptions[];
    image_url: string;
    is_enabled: boolean;
    logomark_url: string;
    name: string;
    stores?: []; // tbd in later phase
    support_creative_list?: []; // tbd in later phase
    tag: string;
};

export type PrizeoutOfferValueOptions = {
    checkout_value_id: string;
    cost_in_cents: number;
    display_bonus?: number;
    display_monetary_bonus?: number;
    value_in_cents: number;
};

/* eslint-disable */
type OffersRequest = {
    prizeoutSessionId: string;
};
/* eslint-enable */

export const offersSlice = createSlice({
    initialState: offersInitialState,
    name: 'offers',
    reducers: {},
});

export const selectOffers = ({ offers }: RootState): PrizeoutOffers => offers.offers;

export default offersSlice.reducer;
