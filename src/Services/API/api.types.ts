export interface ApiConfig {
  headers?: Record<string, string>
}

export type ApiResult<T> = { kind: "OK"; payload?: T} | { kind: string }