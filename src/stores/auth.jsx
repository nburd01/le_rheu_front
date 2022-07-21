import {atom} from 'jotai';
import Cookies from 'js-cookie';

export const userAtom = atom(Cookies.get('id')? Cookies.get('id'): "");
export const authorizationAtom = atom(Cookies.get('token')? Cookies.get('token'): "");