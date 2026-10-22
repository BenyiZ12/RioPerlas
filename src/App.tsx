import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import HomeEs from './pages/HomeEs.tsx'
import HomeEn from './pages/HomeEn.tsx'
import ResortEs from './pages/ResortEs.tsx'
import ResortEn from './pages/ResortEn.tsx'
import RoomsEs from './pages/RoomsEs.tsx'
import RoomsEn from './pages/RoomsEn.tsx'
import RoomDetailEs from './pages/RoomDetailEs.tsx'
import RoomDetailEn from './pages/RoomDetailEn.tsx'
import SpaEs from './pages/SpaEs.tsx'
import SpaEn from './pages/SpaEn.tsx'
import RestaurantEs from './pages/RestaurantEs.tsx'
import RestaurantEn from './pages/RestaurantEn.tsx'
import ExperiencesEs from './pages/ExperiencesEs.tsx'
import ExperiencesEn from './pages/ExperiencesEn.tsx'
import EventsEs from './pages/EventsEs.tsx'
import EventsEn from './pages/EventsEn.tsx'
import GalleryEs from './pages/GalleryEs.tsx'
import GalleryEn from './pages/GalleryEn.tsx'
import LocationContactEs from './pages/LocationContactEs.tsx'
import LocationContactEn from './pages/LocationContactEn.tsx'
import DayPassEs from './pages/DayPassEs.tsx'
import DayPassEn from './pages/DayPassEn.tsx'
import PuraPoraEs from './pages/PuraPoraEs.tsx'
import PuraPoraEn from './pages/PuraPoraEn.tsx'
import HikingEs from './pages/HikingEs.tsx'
import HikingEn from './pages/HikingEn.tsx'
import NotFound from './pages/NotFound.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es/" replace />} />
      <Route path="/es" element={<Navigate to="/es/" replace />} />
      <Route path="/en" element={<Navigate to="/en/" replace />} />
      <Route element={<Layout lang="es" />}>
        <Route path="/es/" element={<HomeEs />} />
        <Route path="/es/resort" element={<ResortEs />} />
        <Route path="/es/habitaciones" element={<RoomsEs />} />
        <Route path="/es/habitaciones/:slug" element={<RoomDetailEs />} />
        <Route path="/es/spa" element={<SpaEs />} />
        <Route path="/es/restaurante" element={<RestaurantEs />} />
        <Route path="/es/experiencias" element={<ExperiencesEs />} />
        <Route path="/es/senderismo" element={<HikingEs />} />
        <Route path="/es/pura-pora" element={<PuraPoraEs />} />
        <Route path="/es/bodas-y-eventos" element={<EventsEs />} />
        <Route path="/es/pase-diario" element={<DayPassEs />} />
        <Route path="/es/galeria" element={<GalleryEs />} />
        <Route path="/es/ubicacion-contacto" element={<LocationContactEs />} />
      </Route>
      <Route element={<Layout lang="en" />}>
        <Route path="/en/" element={<HomeEn />} />
        <Route path="/en/resort" element={<ResortEn />} />
        <Route path="/en/rooms" element={<RoomsEn />} />
        <Route path="/en/rooms/:slug" element={<RoomDetailEn />} />
        <Route path="/en/spa" element={<SpaEn />} />
        <Route path="/en/restaurant" element={<RestaurantEn />} />
        <Route path="/en/experiences" element={<ExperiencesEn />} />
        <Route path="/en/hiking" element={<HikingEn />} />
        <Route path="/en/pura-pora" element={<PuraPoraEn />} />
        <Route path="/en/weddings-events" element={<EventsEn />} />
        <Route path="/en/day-pass" element={<DayPassEn />} />
        <Route path="/en/gallery" element={<GalleryEn />} />
        <Route path="/en/location-contact" element={<LocationContactEn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
