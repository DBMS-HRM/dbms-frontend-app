import axios from 'axios'

/**
 * Setup axios
 */
const BASE_URL = process.env.REACT_APP_API_BASE_URL
axios.defaults.baseURL = BASE_URL

console.log(BASE_URL)

/**
 * Register auth token for axios client
 * @param token
 */
export const setAuthToken = (token) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}

/**
 * Convert relative url into full url
 * @param path
 * @return {string}
 */
export const fullURL = (path) => {
    return new URL(path, BASE_URL).href
}

/**
 * Convert Axios response into {status: http_code, message: string} format
 * @param res
 * @return {{message: string, status: number}|{message, status}}
 */
function toMessage(res) {
    if (!res || !res.status) {
        return {status: 408, message: "Check your internet connection"}
    }
    if (res.status === 401) {
        if ((res.data) && (res.data.data) && (res.data.data.expired)) {
            // token expired
        }
    }
    return {status: res.status, message: res.data.message}
}

/**
 * Resolve Axios response
 * @param axiosRes
 */
export async function resolve(axiosRes) {
    try {
        return await axiosRes;
    } catch (e) {
        return e.response
    }
}

/**
 * Extract body.data section from resolved axios response
 * @param response
 * @return {Promise<({message: string, status: number}|{message, status}|*)[]>}
 */
export async function extractData(response) {
    const resp = await response
    const msg = toMessage(resp)
    const data =  (msg.status === 200)? resp.data.data : null
    return [msg, data]
}

/**
 * Extract whole body section from resolved axios response
 * @param response
 * @return {Promise<({message: string, status: number}|{message, status}|*)[]>}
 */
export async function extractBody(response) {
    const resp = await response
    const msg = toMessage(resp)
    const data =  (msg.status === 200)? resp.data : null
    return [msg, data]
}

/**
 * Resolve and extract body.data section from resolved axios response
 * @param axiosRes
 * @return {Promise<({message: string, status: number}|{message, status}|*)[]>}
 */
export async function extractDataResolve(axiosRes) {
    return extractData(resolve(axiosRes))
}

/**
 * Resolve and extract whole body section from resolved axios response
 * @param axiosRes
 * @return {Promise<({message: string, status: number}|{message, status}|*)[]>}
 */
export async function extractBodyResolve(axiosRes) {
    return extractBody(resolve(axiosRes))
}
