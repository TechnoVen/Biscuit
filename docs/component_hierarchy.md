## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**AppContainer**
 - App
  + NavBar
  + HomeIndex
  + Footer

**Dashboard Container**
 - DashboardMain
  + DashboardHeader
  - DashboardHistory

**User Container**
 - UserEdit

**City Container**
 - City
  + CityChange
  + EventCard
  + EventHost

**Cities Container**
 - Cities
  + CityCard

**Hosting Container**
 - Hosting
  + HostingProfileForm
  + NewEventForm

**Host Container**
 - HostProfile

**Event Container**
 - Event


## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/" | "AppContainer" |
| "/dashboard" | "DashboardContainer" |
| "/dashboard/history" | "DashboardContainer" |
| "/users/edit" | "UserContainer" |
| "/cities" | "CitiesContainer" |
| "/cities/:cityName" | "CityContainer" |
| "/cities/:cityName/host/:hostId" | "HostContainer" |
| "/hosting" | "HostingContainer"
| "/hosting/new" | "NewEventForm" |
| "/kibble_meets/:meetId" | "EventContainer" |
