# Data Management for Atoro AI Shield

This directory contains centralized data structures for the website. Centralizing data management helps maintain consistency throughout the site.

## Client Logos Database (`clientLogos.ts`)

The client logos database provides a centralized approach to manage and display client logos throughout the site.

### Usage

```typescript
// Import the hook
import { useClientLogos } from '@/hooks/useClientLogos';

// In a component
const { 
  getAllLogos, 
  getLogosByIndustry, 
  getRandomLogos, 
  getLogosForService 
} = useClientLogos();

// Get all logos
const allLogos = getAllLogos();

// Get logos for a specific industry
const healthcareLogos = getLogosByIndustry('healthcare');

// Get random logos
const randomLogos = getRandomLogos(3);

// Get logos suitable for a specific service
const iso27001Logos = getLogosForService('iso27001');
```

### Using ClientLogos Component

The ClientLogos component makes it easy to display logos on any page:

```tsx
import ClientLogos from '@/components/services/ClientLogos';

// Show logos relevant to a service
<ClientLogos 
  service="iso27001" 
  title="Trusted by Leading Organizations" 
  description="Companies that trust our ISO 27001 services" 
/>

// Show a specific set of logos
<ClientLogos 
  logoIds={['picsellia', 'silktide', 'trawa']} 
  title="Our Featured Clients" 
/>

// Show random logos
<ClientLogos 
  count={4} 
  title="Our Clients" 
  description="Companies we've worked with" 
/>
```

### Adding a New Logo

1. Add the logo image file to `/public/logos/` directory
2. Add the logo data to the `clientLogosData` object in `clientLogos.ts`:

```typescript
export const clientLogosData: Record<string, ClientLogoItem> = {
  // ... existing logos
  
  newCompany: {
    id: 'newCompany',
    name: 'New Company Name',
    imagePath: '/logos/new-company-logo.png',
    altText: 'New Company logo',
    industries: ['industry1', 'industry2']
  }
};
```

### Logo Schema

Each logo entry follows this structure:

| Property | Type | Description |
|----------|------|-------------|
| id | string | Unique identifier for the logo |
| name | string | Company name |
| imagePath | string | Path to the logo image file |
| altText | string | Alternative text for accessibility |
| industries | string[] | Array of industries the company belongs to |

### Utility Functions

The database includes several utility functions:

- `getClientLogosByIndustry(industry)`: Get logos filtered by industry
- `getClientLogosByIds(ids)`: Get logos by their IDs
- `getRandomClientLogos(count)`: Get a random selection of logos
- `getLogosForService(service)`: Get logos relevant to a specific service

### Important Notes

- The ClientLogos component uses standard `<img>` tags for compatibility with Vite. Do not use Next.js components like `next/image` as they are not supported in this project.
- When implementing new components, ensure they use libraries compatible with the Vite build system.

## Best Practices

1. Always use the centralized logo database instead of hardcoding logo information
2. Use the `useClientLogos` hook to access logo data
3. Keep the industries list consistent
4. Use real client logos only (no placeholder or fictitious companies)
5. Keep logo images optimized (recommended size: 250x150px) 