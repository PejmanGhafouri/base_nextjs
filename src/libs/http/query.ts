import {
  useQuery as useTanStackQuery,
  type UseQueryOptions,
} from '@tanstack/react-query'
import requester, {type RequestError} from './requester'
import {useMemo} from 'react'
import type {Modify} from '@libs/utils/ts'

interface Res<TData> {
  data: TData
  statusCode: number
}

function createDefaultFetcher(url: string, size?: number) {
  async function fetcher() {
    const {status, data} = await requester.get(url, {
      params: {size},
    })
    return {statusCode: status, data}
  }

  return fetcher
}

interface Options<D, E>
  extends Modify<
    UseQueryOptions<D, E>,
    {queryKey?: UseQueryOptions<D, E>['queryKey']}
  > {
  url: string
  size?: number
}

export default function useQuery<TData, TError = RequestError | null>(
  options: Options<Res<TData>, TError> | string
) {
  const _options: UseQueryOptions<Res<TData>, TError> = useMemo(() => {
    if (typeof options === 'string') {
      return {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        queryKey: [options],
        queryFn: createDefaultFetcher(options),
        retry: false,
      }
    }
    const queryFn =
      options.queryFn ?? createDefaultFetcher(options.url, options.size)
    const queryKey = options.queryKey ?? [options.url]
    return {
      ...options,
      refetchOnMount: options.refetchOnMount ?? false,
      refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
      queryFn,
      queryKey,
      retry: options.retry ?? false,
    }
  }, [options])

  const {data: res, ...rest} = useTanStackQuery<Res<TData>, TError>(_options)

  const data = res?.data
  const statusCode = res?.statusCode

  return {
    data,
    statusCode,
    ...rest,
  }
}
