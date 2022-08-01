import { COUNTRIES } from './data/countries';

export default function onClickPreventDefault(e) {
    return e.preventDefault();
}

export function getPostCategoryId(slug) {
    switch (slug) {
        case 'business':
            return 43;
        case 'entertainment':
            return 44;
        case 'global':
            return 42;
        case 'health':
            return 46;
        case 'sports':
            return 45;
    }
}

export function getClassStatus(status) {
    switch (status) {
        case 'pending':
            return 'warning-button';
        case 'processing':
            return 'info-button';
        case 'on-hold':
            return 'primary-button';
        case 'completed':
            return 'success-button';
        case 'cancelled':
            return 'danger-button';
        case 'refunded':
            return 'secondary-button';
        case 'failed':
            return 'dark-button';
        case 'shipping':
            return 'violet-button';
    }
}

export const statusListNormal = [
    'pending',
    'on-hold',
    'processing',
    'shipping',
    'completed',
    'refunded',
];

export const statusListFailed = ['pending', 'failed', 'cancelled'];

export function statusToIndex(status) {
    return statusListNormal.indexOf(status);
}

export function statusToIndexFailed(status) {
    return statusListFailed.indexOf(status);
}

export function getAttributeValueByKey(key, metaData) {
    return metaData.filter((attribute, index) => attribute.key === key)[0]
        .display_value;
}

export function getCountryByCode(code) {
    if (!code) {
        return '';
    }

    if (
        COUNTRIES.filter((country, index) => country.code === code).length === 0
    ) {
        return '';
    }

    return COUNTRIES.filter((country, index) => country.code === code)[0];
}

export function getStateByCode(countryCode, stateCode) {
    if (!countryCode || !stateCode) {
        return '';
    }

    if (
        COUNTRIES.filter((country, index) => country.code === countryCode)
            .length === 0
    ) {
        return '';
    }

    if (
        COUNTRIES.filter(
            (country, index) => country.code === countryCode
        )[0].states.filter((state, index) => state.code === stateCode)
            .length === 0
    ) {
        return '';
    }

    return COUNTRIES.filter(
        (country, index) => country.code === countryCode
    )[0].states.filter((state, index) => state.code === stateCode)[0];
}

export function getTotalLineItems(lineItems) {
    let total = 0;
    lineItems.forEach((item, index) => {
        total += Number(item.subtotal);
    });
    return total.toFixed(2);
}

export function transferDate(date) {
    const d = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    
    return monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
}
