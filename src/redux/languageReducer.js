const defaultState = {
    language: 'zh',
    languageList: [
        {
            name: "中文",
            code: "zh"
        },{
            name: "English",
            code: "en"
        }
    ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    console.log('emmm', state,  );
    switch (action.type) {
        case "change_language":
            return { ...state, language: action.payload };
        case "add_language":
            return { ...state, languageList: [...state.languageList, action.payload] };
        default:
        return state;
    }
}