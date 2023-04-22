import ContentContainer from '@/components/layouts/content-container';
import HeroSection from '@/components/sections/hero-section';

const AppView: React.FunctionComponent = () => {
  return (
    <div className="app-view">
      <ContentContainer>
        <HeroSection />
      </ContentContainer>
    </div>
  );
};

export default AppView;
