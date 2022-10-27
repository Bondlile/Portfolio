import React from 'react';
import { useSelector } from 'react-redux';
import { TextField } from "@mui/material";
import styled from 'styled-components';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  
  p{
    font-size:20px;
    font-family:${props => props.theme.fam.regular};
    color:${props => props.color};
    margin-top:30px;
  }
  h2 {
    margin: 40px 0px 30px 0;
    font-weight: 700;
    font-size: 35px;
    color:${props => props.theme.color.blue};
    font-family: 'Work Sans', sans-serif;
    @media (min-width: 768px) {
      margin-bottom: 45px;
      text-align: center;
    }
  }

  .inner{  
    @media (min-width: 768px) {
    display: flex;
   justify-content: space-evenly;
    }
    .info {
      @media (min-width: 768px) {
        width: 45%;
      }
      h3 {
        color:${props => props.theme.color.blue};
        margin: 0.67em 0px;
        font-weight: 700;
        font-size: 30px;
      }
      p:nth-of-type(1) {
        color:${props => props.color};
        font-weight: 500;
        line-height: 1.75;
        font-size: 16px;
        margin-bottom: 50px;
        padding-bottom: 10px;
      }
      .social {

        color:#808080;
        display: flex;
        padding-top: 20px;

        a {
          padding-top: 10px;
          text-decoration: none;
          color:#808080;
          font-weight: 500;
          font-size: 34px;
          margin-right: 25px;
        }
      }
    

   }

  .MuiTextField-root {
    width: 100%;
    color: #808080;
    border: none;
    margin-bottom: 20px;
    input {
      border: none;
      font-size: 14px;
    }
    label {
      color:${props => props.color};
      font-size: 14px;
    }

    .MuiInput-underline {
      height: 80px;
      padding-bottom: 15px;

      &:before {
        border-color: rgb(49,130,206);
      }
    }
    .Mui-focused {
      color: rgb(255, 0, 0);
      &:after {
        border-color: rgb(49,130,206);
      }
    }
  }
  button {
    padding: 0;
    border: 1px solid rgb(49,130,206);
    background: transparent;
    border-radius: 7px;
    height: 40px;
    display: flex;
    width: 250px;
    transition: all 0.7s ease;
    justify-content: space-evenly;
    align-items: center;
    color:${props => props.color};
    @media (min-width: 768px) {
      margin-left: auto;
      margin-top: 18px;
    }
    @media (min-width: 992px) {
      margin-right: 80px;
      width: 300px;
    }

    .btn-text {
      font-size: 14px;
      transition: all 0.7s ease;
      width: max-content;

      @media (min-width: 768px) {
        transform: translateX(30px);
      }
    }
      .btn-icon{
   svg{
     font-size: 20px;
   }
      }
    
    @media (min-width: 768px) {
      &:hover {
        .btn-text {
          transform: translateX(0);
        }
        .btn-icon{
          transform: translateX(0);
               height: 25px;
    width: 25px;
    background: rgb(49,130,206);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease 0s;
    svg{
      height: 12px;
    width: 12px;
    transition: all 0.7s ease 0s;
    }
        }
      }
    }
  }
  .bottom {
    padding: 20px;
    background: rgba(249, 82, 67, 0.45);
    max-width: 300px;
    @media (min-width: 768px) {
      margin-top: -100px;
      padding: 40px;
    }
  }
  form {
    margin-bottom: 30px;
    .inner {
      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .MuiTextField-root {
          width: 100%;
        }
      }
    }
  }
}
`

function Contact() {
  const isLight = useSelector(state => state.theme.isLight);
  const navigate = useNavigate();
  return (
    <Wrapper
    bgColor={isLight ? "#f3f3f3" : "#000"}
    color={isLight ? "#000000" : "#f3f3f3"}
    id='contact'
  >
    <div className="outer">&lt;wrapper id="contact"&gt; </div>
   
      <h2>Let’s Get in Touch.</h2>
      <div className="inner">
      <div className="info">
      <h3>Get In Touch 📡</h3>
      <p>
        Have any questions? <br />
        Shoot me an email or <br/>find me around the web.
      </p>
      <p>// Some socials</p>
      <div className="social">
        <a href="">
          <AiFillGithub />
        </a>{" "}
        <a href="">
          <TiSocialLinkedinCircular />
        </a>{" "}
        <a href="https://wa.me/263776292659">
            <FaWhatsapp />
          </a>
      </div>
    </div>
     
      <form
        action="https://formsubmit.co/bondlilemoyo20@gmail.com"
        method="POST"
        onSubmit={(e) => {
            e.preventDefault();
            navigate('/ThankYou', {replace: true});
          }}
      >
      <input type="hidden" name="_next" value={'//'}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
        <div className="inner">
          <TextField
            id="standard-basic"
            variant="standard"
            name="Name"
            label="Name"
          />
          <TextField
            id="standard-basic"
            variant="standard"
            name="Email"
            label="Email Address"
          />
        </div>
      
        <TextField
          id="standard-basic"
          variant="standard"
          name="message"
          label="Message..."
          multiline
          rows={3}
        />
        <button>
          <span className="btn-text">Send your message</span>
          <span class="btn-icon">
          <AiOutlineArrowRight />
          </span>
                          </button>
      </form>
      </div>
           <div className="outer">&lt;wrapper&gt; </div>
  </Wrapper>
  )
}

export default Contact