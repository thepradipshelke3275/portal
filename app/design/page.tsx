import Features from '@/components/Features'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import RecentlyUpdated from '@/components/RecentlyUpdated'

export default function DesignPage() {
  return (
    <div>
      <Navigation/>
      <Header />
      <Features />
      <RecentlyUpdated />
    </div>
  )
}
