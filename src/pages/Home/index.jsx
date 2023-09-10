

import { Container, SectionContainerThee, SectionContainerTow } from "./styles";

export function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
    })
  }, [])
  return (
    <Container>
      <Banner />
      <ServicesCard />
      <SectionContainerTow id="section">SECTION</SectionContainerTow>
      <SectionContainerThee id="section-1">SECTION</SectionContainerThee>
    
    </Container>
  );
}
