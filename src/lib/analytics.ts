export const GA_MEASUREMENT_ID = 'G-CTW484X1XP'

// Log page views
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        })
    }
}

// Log custom events
export const trackEvent = ({ action, category, label, value }: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics Event] Action: ${action}, Category: ${category}, Label: ${label}, Value: ${value}`)
    }
}
