import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 17px;
  grid-template-areas:
    'a a b c'
    'a a d e'
    'f g h i'
    'j l l m'
    'k l l n';

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'a'
      'b'
      'c'
      'd'
      'e'
      'f'
      'g'
      'h'
      'i'
      'j'
      'k'
      'l'
      'm'
      'n';
  }
  .box {
    background-color: #f3f3f3;
    min-height: 190px;
  }
  .a {
    grid-area: a;
  }

  .b {
    grid-area: b;
  }

  .c {
    grid-area: c;
  }

  .d {
    grid-area: d;
  }

  .e {
    grid-area: e;
  }

  .f {
    grid-area: f;
  }

  .g {
    grid-area: g;
  }

  .h {
    grid-area: h;
  }

  .i {
    grid-area: i;
  }

  .j {
    grid-area: j;
  }

  .k {
    grid-area: k;
  }

  .l {
    grid-area: l;
  }

  .m {
    grid-area: m;
  }

  .n {
    grid-area: n;
  }

  .content {
    text-align: center;
    font-weight: 200;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    h2 {
      position: relative;
      &::after {
        content: '';
        width: 50px;
        height: 2px;
        background: #333;
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
