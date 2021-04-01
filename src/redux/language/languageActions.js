export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";



export const changeLanguageActionCreator = (languageCode) => {
    return {
        type: CHANGE_LANGUAGE,
        payLoad: languageCode
    };
}

export const addLanguageActionCreator = (name, code) => {
    return {
        type: ADD_LANGUAGE,
        payLoad: { name, code }
    };
}