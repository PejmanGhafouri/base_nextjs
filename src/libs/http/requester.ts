import axios, {type AxiosError, type AxiosResponse} from 'axios'
import settings from '@libs/settings'
import {type ApiData} from './interfaces'

const requester = axios.create({
  baseURL: settings.apiBaseUrl,
  timeout: 2 * 60 * 1000,
  withCredentials: true,
})

export type RequestError<Res = ApiData<unknown>> = AxiosError<Res>
export type RequestSuccess<Res = ApiData<unknown>> = AxiosResponse<Res>

export const isRequestError = axios.isAxiosError

export const standardErrorMessage = (e: RequestError) =>
  e.response?.data?.messages?.[0].content ?? ''

export default requester
