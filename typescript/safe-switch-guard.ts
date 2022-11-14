const safeGuard = (arg: never) => {
    throw new Error('Safe guard executed!');
}

type Languages = 'RU' | 'EN';

const Languages = {
    doSomethingFor: (val: string): unknown => {
        const language = val as Languages;
        switch (language) {
            case 'RU':
            //case 'BR': // Error, need to implement all cases from Languages type
            case 'EN':
                return language;
            default:
                return safeGuard(language);
        }
    }
}