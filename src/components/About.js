import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.section`
  padding: 5%;
  background: ${(props) => props.bgColor};
  @media (min-width: 768px) {
    padding: 5% 10%;
  }
  .outer {
    font-size: 25px;
    color: ${(props) => props.theme.color.blue};
    font-family: ${(props) => props.theme.fam.bold};
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  .inner{  
    width: 100%;
    @media (min-width: 768px) {
    display: flex;
   justify-content: space-evenly;
}
    .info {
        padding: 0% 2%;
        width: 90%;
      @media (min-width: 768px) {
        width: 50%;
    }
     
      p{
        font-size:20px;
    font-family:${props => props.theme.fam.regular};
    color:#898989;
    margin-top:30px;
    margin-bottom:50px;
      }
      p:nth-of-type(2){
        font-size:20px;
    font-family:${props => props.theme.fam.regular};
    color:#898989;
    margin-top:30px;
    margin-bottom:50px;
      }
   
    
   }
 .detail{
    padding: 0% 2%;
    @media (min-width: 768px) {
        width: 50%;
    }
    p{
        font-size:20px;
    font-family:${props => props.theme.fam.regular};
    color:#898989;
    margin-top:23%;
    margin-bottom:50px;
      }  
      button{
        width: 180px;
        height: 45px;
        font-size: 20px;
       
        background: transparent;
        border: 1px solid blue;
        border-radius: 10px;
        a{
          color: #000;
        }
        &:hover{
          background-color: blue;
          color: #fff;
        }

        
      } 
    }
 
  }
  
`;

function About() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "#f3f3f3" : "#000"}
      color={isLight ? "#000000" : "#f3f3f3"}
      id="about"
    >
      <div className="outer">&lt;wrapper id="about"&gt; </div>
<div className="inner">
      <div className="info">
        <p>// about me</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          distinctio ea molestiae quod? Ut voluptatem, nesciunt maiores deserunt
          amet eaque soluta quas ipsum velit saepe nostrum natus ratione,
          architecto magni. Ducimus sunt accusamus, autem excepturi quia
          aliquid. Porro, tempore fugiat. Aliquid nesciunt ea dolorum quae nulla
          ipsum necessitatibus, pariatur aperiam illum assumenda sequi
          voluptatem amet provident recusandae suscipit quis cupiditate!
          Repellendus nobis harum et. Esse a vel iure magni rerum odit autem rem
          doloribus ipsam iusto quibusdam, ipsa, ratione repellendus, est eos
          libero? Natus hic, deserunt odio temporibus recusandae ullam? Modi
          sunt temporibus deleniti alias ullam similique nostrum, quam
          cupiditate aut! Aut nostrum aspernatur molestias modi aliquam cumque
          quo, rerum provident quisquam eius fugiat iure laboriosam fuga
          voluptatum, mollitia amet. Iusto esse laboriosam officiis, quia est
          explicabo iste quidem alias maxime ut quisquam sed molestias dicta
          laudantium, earum excepturi modi! Eum quia nam maxime voluptatum in
          dicta? Nobis, reiciendis aut.
        </p>
      </div>
      <div className="detail">
            <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          distinctio ea molestiae quod? Ut voluptatem, nesciunt maiores deserunt
          amet eaque soluta quas ipsum velit saepe nostrum natus ratione,
          architecto magni. Ducimus sunt accusamus, autem excepturi quia
          aliquid. Porro, tempore fugiat. Aliquid nesciunt ea dolorum quae nulla
          ipsum necessitatibus, pariatur aperiam illum assumenda sequi
       
        </p>
        <form method="get" action="file.doc">
        <button  type="submit"><a href="https://export-download.canva.com/TEVIE/DAFOPkTEVIE/16/0-38894201244.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20221023%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221023T143457Z&X-Amz-Expires=82165&X-Amz-Signature=e82eb6cf4cbfda1832a084ce6bcd2155e127d9c9a7365c118502485c31b4eba6&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Bondlile%2520Moyo.pdf&response-expires=Mon%2C%2024%20Oct%202022%2013%3A24%3A22%20GMT">Download CV</a></button>
        </form>
      
      
      </div>
      </div>

      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default About;
