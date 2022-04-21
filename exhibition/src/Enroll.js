import React, { useState } from "react";

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
  margin-top: 2%;
  display: flex;
`;

const ContentTitle = styled.label`
  margin-left: 3%;
  width: 200px;
  font-size: 20px;
`;

const NameInput = styled.input`
  width: 300px;
`;

const BirthTitle = styled.label`
  margin-left: 0.5%;
  margin-right: 2%;
  font-size: 20px;
`;

const GenderTitle = styled.label`
  margin-left: 0.5%;
  margin-right: 2%;
  font-size: 20px;
`;

const GenderDiv = styled.div`
  /* align-items: center; */
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

function Enroll() {
  const [pw, setPW] = useState(false);
  const [pwck, setPWck] = useState(false);

  const passwordChange = (e) => {
    setPW(e.target.value);
  };

  const passwordckChange = (e) => {
    setPWck(e.target.value);
  };

  const pwtest = () => {
    if (pw !== pwck) {
      alert("error");
    } else {
      alert("good");
    }
  };

  const ConfrimClick = () => {
    pwtest();
  };

  return (
    <div>
      <div>
        <JoinTitle>회원가입</JoinTitle>
        <Title>-----로고-----</Title>
        <Title>Exhibition에 오신 것을 환영합니다.</Title>
        <Title>계정 정보를 입력해주세요.</Title>
      </div>

      <ContentDiv>
        <form>
          <ContentInnerDiv>
            <ContentTitle>이름</ContentTitle>
            <NameInput placeholder="이름" />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>생년월일</ContentTitle>
            <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
            <BirthTitle>년</BirthTitle>
            <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
            <BirthTitle>월</BirthTitle>
            <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>
            <BirthTitle>일</BirthTitle>
          </ContentInnerDiv>

          <ContentInnerDiv onChange={(e) => console.log(123)}>
            <ContentTitle>성별</ContentTitle>
            {/* <GenderDiv> */}
            <input type="radio" id="man" name="gender" value="man" />
            <GenderTitle for="man">남성</GenderTitle>
            <input type="radio" id="woman" name="gender" value="woman" />
            <GenderTitle for="woman">여성</GenderTitle>
            {/* </GenderDiv> */}
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>아이디</ContentTitle>
            <input placeholder="ID" />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>비밀번호</ContentTitle>
            <input placeholder="PW" type="password" onChange={passwordChange} />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>비밀번호 확인</ContentTitle>
            <input
              placeholder="Check PW"
              type="password"
              onChange={passwordckChange}
            />
          </ContentInnerDiv>
        </form>
      </ContentDiv>

      <ConfrimButton onClick={ConfrimClick}>확인</ConfrimButton>
    </div>
  );
}
export default Enroll;
