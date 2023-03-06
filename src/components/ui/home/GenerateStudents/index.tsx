import Input from 'components/common/Input';
import { ChangeEvent, useState } from 'react';
import MiniButton from 'components/common/MiniButton';
import * as S from './style';

interface GenrateStudentsType {
  admissionYear: number;
  defaultPassword: string;
  reDefaultPassword: string;
  numberOfStudents: number;
}

const GenerateStudnets = () => {
  const [generateStudentsData, setGenerateStudentsData] =
    useState<GenrateStudentsType>({
      admissionYear: 0,
      defaultPassword: '',
      reDefaultPassword: '',
      numberOfStudents: 0,
    });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGenerateStudentsData({ ...generateStudentsData, [name]: value });
  };

  return (
    <S.GenerateStudentsLayout>
      <S.Wrap>
        <S.GenerateStudentsBox>
          <S.Title>학생 아이디 생성</S.Title>
          <S.ColInputWrap>
            <Input
              desc="입학년도"
              placeholder="20XX"
              type="number"
              name="admissionYear"
              onChange={onChange}
            />
            <Input
              desc="학생 수"
              placeholder="최대 400명"
              type="number"
              name="numberOfStudents"
              onChange={onChange}
            />
          </S.ColInputWrap>
          <S.RowInputWrap>
            <S.InputWrap>
              <Input
                desc="초기 비밀번호"
                placeholder="20자 이내"
                type="password"
                name="password"
                onChange={onChange}
              />
            </S.InputWrap>
            <S.InputWrap>
              <Input
                desc="비밀번호 재입력"
                placeholder="20자 이내"
                type="password"
                name="password"
                onChange={onChange}
              />
            </S.InputWrap>
          </S.RowInputWrap>
          <MiniButton
            onClick={() => console.log('계정 생성')}
            option="FILLED"
            width="225px"
            value="계정 생성"
          />
        </S.GenerateStudentsBox>
      </S.Wrap>
    </S.GenerateStudentsLayout>
  );
};

export default GenerateStudnets;
