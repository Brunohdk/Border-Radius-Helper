export const jwt = require('jsonwebtoken')
export const TOKEN_KEY = "jwt_access_token"
export const PUBLIC_KEY = require('./public_key.pem')
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = token => localStorage.setItem(TOKEN_KEY, token)
export const logout = () => localStorage.removeItem(TOKEN_KEY)
