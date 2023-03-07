import Input from 'components/common/Input';
import { ChangeEvent, useState } from 'react';
import MiniButton from 'components/common/MiniButton';
import { GenerateStudentsFeature } from 'features/home/generateStudents.feature';
import { GenerateStudnetsType } from 'types/user.type';
import * as S from './style';

const GenerateStudnets = () => {
  const [generateStudentsData, setGenerateStudentsData] =
    useState<GenerateStudnetsType>({
      admissionYear: 0,
      defaultPassword: '',
      reDefaultPassword: '',
      numberOfStudents: 0,
    });
  const { generate } = GenerateStudentsFeature(generateStudentsData);
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
                name="defaultPassword"
                onChange={onChange}
              />
            </S.InputWrap>
            <S.InputWrap>
              <Input
                desc="비밀번호 재입력"
                placeholder="20자 이내"
                type="password"
                name="reDefaultPassword"
                onChange={onChange}
              />
            </S.InputWrap>
          </S.RowInputWrap>
          <MiniButton
            onClick={generate}
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
