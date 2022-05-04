import React, { useState } from "react";
import styled from "styled-components";
import Address from "./Address";
import Modal from "./Modal";

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
  padding-top: 3%;
  padding-bottom: 3%;
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

const TextInput = styled.input`
  width: 200px;
`;

const GenderTitle = styled.label`
  margin-left: 0.5%;
  margin-right: 2%;
  font-size: 20px;
`;

const GenderDiv = styled.div`
  vertical-align: middle;
  width: 300px;
`;

const ConfrimButton = styled.button`
  text-align: center;
  margin: auto;
  display: block;
`;

const Select = styled.select`
  display: block;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 5px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: gredy;
  }
  margin-left: 0.5%;
`;

function Enroll() {
  const selectList = [
    "이메일 선택",
    "@naver.com",
    "@daum.net",
    "@gmail.com",
    "직접 입력",
  ];

  const handleSelect = (e) => {
    setEmail(e.target.value);
  };

  const [id, setID] = useState("");
  const [pw, setPW] = useState(false);
  const [pwck, setPWck] = useState(false);
  const [email, setEmail] = useState("");
  const [emailText, setEmailText] = useState("");
  const [changeEmail, setChangeEmail] = useState("");

  const [addressbtn, setAddressBtn] = useState(false);

  const EmailInput = () => {
    if (email === "직접 입력") {
      return (
        <TextInput
          onChange={onChangeTextInput}
          placeholder="email"
          type="email"
          value={emailText}
        />
      );
    }
    return null;
  };

  const onChangeTextInput = (e) => {
    setEmailText(e.target.value);
  };

  const adressbuttonClick = () => {
    setAddressBtn(true);
  };

  const emailChange = (e) => {
    setChangeEmail(e.target.value);
  };

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

  // const idtest = () => {
  //   if (email !== "직접 입력" && changeEmail) {
  //     setID(changeEmail);
  //   } else {
  //     setID(email);
  //   }
  // };

  const ConfrimClick = () => {
    // idtest();
    pwtest();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(fullAddress);
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
            <TextInput placeholder="이름" />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>아이디</ContentTitle>
            <TextInput placeholder="ID" />
            <EmailInput />
            <Select onChange={handleSelect} value={email}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>비밀번호</ContentTitle>
            <TextInput
              placeholder="PW"
              type="password"
              onChange={passwordChange}
            />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>비밀번호 확인</ContentTitle>
            <TextInput
              placeholder="Check PW"
              type="password"
              onChange={passwordckChange}
            />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>닉네임</ContentTitle>
            <TextInput placeholder="닉네임" />
          </ContentInnerDiv>

          <ContentInnerDiv>
            <ContentTitle>주소</ContentTitle>
            <button
              onClick={() =>
                window.open(
                  "Address",
                  "_blank",
                  "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500"
                )
              }
            >
              주소 검색
            </button>
            {/* {isPopupOpen ? <Address /> : null}
            <button onClick={openPostCode}>예제</button> */}
          </ContentInnerDiv>

          <ContentInnerDiv onChange={(e) => console.log(123)}>
            <ContentTitle>성별</ContentTitle>
            <GenderDiv>
              <input type="radio" id="man" name="gender" value="man" />
              <GenderTitle htmlFor="man">남성</GenderTitle>
              <input type="radio" id="woman" name="gender" value="woman" />
              <GenderTitle htmlFor="woman">여성</GenderTitle>
            </GenderDiv>
          </ContentInnerDiv>
        </form>
      </ContentDiv>

      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
      <ConfrimButton onClick={ConfrimClick}>확인</ConfrimButton>
    </div>
  );
}
export default Enroll;
