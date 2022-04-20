import React from "react";
import styled from "styled-components";

const JoinTitle = styled.h1`
  text-align: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const ContentDiv = styled.div`
  border: 3px solid;
  margin-left: 5%;
  margin-right: 5%;
`;

const ContentInnerDiv = styled.div`
  margin-top: 3%;
  display: flex;
`;

const ContentTitle = styled.p`
  margin-left: 3%;
  font-size: 20px;
`;

const NameInput = styled.input`
  margin-left: 2%;
`;

const ConfrimButton = styled.button`
  text-align: center;
  margin: auto;
  display: block;
`;

const OPTIONS = [
  { value: "apple", name: "사과" },
  { value: "banana", name: "바나나" },
  { value: "orange", name: "오렌지" },
];

const SelectBox = (props) => {
  return (
    <select>
      {props.options.map((option) => (
        <option
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

function App() {
  return (
    <div>
      <div>
        <JoinTitle>회원가입</JoinTitle>
        <Title>-----로고-----</Title>
        <Title>Exhibition에 오신 것을 환영합니다.</Title>
        <Title>계정 정보를 입력해주세요.</Title>
      </div>

      <ContentDiv>
        <ContentInnerDiv>
          <ContentTitle>이름</ContentTitle>
          <NameInput placeholder="이름" />
        </ContentInnerDiv>

        <ContentInnerDiv>
          <ContentTitle>생년월일</ContentTitle>
          <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
          <ContentTitle>년</ContentTitle>
          <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
          <ContentTitle>월</ContentTitle>
          <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
          <ContentTitle>일</ContentTitle>
        </ContentInnerDiv>

        <ContentInnerDiv onChange={(e) => console.log(123)}>
          <ContentTitle>성별</ContentTitle>
          <input type="radio" name="theme" value="MAN" />
          남성
          <input type="radio" name="theme" value="WOMAN" />
          여성
        </ContentInnerDiv>

        <ContentInnerDiv>
          <ContentTitle>아이디</ContentTitle>
          <input placeholder="ID" />
        </ContentInnerDiv>

        <ContentInnerDiv>
          <ContentTitle>비밀번호</ContentTitle>
          <input placeholder="PW" type="password" />
        </ContentInnerDiv>

        <ContentInnerDiv>
          <ContentTitle>비밀번호 확인</ContentTitle>
          <input placeholder="Check PW" type="password" />
        </ContentInnerDiv>
      </ContentDiv>

      <ConfrimButton>확인</ConfrimButton>
    </div>
  );
}

export default App;
