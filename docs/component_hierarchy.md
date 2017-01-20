## Component Hierarchy

**SessionForm Container**
 - SessionForm

**AppContainer**
 - App
  + Header
  + Footer

**HomeContainer**
  - Home

**Dashboard Container**
 - Dashboard
  + Dashboard Events Container
    * Dashboard Events
  + Dashboard History Container
    * Dashboard History

**Cities Container**
 - Cities
 - City Container
  + City

**Hosting/Event Container**
 - Hosting
   + Hosting Profile Container
   + Event Form Container

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "SessionFormContainer" |
| "/signin" | "SessionFormContainer" |
| "/" | "AppContainer" |
| "/dashboard" | "DashboardEventsContainer" |
| "/dashboard/history" | "DashboardHistoryContainer" |
| "/cities" | "CitiesContainer" |
| "/cities/:cityId" | "CityContainer" |
| "/hosting" | "HostingProfileContainer"
| "/hosting/new" | "EventFormContainer" |
