export const config = {
    backButtonText: '',
    tabsHideOnSubPages: true,
    // locationStrategy: 'path' //use in prod to remove # in url
}

export const dbconfig = {
    name: '__tododb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
}

export const API_END_POINT: string = 'https://lexar.space/api';
