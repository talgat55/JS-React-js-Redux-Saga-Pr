import {CREATE_POST} from "./types";
const forbidden = ['fuck', 'spam'];
export function forbiddenWordsMiddleWare({dispatch}) {
    return function (next){
        return function (action){
            if(action.type === CREATE_POST){
                const found = forbidden.filter(w => action.payload.title.includes(w));
                if(found.length){
                    return dispatch({type: 'SPAM_FOUND'});
                }
            }
            return next(action);
        }
    }
}