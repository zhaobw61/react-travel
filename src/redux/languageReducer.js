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
    
    return state;
}