export type RepositoryResult<T,E> = { isOk: false; error: E } | { isOk:true, model: T}
export type RepositoryResultAsync<T,E> = Promise<RepositoryResult<T,E>>