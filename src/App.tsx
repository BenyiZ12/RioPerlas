import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Resort from './pages/Resort'
import Thermal from './pages/Thermal'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Spa from './pages/Spa'
import Dining from './pages/Dining'
import Experiences from './pages/Experiences'
import Events from './pages/Events'
import DayPass from './pages/DayPass'
import Gallery from './pages/Gallery'
import Location from './pages/Location'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'

function Shell({ lang }: { lang: 'es' | 'en' }) {
  return <Layout lang={lang} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es/" replace />} />
      <Route path="/es" element={<Navigate to="/es/" replace />} />
      <Route path="/en" element={<Navigate to="/en/" replace />} />

      <Route element={<Shell lang="es" />}>
        <Route path="/es/" element={<Home />} />
        <Route path="/es/resort" element={<Resort />} />
        <Route path="/es/aguas-termales" element={<Thermal />} />
        <Route path="/es/habitaciones" element={<Rooms />} />
        <Route path="/es/habitaciones/:slug" element={<RoomDetail />} />
        <Route path="/es/spa" element={<Spa />} />
        <Route path="/es/gastronomia" element={<Dining />} />
        <Route path="/es/experiencias" element={<Experiences />} />
        <Route path="/es/eventos" element={<Events />} />
        <Route path="/es/pase-diario" element={<DayPass />} />
        <Route path="/es/galeria" element={<Gallery />} />
        <Route path="/es/ubicacion" element={<Location />} />
        <Route path="/es/privacidad" element={<Privacy />} />
      </Route>

      <Route element={<Shell lang="en" />}>
        <Route path="/en/" element={<Home />} />
        <Route path="/en/resort" element={<Resort />} />
        <Route path="/en/thermal-waters" element={<Thermal />} />
        <Route path="/en/rooms" element={<Rooms />} />
        <Route path="/en/rooms/:slug" element={<RoomDetail />} />
        <Route path="/en/spa" element={<Spa />} />
        <Route path="/en/dining" element={<Dining />} />
        <Route path="/en/experiences" element={<Experiences />} />
        <Route path="/en/events" element={<Events />} />
        <Route path="/en/day-pass" element={<DayPass />} />
        <Route path="/en/gallery" element={<Gallery />} />
        <Route path="/en/location" element={<Location />} />
        <Route path="/en/privacy" element={<Privacy />} />
      </Route>

      <Route
        path="*"
        element={
          <Layout lang="es">
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  )
}
