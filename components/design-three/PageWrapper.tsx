'use client';

import Ticker from './Ticker';
import Navigation from './Navigation';
import Hero from './Hero';
import Platform from './Platform';
import RecentCharts from './RecentCharts';
import Footer from './Footer';

export default function PageWrapper() {
  return (
    <>
      {/* <Ticker />
      <Navigation /> */}
      <Hero />
      <Platform />
      <RecentCharts />
      {/* <Footer /> */}
    </>
  );
}
