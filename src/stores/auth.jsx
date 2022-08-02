import { atom } from 'jotai';
import Cookies from 'js-cookie'

export const userIdAtom = atom(Cookies.get('id') ? Cookies.get('id') : "");
export const adminAtom = atom(Cookies.get('admin') ? Cookies.get('admin') : "false");
export const jwtAtom = atom(Cookies.get('token') ? Cookies.get('token') : "");
export const cookieAtom = atom(Cookies.get('token' ? true : false));
export const authorizationAtom = atom(Cookies.get('token')? Cookies.get('token'): "");
