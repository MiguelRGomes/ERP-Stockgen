import styled from 'styled-components';

export const Container = styled.header`
  color: white;
  padding: 1em;
  width: 100%;
  background-color: indigo;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .nav {
    height: 100%;
    .image {
      height: 100%;
    }
    display: flex;
    align-items: center;
    
    nav ul {
      display: flex;
      gap: .5em;
      list-style: none;
      
      li {
        position: relative;
        a {
          text-decoration: none;
          color: white;
        }
        ::after {
          content: '';
          position: absolute;
          width: 100%;
          bottom: -4px;
          height: 2px;
          right: 0;
          background-color: white;
        }
  
        ::before {
          content: '';
          position: absolute;
          width: 100%;
          top: -4px;
          height: 2px;
          right: 0;
          background-color: white;
        }
      }
    }
  }

  .signout {
    display: flex;
    justify-content: flex-end;
  }
`
