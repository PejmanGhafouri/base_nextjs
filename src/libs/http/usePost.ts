import {useCallback} from 'react'
import requester, {isRequestError, type RequestError} from './requester'

type OnSuccess<D> = (data: D) => void
type OnError<E> = (error: RequestError<E>) => void

interface Options<D, E> {
  onSuccess?: OnSuccess<D>
  onError?: OnError<E>
}

export default function usePost<P, D, E>(options: Options<D, E>) {
  const {onSuccess: generalOnSuccess, onError: generalOnError} = options

  const post = useCallback(
    (url: string, payload?: P, getOptions: Options<D, E> = {}) => {
      const {onSuccess, onError} = getOptions
      ;(async () => {
        try {
          const {data} = await requester.post(url, payload)
          if (generalOnSuccess) generalOnSuccess(data)
          if (onSuccess) onSuccess(data)
          return data
        } catch (e) {
          if (isRequestError(e)) {
            if (generalOnError) generalOnError(e)
            if (onError) onError(e)
          } else throw e
        }
      })()
    },
    [generalOnSuccess, generalOnError]
  )

  return {post}
}
