import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Our Projects | Q-Dev Solutions',
  description: 'Explore our completed projects and see how Q-Dev Solutions helps businesses succeed.',
  alternates: {
    canonical: 'https://qdevsolutions.com/projects',
  },
  openGraph: {
    title: 'Our Projects | Q-Dev Solutions',
    description: 'Explore our completed projects and see how Q-Dev Solutions helps businesses succeed.',
    url: 'https://qdevsolutions.com/projects',
    type: 'website',
  },
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <ProjectsClient />
      <Footer />
    </>
  );
}
