import { SET_LOADER, CLOSE_LOADER, CREATE_ERRORS, REMOVE_ERRORS, REDIRECT_TRUE, REDIRECT_FALSE, SET_MESSAGE, REMOVE_MESSAGE, SET_POSTS, SET_POST, POST_REQUEST, POST_RESET, SET_UPDATE_ERRORS, RESET_UPDATE_ERRORS } from "../types/PostTypes";

const initState = {
    loading: false,
    createError: [],
    redirect: false,
    message: '',
    posts: [],
    perPage: 0,
    count: 0,
    post: {},
    postStatus: false,
    editErrors: [],
}

export const PostReducer = (state=initState, action)=>{
    const {type, payload} = action;

    if(type === SET_LOADER){
        return{
            ...state, loading: true
        };
    }else if(type === CLOSE_LOADER){
        return{
            ...state, loading: true
        };
    }else if(type === CREATE_ERRORS){
        return{
            ...state, createError: payload
        };
    }else if(type === REDIRECT_TRUE){
        return {...state, redirect: true};
    }else if(type === SET_MESSAGE){
        return { ...state, message: action.payload };
    }else if(type === REMOVE_ERRORS){
        return { ...state, createError: [] };
    }else if(type === REDIRECT_FALSE){
        return {...state, redirect: false };
    }else if(type ===  REMOVE_MESSAGE){
        return {...state, message:''};
    }
    else{
        return state;
    }
}

export const FetchPosts = (state=initState, action)=>{
    const {type, payload} = action;
    if(type === SET_POSTS){
        return {
            ...state, posts: payload.response, count: payload.count, perPage: payload.perPage,
        };
    }else{
        return state;
    }
}
export const FetchPost = (state=initState, action)=>{
    const {type, payload} = action;
    if(type === 'SET_POST'){
        return {...state, post: payload};
    }else if(type === POST_REQUEST){
        return{...state, postStatus: true};
    }else if(type === POST_RESET){
        return {...state, postStatus: false};
    }
    else{
        return state;
    }
};

export const UpdatePost = (state=initState, action)=>{
    const {type, payload} = action;

    if(type === SET_UPDATE_ERRORS){
        return {...state, editErrors: payload};
    }else if(type === RESET_UPDATE_ERRORS){
        return{ ...state, editErrors:[]};
    } 
    else{
        return state;
    }
}