/**
 * Error reporting stub — no-op in local development.
 * Originally integrated with Lovable's error telemetry; decoupled for local use.
 */
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  // In production you could wire this to Sentry, Datadog, etc.
  console.error("[ErrorBoundary]", error, context);
}
