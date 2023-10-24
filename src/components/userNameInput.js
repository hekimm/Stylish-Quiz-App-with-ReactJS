import React, { useState } from "react";
import { useUserName } from "../context/userNameContext";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Yeni eklenen animasyonlar
const popIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h2`
  color: #007bff;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${popIn} 0.5s ease-out; // Yeni animasyon
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.hasError ? "red" : "transparent")};
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border: 2px solid #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); // Yeni gölge efekti
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: -15px; // hata mesajının form elemanları arasında doğal bir boşluk bırakması için
`;

const UserNameInput = () => {
  const { setUserName } = useUserName();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(""); // hata durumları için
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      // eğer input boşsa hata göster
      setError("Adınızı girin.");
    } else {
      setError(""); // hata mesajını temizle
      setUserName(inputValue);
      navigate("/quiz");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setError(""); // kullanıcı yazmaya başladığında hata mesajını gizle
          }}
          placeholder="Adınızı girin"
          aria-label="Adınızı girin" // erişilebilirlik için
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={!inputValue.trim()}>
          Kaydet
        </Button>{" "}
      </Form>
    </Container>
  );
};

export default UserNameInput;
