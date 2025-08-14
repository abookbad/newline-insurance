export type AnalyticsEvent = 'cta:quote' | 'cta:call' | 'estimator:change';

export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  // stub for future instrumentation
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development') console.debug('[analytics]', event, payload);
}


