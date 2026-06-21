/**
 * Error reporting helper — stubbed for local development.
 * In a production app, you can hook this up to Sentry, LogRocket, Datadog, etc.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[ErrorBoundary Capture]:", error, context);
}
