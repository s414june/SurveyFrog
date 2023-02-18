import { createStore } from 'vuex'
const survey: never[] = [];
export default createStore({
    state: {
        num: 111,
        id: 0,
        pages: survey,
        disable: {
            left: false,
            right: false,
        },
        progress: 0,
        blockRefs: {},
        nowPageIndex: 0,
        survey_length:0
    },
    mutations: {
        sendSurveyDatas(state,survey){
            state.pages = survey
        }
    }
})