# Nordic Expressions Daily Learning App

A modern, responsive Next.js application for discovering daily Nordic language expressions from Sweden, Denmark, Norway, and Finland. Features live weather data and persistent user preferences.

[Live Demo](https://nordics.vercel.app/)

## Features

- **Daily Nordic expressions** from 4 countries (Swedish, Danish, Norwegian, Finnish)
- **Live weather data** for Nordic capitals
- **Persistent tab selection** - remembers your preferred language
- **Interactive card flipping** - learn expressions and language facts
- **Responsive design** with beautiful Nordic-inspired UI
- **Daily content** - fresh expressions every day
- **Real-time weather** integration with WeatherAPI.com

## Tech Stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **PostgreSQL** (Neon)
- **Prisma ORM**
- **Zustand** (state management with persistence)
- **WeatherAPI.com** (weather data)

## Prerequisites

Ensure you have the following installed:

- Node.js (version 20 or higher)
- pnpm (version 8 or higher)
- A Vercel account (recommended for database and deployment)
- WeatherAPI.com account (free tier available)

## Getting Started

### 1. Download Project Files

```bash
# Clone the repository
git clone <your-repo-url>
cd nordics

# Or if you have the zip file, extract it to your desired directory
```

### 2. Install Dependencies

```bash
# Install project dependencies
pnpm install
```

### 3. Set Up Neon Database on Vercel

1. Create a new project on Vercel
2. Navigate to the "Storage" tab
3. Select "Create Database"
4. Choose Neon Postgres
5. Follow Vercel's guided database setup wizard

Once created, Vercel will automatically:

- Generate a unique database connection string
- Add the connection string to your project's environment variables

### 4. Configure Environment Variables

Create your `.env` file:

```bash
cp .env.example .env
```

Your `.env` should look like this:

```env
# Database - Copy from Vercel Storage tab
DATABASE_URL="postgres://neondb_owner:your_password@your-host-pooler.c-2.us-east-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require"

# Weather API - Get from WeatherAPI.com
WEATHERAPI_KEY="your_weather_api_key_here"

# Next.js Configuration
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 5. Get WeatherAPI.com API Key

1. Visit [WeatherAPI.com](https://weatherapi.com)
2. Sign up for a free account (1 million calls/month)
3. Copy your API key from the dashboard
4. Add it to your `.env` file

### 6. Initialize Prisma and Database

```bash
# Generate Prisma client
pnpm prisma generate

# Run database migrations
pnpm prisma migrate deploy

# Seed the database with expressions
pnpm prisma db seed
```

### 7. Start Development Server

```bash
# Run the development server
pnpm dev
```

Open http://localhost:3000 in your browser to see the application.

## Database Management

### Viewing Database Data

To inspect your database and verify data:

```bash
# Open Prisma Studio
pnpm prisma studio
```

Visit http://localhost:5555 to view and manage your database data.

### Database Schema

The application uses the following models:

```prisma
model Expression {
  id            String   @id @default(uuid())
  date          String
  country       String
  expression    String
  pronunciation String
  meaning       String
  translation   String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@unique([date, country])
}

model CountryInfo {
  id          String @id @default(cuid())
  country     String @unique
  funFacts    String[]
  learningTime String[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Features Explained

### Daily Expressions

- **Daily content** for each Nordic language
- **Unique expressions** with pronunciation guides
- **Meaning and translation** for each expression
- **Automatic daily rotation** based on current date

### Weather Integration

- **Live weather data** for Nordic capitals
- **Real-time updates** with 6-hour caching
- **Weather icons** and temperature display
- **Fallback handling** for API failures

### Persistent User Experience

- **Tab persistence** - remembers your selected language
- **Smooth loading** - no flash on page refresh
- **Local storage** integration with Zustand

## API Integration

The application integrates with:

- **WeatherAPI.com**: Real-time weather data for Nordic capitals
- **Internal API**: `/api/weather` for weather data processing

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `WEATHERAPI_KEY`
3. Deploy automatically on push to main branch

### Environment Variables for Production

```env
DATABASE_URL="your_production_database_url"
WEATHERAPI_KEY="your_weather_api_key"
NEXT_PUBLIC_BASE_URL="https://your-domain.vercel.app"
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Note**: This app is designed for daily Nordic language learning. The expressions are curated to provide cultural insights and practical language knowledge for each Nordic country.
