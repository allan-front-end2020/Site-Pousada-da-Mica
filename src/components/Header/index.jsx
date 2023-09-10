import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Col } from 'antd';

// import { HouseLine } from '@phosphor-icons/react';
import { MenuOutlined } from '@ant-design/icons';
import { Container, HeaderContainer, SectionItemContainer, Logo, AdmContainer, Button, Drawer } from './styles';

import LogoImg from '../../assets/images/logoPousada.png';


export function Header() {
  const { services, id } = useParams();

  const [isParams, setIsParams] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('relative');
  const [open, setOpen] = useState(false);

  function showDrawer() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  useEffect(() => {

    if (services || id) {
      setIsParams(true);
    } else {
      setIsParams(false)
    }

  }, [services, id, isParams]);

  useEffect(() => {
    const handleScroll = () => {

      setScrollY(window.scrollY);
      setHeaderStyle(window.scrollY > 40 ? 'fixed' : 'relative');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Col xs={24} md={0} className='mobile'>
        <Drawer
          title="Hunter do brasil"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          width={300}
        >
          {isParams ? (
            <Link to="/">
              <HouseLine size={32} />
            </Link>
          ) : (
            <ul>
              <li onClick={onClose}>
                <a href="#inicio">Quem Somos</a>
              </li>
              <li onClick={onClose}>
                <a href="#services">Equipamentos</a>
              </li>
              <li onClick={onClose}>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          )}

        </Drawer>

        <HeaderContainer className={headerStyle === 'fixed' ? 'fixed' : 'relative'}>
          <MenuOutlined onClick={showDrawer} />
        </HeaderContainer>
      </Col>

      <Col xs={0} md={24}>
        <HeaderContainer className={headerStyle === 'fixed' ? 'fixed' : 'relative'}>
          <Link to="/">
            <Logo src={ LogoImg} />
          </Link>

          <SectionItemContainer>
            {isParams ? (
              <Link to="/">
                <HouseLine size={32} />
              </Link>
            ) : (
              <ul>
                <li className={headerStyle === 'fixed' ? 'fixed' : 'relative'}>
                  <a href="#inicio">QUEM SOMOS</a>
                  <a href="#services">CONHEÇA NOSSOS QUARTOS</a>
                  <a href="#contact">CONTATOS</a>
                </li>
              </ul>
            )}

          </SectionItemContainer>

          <AdmContainer>
            {/* <Avatar size="large" icon={<UserOutlined />} /> */}

            <Link to="/form">
              <Button>Cadastre-se</Button>
            </Link>


          </AdmContainer>

        </HeaderContainer>
      </Col>
    </Container >
  )
}