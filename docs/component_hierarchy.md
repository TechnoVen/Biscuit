## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**AppContainer**
 - App
  + NavBar
  + HomeSplashHeader
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
  + Splash Header
  + CityChange
  + EventCard
  + EventHost

**Cities Container**
 - Cities
  + CityCard

**HostingOptIn Container**
 - HostingOptIn
  + HostingSplashHeader
  + HostingMain
  + HostingForm

**NewEvent Container**
 - Event Form

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
| "/hosting" | "HostingOptInContainer"
| "/hosting/new" | "NewEventContainer" |
| "/kibble_meets/:meetId" | "EventContainer" |
