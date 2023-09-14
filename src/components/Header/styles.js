import styled from 'styled-components';
import { Row, Drawer as _Drawer } from 'antd';

export const Container = styled(Row)`
    margin-top: -2px;

    .mobile {
        svg {
            font-size: 20px;
            cursor: pointer;
            fill: #000;
        }

        .relative, .fixed {
            position: fixed !important;
            height: 70px;
            background: #fff;
            box-shadow: 0 0 3px rgba(0,0,0,0.2);
        
        }

        .fixed {
            margin-top: -2px;
        }
    }
`;

export const HeaderContainer = styled.header`
     
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    right: 0;
    left: 0;
 

    color: white;
    padding: 20px; 
    margin-right: auto;
    margin-left: auto;
    max-width: 1440px; 

    
    transition: all 0.5s ease 0s;
    position: relative;
    z-index: 99999;

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 75px;
        background: #fff;

    }

    &.relative {
        position: absolute;
        height: 96px;
        background: transparent;
      
    }

    .ant-avatar {
        svg {
            margin-top: -15px;
        }
    }
`;

export const Logo = styled.img`
 height: 88px;

`;

export const SectionItemContainer = styled.nav`

    ul {
        padding: 0;
        margin-bottom: 0;
    }

    li {
        list-style: none;
        font-weight: normal;
        
        a {
            font-family: 'Dosis', sans-serif;
            margin: 0 7px;
            font-size: 16px;
            text-decoration: none;
            padding: 10px;
            color: #fff;
            transition:  0.2s ease-in-out, color 0.2s ease-in-out;
            font-weight: 700;

            &:hover {
                color: #c82;
                cursor: pointer;
            }
        }

        &.fixed {
            a {
                color: #000;
            
                &:hover {
                    color: #c82b00;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const AdmContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 cursor: pointer;
 color: black;

 a {
    text-decoration: none;
    font-size: 20px;
 }
`;

export const Button = styled.button`
 width: 150px;
 height: 43px;
 background-color: #eb3;
 border: unset;
 border-radius: 4px;
 color: white;
 font-size: 14px;
 transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

 &:hover {
    background-color: #c82;
    cursor: pointer;
    color :black;
 }
 `;

export const HomeButton = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  background-color: red;
 `;

export const Drawer = styled(_Drawer)`
    z-index: 9999;

    .ant-drawer-body {
        padding: 15px 0;
    }

    ul {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-bottom: 0;

        li {
            padding: 10px 25px;
            background-color: #fff;
            transition: all 0.2s ease 0s;

            &:hover {
                background-color: var(--bs-primary);

                a {
                    color: #fff;
                }
            }
        }
    }
`;
